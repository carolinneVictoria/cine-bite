import aboutImage from "../../assets/films.png"

function AboutSection() {
    return (
        <div className="flex gap-[132px] mt-[226px] items-center justify-between mx-[188px]">
            <img src={aboutImage} alt="Filmes"/>
            <div className="flex flex-col items-center text-center">
                <h1 className="text-(--text) font-bold text-[64px] mb-[40px]">
                    O que <span className="text-(--text-secondary)">Somos</span>
                </h1>
                <div className="flex flex-col gap-6">
                    <p className="text-(--text) font-bold text-[22px]">
                        Se você assiste a filmes ou séries e sempre 
                        fica com vontade de experimentar as
                        comidas incríveis da telona, este 
                        é o lugar certo!
                    </p>

                    <p className="text-(--text) font-bold text-[24px]">
                        Transforme cenas icônicas em 
                        pratos reais e mate a curiosidade
                        (e a fome) de provar os sabores 
                        do cinema!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;