import { Link } from "react-router-dom";

function Recipe({id, title, image, category, time, difficulty, isFavorite, onToggleFavorite}) {
    return (
        <div className="relative bg-(--bg-card) rounded-[25px] w-[240px] h-[246px] flex flex-col justify-end items-center gap-2 pb-10 px-4">
            <img src={image} alt={title}
                className="absolute -top-15 left-1/2 -translate-x-1/2 rounded-[100%] w-[140px] h-[140px] object-cover"
            />
            <button
                onClick={onToggleFavorite}
                aria-label={isFavorite ? `Remover ${title} dos favoritos` : `Adicionar ${title} aos favoritos`}
                className="absolute top-3 right-3 text-[24px] text-(--text) cursor-pointer"
            >
                {isFavorite ? "♥" : "♡"}
            </button>
            <h1 className="translate-y-4 text-(--text) text-[24px] text-center font-bold">{title}</h1>
            <p className="translate-y-4 text-(--text-terciary) text-[13px]">{category} · {time} · {difficulty}</p>
            <Link
                to={`/receita/${id}`}
                className="translate-y-4 bg-(--button) hover:bg-(--button-hover) duration-200 rounded-[83px] font-bold cursor-pointer px-8 py-2 text-[16px] text-(--text)"
            >
                Acessar
            </Link>
        </div>
    );
}

export default Recipe;
