import { Box, Modal } from "@mui/material";
import { useState } from "react";

function Recipe({title, image, description, ingredientes, modoPreparo, category, time, difficulty, isFavorite, onToggleFavorite}) {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen(){
        setIsOpen(true);
    }
    function handleClose(){
        setIsOpen(false);
    }

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
            <button onClick={handleOpen} className="translate-y-4 bg-(--button) hover:bg-(--button-hover) duration-200 rounded-[83px] font-bold cursor-pointer px-8 py-2 text-[16px] text-(--text)">
                Acessar
            </button>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="recipe-title"
                aria-describedby="recipe-description"
            >
                <Box className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[480px] max-h-[85vh] bg-blue-950 rounded-[25px] overflow-hidden flex flex-col outline-none">
                    <div className="relative shrink-0">
                        <img src={image} alt={title}
                            className="w-full h-[220px] object-cover"
                        />
                        <button
                            onClick={handleClose}
                            aria-label="Fechar"
                            className="absolute top-4 right-4 bg-(--button) hover:bg-(--button-hover) duration-200 text-(--text) w-8 h-8 rounded-[100%] flex items-center justify-center text-[18px] cursor-pointer"
                        >
                            ×
                        </button>
                    </div>

                    <div className="overflow-y-auto px-8 py- flex flex-col gap-8">
                        <h2 id="recipe-title" className="text-(--text) font-bold text-[28px] text-center">
                            {title}
                        </h2>

                        <p id="recipe-description" className="text-(--text-terciary) text-[16px] text-center">
                            {description}
                        </p>

                        <p className="text-(--text-secondary) text-center font-bold">{category} · {time} · {difficulty}</p>

                        <div>
                            <h3 className="text-(--text-secondary) font-bold text-[20px] mb-2">Ingredientes</h3>
                            <ul className="text-(--text) text-[16px] list-disc list-inside flex flex-col gap-1">
                                {ingredientes?.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-(--text-secondary) font-bold text-[20px] mb-2">Modo de Preparo</h3>
                            <ol className="text-(--text) text-[16px] list-decimal list-inside flex flex-col gap-2">
                                {modoPreparo?.map((passo, index) => (
                                    <li key={index}>{passo}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}

export default Recipe;
