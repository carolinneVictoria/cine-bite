function Footer() {
    return (
        <section id="contato" className="flex flex-col font-bold text-[18px] text-(--text) gap-[107px] mt-[287px] items-center">
            <div className="flex space-between justify-center gap-[212px] mx-[100px]">
                <p className="uppercase">Cook the Clasics</p>
                <div className="flex flex-col gap-[17px]">
                    <p>Contatos</p>
                    <p>
                        E-mail: contato@cooktheclassics.com <br></br>
                        Telefone: +55 (XX) XXXXX-XXXX
                    </p>
                </div>
                <div className="flex flex-col gap-[17px]">
                    <p>Siga:</p>
                    <p>
                        Instagram: @cooktheclassics<br></br>
                        Facebook: /cooktheclassics
                    </p>
                </div>
            </div>

            <p>© 2024 Cook the Classics. Todos os direitos reservados.</p>
        </section>
    )
}

export default Footer;