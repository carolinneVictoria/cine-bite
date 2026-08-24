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
        img: lasanhaImg,
        description: "A lasanha favorita do gato mais preguiçoso (e faminto) dos quadrinhos — camadas generosas de massa, molho e muito queijo.",
        ingredientes: [
            "12 folhas de lasanha",
            "500g de carne moída",
            "2 xícaras de molho de tomate",
            "300g de queijo mussarela",
            "200g de queijo parmesão ralado",
            "500ml de molho branco (bechamel)",
            "1 cebola picada",
            "2 dentes de alho picados",
            "Sal, pimenta e orégano a gosto",
        ],
        modoPreparo: [
            "Refogue a cebola e o alho, adicione a carne moída e tempere.",
            "Junte o molho de tomate e deixe cozinhar por 15 minutos.",
            "Em um refratário, monte camadas alternando massa, molho de carne, molho branco e queijo.",
            "Repita as camadas até terminar, finalizando com queijo parmesão por cima.",
            "Asse em forno preaquecido a 200°C por 30 minutos, até dourar.",
            "Deixe descansar 10 minutos antes de servir.",
        ],
    },
    {
        id: 2,
        title: "Canolli de Poderoso Chefão",
        img: canolliImg,
        description: "Uma sobremesa italiana clássica, digna de uma família que não recusa favores — crocante por fora, cremosa por dentro.",
        ingredientes: [
            "2 xícaras de farinha de trigo",
            "2 colheres de sopa de açúcar",
            "1 colher de sopa de manteiga",
            "1/2 xícara de vinho branco seco",
            "500g de ricota fresca",
            "1 xícara de açúcar de confeiteiro",
            "100g de gotas de chocolate",
            "Óleo para fritar",
            "Açúcar de confeiteiro para polvilhar",
        ],
        modoPreparo: [
            "Misture farinha, açúcar e manteiga, adicione o vinho aos poucos até formar uma massa lisa.",
            "Abra a massa bem fina e corte em círculos, enrole em tubos de metal (formas de cannoli).",
            "Frite os tubos em óleo quente até dourar e ficar crocante; deixe esfriar e retire as formas.",
            "Bata a ricota com o açúcar de confeiteiro até obter um creme liso e misture as gotas de chocolate.",
            "Recheie os tubos crocantes com o creme de ricota na hora de servir.",
            "Polvilhe açúcar de confeiteiro por cima.",
        ],
    },
    {
        id: 3,
        title: "Os Churros de Chaves",
        img: churrosImg,
        description: "Direto do barril mais amado da vila — churros quentinhos, crocantes e cobertos de açúcar e canela.",
        ingredientes: [
            "1 xícara de água",
            "1/2 xícara de manteiga",
            "1 pitada de sal",
            "1 xícara de farinha de trigo",
            "3 ovos",
            "Óleo para fritar",
            "Açúcar e canela para polvilhar",
            "Doce de leite para acompanhar",
        ],
        modoPreparo: [
            "Ferva a água com a manteiga e o sal.",
            "Adicione a farinha de uma vez e mexa até formar uma massa lisa que solte da panela.",
            "Deixe esfriar um pouco e acrescente os ovos, um a um, batendo bem.",
            "Coloque a massa em um saco de confeitar com bico pitanga e modele os churros direto no óleo quente.",
            "Frite até dourar por igual, escorra em papel toalha.",
            "Passe os churros ainda quentes na mistura de açúcar e canela e sirva com doce de leite.",
        ],
    },
    {
        id: 4,
        title: "Ratatouille de Ratatouille",
        img: ratattouilleImg,
        description: "O prato que derreteu o coração do crítico mais durão de Paris — legumes frescos em fatias, no ponto certo de sabor.",
        ingredientes: [
            "1 abobrinha",
            "1 berinjela",
            "2 tomates",
            "1 pimentão amarelo",
            "1 cebola",
            "2 dentes de alho",
            "400g de molho de tomate",
            "Azeite, tomilho, sal e pimenta a gosto",
        ],
        modoPreparo: [
            "Prepare uma base refogando cebola e alho no azeite, junte o molho de tomate e espalhe em um refratário.",
            "Corte a abobrinha, berinjela, tomate e pimentão em fatias finas e uniformes.",
            "Disponha as fatias em círculos concêntricos sobre a base de molho, alternando os legumes.",
            "Regue com azeite, tempere com sal, pimenta e tomilho.",
            "Cubra com papel-alumínio e asse a 180°C por 40 minutos.",
            "Retire o papel-alumínio e asse por mais 15 minutos até os legumes ficarem macios e levemente dourados.",
        ],
    },
    {
        id: 5,
        title: "Donuts de Simpsons",
        img: donnutsImg,
        description: "As rosquinhas cor-de-rosa favoritas de Springfield — macias, fofinhas e com uma cobertura irresistível.",
        ingredientes: [
            "2 e 1/2 xícaras de farinha de trigo",
            "1/2 xícara de açúcar",
            "1 colher de sopa de fermento em pó",
            "2 ovos",
            "1/2 xícara de leite",
            "50g de manteiga derretida",
            "Óleo para fritar",
            "Cobertura rosa (açúcar de confeiteiro + leite + corante) e granulado colorido",
        ],
        modoPreparo: [
            "Misture os ingredientes secos (farinha, açúcar, fermento) em uma tigela.",
            "Adicione os ovos, o leite e a manteiga derretida, misturando até formar uma massa macia.",
            "Abra a massa e corte no formato de rosquinha com um cortador (ou copo + tampinha no meio).",
            "Frite as rosquinhas em óleo quente até dourarem dos dois lados.",
            "Escorra em papel toalha e deixe esfriar levemente.",
            "Mergulhe cada donut na cobertura rosa e finalize com granulado colorido.",
        ],
    },
    {
        id: 6,
        title: "Waffles de Stranger Things",
        img: wafflesImg,
        description: "O prato favorito de Eleven — waffles crocantes por fora e macios por dentro, com direito a bastante cobertura.",
        ingredientes: [
            "2 xícaras de farinha de trigo",
            "2 colheres de sopa de açúcar",
            "1 colher de sopa de fermento em pó",
            "2 ovos",
            "1 e 3/4 xícara de leite",
            "1/2 xícara de manteiga derretida",
            "Calda de chocolate e chantilly para servir",
        ],
        modoPreparo: [
            "Misture os ingredientes secos em uma tigela grande.",
            "Em outra tigela, bata os ovos, o leite e a manteiga derretida.",
            "Combine as duas misturas até obter uma massa homogênea, sem excesso de mistura.",
            "Preaqueça a máquina de waffles e unte levemente com manteiga ou óleo.",
            "Despeje a massa e cozinhe até ficar dourado e crocante por fora.",
            "Sirva quente com calda de chocolate e chantilly, do jeito que a Eleven gosta.",
        ],
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
                description={receitas.description}
                ingredientes={receitas.ingredientes}
                modoPreparo={receitas.modoPreparo}
                />
            ))};
            </div>
        </section>
    )
}

export default RecipeSection;
