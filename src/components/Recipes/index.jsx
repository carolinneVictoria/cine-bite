function Recipe({title, image}) {
    return (
        <div>
            <div className="relative bg-(--bg-card) rounded-[25px] w-[240px] h-[246px] flex flex-col justify-end items-center gap-2 pb-10 px-4">
                <img src={image}
                    className="absolute -top-15 left-1/2 -translate-x-1/2 rounded-[100%] w-[140px] h-[140px] object-cover"
                />
                <h1 className="text-(--text) text-[24px] text-center font-bold">{title}</h1>
                <button className="bg-(--button) hover:bg-(--button-hover) duration-200 rounded-[83px] font-bold cursor-pointer px-8 py-2 text-[16px] text-(--text)">
                    Acessar
                </button>
            </div>
        </div>
    );
}

export default Recipe;