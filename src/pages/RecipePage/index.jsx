import { useEffect, useMemo, useState } from "react";
import { receitas } from "../../data/receitas";
import { useNavigate, useParams } from "react-router-dom";
import NotFoundPage from "../NotFoundPage";

function RecipePage() {
    const { id } = useParams();
    const navigate = useNavigate();
    const receita = useMemo(
        () => receitas.find((item) => String(item.id) === String(id)),
        [id]
    );

    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);
    const [checkedItems, setCheckedItems] = useState({});
    const [shareFeedback, setShareFeedback] = useState("");

    useEffect(() => {
        if (!receita) return;

        const savedRating = localStorage.getItem(`cine-bite-rating-${receita.id}`);
        setRating(savedRating ? Number(savedRating) : 0);

        try {
            const savedList = JSON.parse(localStorage.getItem(`cine-bite-lista-${receita.id}`));
            setCheckedItems(savedList || {});
        } catch {
            setCheckedItems({});
        }
    }, [receita]);

    function handleRate(value) {
        setRating(value);
        localStorage.setItem(`cine-bite-rating-${receita.id}`, String(value));
    }

    function toggleItem(item) {
        setCheckedItems((current) => {
            const next = { ...current, [item]: !current[item] };
            localStorage.setItem(`cine-bite-lista-${receita.id}`, JSON.stringify(next));
            return next;
        });
    }

    async function handleShare() {
        const shareData = {
            title: receita.title,
            text: `Confira a receita de ${receita.title}, de ${receita.filme}!`,
            url: window.location.href,
        };

        try {
            if (navigator.share) {
                await navigator.share(shareData);
                return;
            }
            await navigator.clipboard.writeText(shareData.url);
            setShareFeedback("Link copiado!");
            setTimeout(() => setShareFeedback(""), 2500);
        } catch {
            // usuário cancelou o compartilhamento
        }
    }

    if (!receita) {
        return <NotFoundPage />;
    }

    return (
                    <main className="max-w-[820px] mx-auto px-6 pb-32">
                        {/* navigate(-1) faz um POP de verdade, restaurando a posição de rolagem anterior */}
                        <button
                            onClick={() => navigate(-1)}
                            className="inline-block text-(--text) opacity-60 hover:opacity-100 duration-200 mb-10 cursor-pointer"
                        >
                            ← Voltar às receitas
                        </button>

                        <div className="rounded-[25px] overflow-hidden mb-10">
                            <img
                                src={receita.img}
                                alt={receita.title}
                                className="w-full h-[320px] object-cover"
                            />
                        </div>

                        <h1 className="text-(--text) font-bold text-[40px] md:text-[52px] text-center mb-6">
                            {receita.title}
                        </h1>

                        {/* Filme/série, ano e curiosidade */}
                        <div className="bg-(--bg-card) border border-white/10 rounded-[20px] px-8 py-6 mb-8 text-center">
                            <p className="text-(--text-secondary) font-bold text-lg mb-2">
                                🎬 {receita.filme} ({receita.ano})
                            </p>
                            <p className="text-(--text-terciary) text-sm italic">
                                {receita.curiosidade}
                            </p>
                        </div>

                        <p className="text-(--text-terciary) text-center mb-10">
                            {receita.description}
                        </p>

                        {/* Tempo, dificuldade e rendimento */}
                        <div className="flex flex-wrap justify-center gap-4 mb-14">
                            <span className="bg-(--bg-card) border border-white/10 rounded-full px-5 py-2.5 text-(--text) font-bold text-sm">
                                ⏱ {receita.time}
                            </span>
                            <span className="bg-(--bg-card) border border-white/10 rounded-full px-5 py-2.5 text-(--text) font-bold text-sm">
                                📊 {receita.difficulty}
                            </span>
                            <span className="bg-(--bg-card) border border-white/10 rounded-full px-5 py-2.5 text-(--text) font-bold text-sm">
                                🍽 {receita.rendimento}
                            </span>
                        </div>

                        {/* Avaliação com estrelas */}
                        <div className="flex flex-col items-center gap-2 mb-14">
                            <p className="text-(--text) font-bold">Avalie esta receita</p>
                            <div className="flex gap-1 text-[32px]">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        onClick={() => handleRate(star)}
                                        onMouseEnter={() => setHoverRating(star)}
                                        onMouseLeave={() => setHoverRating(0)}
                                        aria-label={`Avaliar com ${star} estrela${star > 1 ? "s" : ""}`}
                                        className="cursor-pointer leading-none"
                                    >
                                        <span className={(hoverRating || rating) >= star ? "text-(--button)" : "text-white/20"}>
                                            ★
                                        </span>
                                    </button>
                                ))}
                            </div>
                            {rating > 0 && (
                                <p className="text-(--text-terciary) text-sm">Sua nota: {rating}/5</p>
                            )}
                        </div>

                        {/* Lista de compras */}
                        <section className="mb-14">
                            <h2 className="text-(--text) font-bold text-2xl mb-4">🛒 Lista de compras</h2>
                            <ul className="flex flex-col gap-2">
                                {receita.ingredientes.map((item) => (
                                    <li key={item}>
                                        <label className="flex items-center gap-3 bg-(--bg-card) border border-white/10 rounded-[14px] px-5 py-3 cursor-pointer">
                                            <input
                                                type="checkbox"
                                                checked={!!checkedItems[item]}
                                                onChange={() => toggleItem(item)}
                                                className="w-5 h-5 accent-[var(--button)]"
                                            />
                                            <span className={`text-(--text) ${checkedItems[item] ? "line-through opacity-40" : ""}`}>
                                                {item}
                                            </span>
                                        </label>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Modo de preparo */}
                        <section className="mb-14">
                            <h2 className="text-(--text) font-bold text-2xl mb-4">👩‍🍳 Modo de preparo</h2>
                            <ol className="text-(--text) list-decimal list-inside flex flex-col gap-3">
                                {receita.modoPreparo.map((passo, index) => (
                                    <li key={index}>{passo}</li>
                                ))}
                            </ol>
                        </section>

                        {/* Compartilhamento */}
                        <div className="flex flex-col items-center gap-3">
                            <button
                                onClick={handleShare}
                                className="bg-(--button) hover:bg-(--button-hover) duration-200 rounded-full font-bold px-8 py-3 text-(--text) cursor-pointer"
                            >
                                🔗 Compartilhar receita
                            </button>
                            {shareFeedback && (
                                <p className="text-(--text-terciary) text-sm">{shareFeedback}</p>
                            )}
                        </div>
                    </main>
    );
}

export default RecipePage;
