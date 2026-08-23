import Recipe from "../Recipes";
import lasanhaImg from "../../assets/lasanha.png"
import canolliImg from "../../assets/burritos.jpg"
import churrosImg from "../../assets/churros.jpg"
import ratattouilleImg from "../../assets/ratattouille.jpg"
import donnutsImg from "../../assets/donnuts.jpg"
import wafflesImg from "../../assets/waffle.jpg"

function RecipeSection () {
    const receitas = [
    {
        id: 1,
        title: "Lasanha do Garfield",
        img: lasanhaImg
    },
    {
        id: 2,
        title: "Canolli de Poderoso Chefão",
        img: canolliImg
    },
    {
        id: 3,
        title: "Os Churros de Chaves",
        img: churrosImg
    },
    {
        id: 4,
        title: "Ratatouille de Ratatouille",
        img: ratattouilleImg
    },
    {
        id: 5,
        title: "Donuts de Simpsons",
        img: donnutsImg
    },
    {
        id: 6,
        title: "Waffles de Stranger Things",
        img: wafflesImg
    },
    ]

    return(
        <section id="receitas">
            <h1 className="text-(--text) text-center font-bold text-[90px] mt-[229px] mb-[118px]">Receitas</h1>

            <div className="grid grid-cols-3 justify-items-center gap-[94px] mx-[295px]">
            {receitas.map((receitas) => (
                <Recipe
                key={receitas.id} 
                title={receitas.title} 
                image={receitas.img}
                />
            ))};
            </div>
        </section>
    )
}

export default RecipeSection;