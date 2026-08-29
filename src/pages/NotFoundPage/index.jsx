import { Link } from "react-router-dom";

function NotFoundPage() {
    return (
        <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-(--text) text-center px-6 min-h-screen">
            <span className="text-6xl">🎬</span>
            <h1 className="font-bold text-[90px] leading-none">404</h1>
            <p className="text-2xl font-bold">Essa cena não existe</p>
            <p className="text-(--text-terciary) max-w-[420px]">
                A página que você procura foi cortada da edição final. Que tal voltar para o início e escolher outra receita?
            </p>
            <Link
                to="/"
                className="bg-(--button) hover:bg-(--button-hover) duration-200 rounded-full px-8 py-3 font-bold text-(--text)"
            >
                Voltar ao início
            </Link>
        </div>
    );
}

export default NotFoundPage;
