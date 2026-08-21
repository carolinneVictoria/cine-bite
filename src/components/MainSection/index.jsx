import telaTv from "../../assets/tv.png"

function MainSection() {
    return (
        <div className="flex justify-between text-(--text) gap-[84px] items-center mx-[188px]">
            <div>
                <h2 className="text-[87px] font-bold leading-[100%] mb-[27px]">Descobrindo o sabor dos filmes</h2>
                <p className="font-xl mb-[42px]">Receitas que transformam cenas de cinema em sabores reais!</p>
                <button className="bg-(--button) hover:bg-(--button-hover) duration-200 w-44 rounded-[83px] p-4 font-bold text-[20px] cursor-pointer">Vamos lá!</button>
            </div>
            <img src={telaTv}></img>
        </div>
    )
}

export default MainSection