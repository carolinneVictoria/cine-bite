import testimonialImage from "../../assets/depoimento.png"
import starsImage from "../../assets/stars.png"

function TestimonialsSection() {
    return (
        <section id="depoimentos">
            <h1 className="text-(--text) text-center font-bold text-[90px] mt-[229px] mb-[118px]">Depoimentos</h1>
            <div className="flex mx-[136px] gap-[83px] justify-center">
                <img src={testimonialImage} alt="depoimentos"/>

                <div className="flex gap-[36px]">
                    <div className="flex flex-col items-center justify-center w-[304px] h-[382px] bg-(image:--bg-card-gradient) text-(--text) text-center rounded-[30px] text-[16px] p-4">
                        <img src={starsImage}/>
                        <p>
                            "Nunca imaginei que cozinhar pudesse ser tão divertido e nostálgico! As receitas desse site me 
                            transportaram direto para as minhas séries favoritas. Cada mordida é uma viagem no tempo." - Sarah Ocy, Teresina
                        </p>
                    </div>
                    <div className="flex flex-col items-center justify-center w-[304px] h-[382px] bg-(image:--bg-card-gradient) text-(--text) text-center rounded-[30px] text-[16px] p-4">
                        <img src={starsImage}/>
                        <p>
                        “Sou apaixonado por cinema e culinária, e encontrar este site foi como unir minhas duas grandes paixões! Sempre quis experimentar o ratatouille de Ratatouille ou o café da manhã de Friends, e agora posso recriar essas delícias em casa. As receitas são fáceis de seguir e me fazem sentir parte das minhas histórias favoritas.
                            Obrigado por tornar isso possível!" - Matheus Silva, Belo Horizonte
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection;