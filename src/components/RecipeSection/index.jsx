import { useEffect, useState } from "react";
import Recipe from "../Recipes";
import { receitas } from "../../data/receitas";
import { useNavigate } from "react-router-dom";

function RecipeSection() {
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("Todas");
    const [showFavorites, setShowFavorites] = useState(false);
    const [favorites, setFavorites] = useState(() => {
        try {
            return JSON.parse(localStorage.getItem("cine-bite-favorites")) || [];
        } catch {
            return [];
        }
    });
    const navigate = useNavigate();

    useEffect(() => {
        localStorage.setItem("cine-bite-favorites", JSON.stringify(favorites));
    }, [favorites]);

    const categories = ["Todas", ...new Set(receitas.map((receita) => receita.category))];
    const filteredReceitas = receitas.filter((receita) => {
        const matchesSearch = `${receita.title} ${receita.description}`.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = category === "Todas" || receita.category === category;
        const matchesFavorite = !showFavorites || favorites.includes(receita.id);
        return matchesSearch && matchesCategory && matchesFavorite;
    });

    function toggleFavorite(id) {
        setFavorites((current) => current.includes(id)
            ? current.filter((favoriteId) => favoriteId !== id)
            : [...current, id]
        );
    }

    function handleFeelingLucky() {
        const pool = filteredReceitas.length > 0 ? filteredReceitas : receitas;
        const sorteada = pool[Math.floor(Math.random() * pool.length)];
        if (!sorteada) return;

        navigate(`/receita/${sorteada.id}`);
    }

    return (
        <section id="receitas" className="pb-32">
            <h1 className="text-(--text) text-center font-bold text-[90px] mt-[229px] mb-10">
                Receitas
            </h1>

            <p className="text-(--text) text-center opacity-60 mb-16 text-lg">
                Encontre a receita perfeita para acompanhar seu próximo filme.
            </p>

            <div className="flex flex-col items-center gap-6 mb-24 px-6">

                {/* Busca */}
                <div className="relative w-full max-w-[520px]">
                    <input
                        type="search"
                        value={search}
                        onChange={(event) => setSearch(event.target.value)}
                        placeholder="Buscar receita ou filme..."
                        aria-label="Buscar receita ou filme"
                        className="
                    w-full
                    bg-(--bg-card)
                    text-(--text)
                    placeholder:text-(--text)/40
                    border border-white/10
                    rounded-full
                    px-6 py-4
                    outline-none
                    transition-all duration-300
                    focus:border-white/30
                    focus:shadow-[0_0_25px_rgba(255,255,255,0.05)]
                "
                    />
                </div>

                {/* Categorias */}
                <div className="flex flex-wrap justify-center gap-3">
                    {categories.map((item) => (
                        <button
                            key={item}
                            onClick={() => setCategory(item)}
                            className={`
                        rounded-full
                        px-5 py-2.5
                        text-sm
                        font-bold
                        cursor-pointer
                        border
                        transition-all duration-300
                        hover:-translate-y-0.5
                        ${category === item
                                    ? "bg-(--button) border-transparent text-white shadow-lg"
                                    : "bg-(--bg-card) border-white/10 text-(--text) hover:border-white/30"
                                }
                    `}
                        >
                            {item}
                        </button>
                    ))}

                    <button
                        onClick={() => setShowFavorites((current) => !current)}
                        className={`
                    rounded-full
                    px-5 py-2.5
                    text-sm
                    font-bold
                    cursor-pointer
                    border
                    transition-all duration-300
                    hover:-translate-y-0.5
                    ${showFavorites
                                ? "bg-(--button) border-transparent text-white shadow-lg"
                                : "bg-(--bg-card) border-white/10 text-(--text) hover:border-white/30"
                            }
                `}
                    >
                        ♥ Favoritos ({favorites.length})
                    </button>
                </div>

                <button
                    onClick={handleFeelingLucky}
                    className="
                rounded-full
                px-6 py-3
                text-sm
                font-bold
                cursor-pointer
                border border-transparent
                bg-(--button)
                hover:bg-(--button-hover)
                text-white
                shadow-lg
                transition-all duration-300
                hover:-translate-y-0.5
            "
                >
                    🎲 Estou com sorte
                </button>
            </div>

            {/* Receitas */}
            <div className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        justify-items-center
        gap-x-[60px]
        gap-y-[94px]
        mx-auto
        max-w-[1100px]
        px-6
    ">
                {filteredReceitas.map((receita) => (
                    <Recipe
                        key={receita.id}
                        id={receita.id}
                        title={receita.title}
                        image={receita.img}
                        description={receita.description}
                        ingredientes={receita.ingredientes}
                        modoPreparo={receita.modoPreparo}
                        category={receita.category}
                        time={receita.time}
                        difficulty={receita.difficulty}
                        isFavorite={favorites.includes(receita.id)}
                        onToggleFavorite={() => toggleFavorite(receita.id)}
                    />
                ))}

                {filteredReceitas.length === 0 && (
                    <div className="col-span-full flex flex-col items-center py-20">
                        <span className="text-5xl mb-5 opacity-50">🍿</span>

                        <p className="text-(--text) text-xl font-bold">
                            Nenhuma receita encontrada
                        </p>

                        <p className="text-(--text) opacity-50 mt-2">
                            Tente buscar outro filme ou selecionar outra categoria.
                        </p>
                    </div>
                )}
            </div>
        </section>
    )
}

export default RecipeSection;
