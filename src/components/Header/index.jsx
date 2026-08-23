function Header(){
    return(
        <div className="flex justify-between text-(--text) ml-47 p-[51px] text-xl">
            <h1 className="uppercase">
                Cook the classics
            </h1>
            <nav >
                <ul className="flex gap-17 mr-8 cursor-pointer">
                    <li><a className="" href="#sobre">sobre</a></li>
                    <li><a className="" href="#receitas">receitas</a></li>
                    <li><a className="" href="#depoimentos">depoimentos</a></li>
                    <li><a className="" href="#contato">contato</a></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header