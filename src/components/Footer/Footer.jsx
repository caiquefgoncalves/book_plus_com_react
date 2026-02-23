import css from './Footer.module.css';

export default function Footer(){
    return(
        <footer className={css.rodape}>
            <div className={css.container}>
                <div className={css.conteudoPrincipal}>
                    <div className={css.marca}>
                        <div className={css.logo}>
                            <span className={css.nomeMarca}>BOOK PLUS</span>
                        </div>
                        <p className={css.descricao}>
                            Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.
                        </p>

                        <div className={css.redesSociais}>
                            <a href="#" className={css.iconeSocial}>
                                🔗
                            </a>
                            <a href="#" className={css.iconeSocial}>
                                ⭐
                            </a>
                        </div>
                    </div>

                    <div className={css.linkContainer}>
                        <div className={css.colunaLink}>
                            <h4>Explorar</h4>
                            <nav>
                                <a href='#'>Lançamentos</a>
                                <a href='#'>Mais Vendidos</a>
                                <a href='#'>E-Books</a>
                            </nav>
                        </div>

                        <div className={css.colunaLink}>
                            <h4>Suporte</h4>
                            <nav>
                                <a href='#'>Ajuda</a>
                                <a href='#'>Envios</a>
                                <a href='#'>Trocas</a>
                            </nav>
                        </div>

                        <div className={css.colunaLink}>
                            <h4>Instituciolnal</h4>
                            <nav>
                                <a href='#'>Sobre</a>
                                <a href='#'>Contatos</a>
                                <a href='#'>Privacidade</a>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className={css.rodapeInferior}>
                    <div className={css.direitos}>
                        © 2026 Book Plus. Todos os direitos reservados.
                    </div>

                    <div className={css.creditos}>
                        <span>Desenvolvido com</span>
                        <span>❤️</span>
                        <span>Em Senai</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}