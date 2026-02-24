import css from './Footer.module.css';

export default function Footer(){
    return(

        <footer className={`${css.rodape} border-top py-5`}>
            <div className="container">


                <div className="row mb-5">


                    <div className="col-12 col-lg-4 d-flex flex-column gap-3 mb-5 mb-lg-0">
                        <div className="d-flex align-items-center gap-2">
                            <span className={`${css.nomeMarca} fs-4`}>BOOK PLUS</span>
                        </div>

                        <p className={css.descricao}>
                            Sua livraria digital de confiança. Uma curadoria minimalista das obras mais impactantes para o seu crescimento.
                        </p>

                        <div className="d-flex gap-3 mt-2">
                            <a href="#" className={css.iconeSocial}>🔗</a>
                            <a href="#" className={css.iconeSocial}>⭐</a>
                        </div>
                    </div>


                    <div className="col-12 col-lg-8">

                        <div className="row">


                            <div className="col-12 col-sm-4 d-flex flex-column gap-3 mb-4 mb-sm-0">
                                <h4 className={css.tituloColuna}>Explorar</h4>
                                <nav className="d-flex flex-column gap-2">
                                    <a href='#' className={css.link}>Lançamentos</a>
                                    <a href='#' className={css.link}>Mais Vendidos</a>
                                    <a href='#' className={css.link}>E-Books</a>
                                </nav>
                            </div>

                            <div className="col-12 col-sm-4 d-flex flex-column gap-3 mb-4 mb-sm-0">
                                <h4 className={css.tituloColuna}>Suporte</h4>
                                <nav className="d-flex flex-column gap-2">
                                    <a href='#' className={css.link}>Ajuda</a>
                                    <a href='#' className={css.link}>Envios</a>
                                    <a href='#' className={css.link}>Trocas</a>
                                </nav>
                            </div>

                            <div className="col-12 col-sm-4 d-flex flex-column gap-3">
                                <h4 className={css.tituloColuna}>Institucional</h4>
                                <nav className="d-flex flex-column gap-2">
                                    <a href='#' className={css.link}>Sobre</a>
                                    <a href='#' className={css.link}>Contatos</a>
                                    <a href='#' className={css.link}>Privacidade</a>
                                </nav>
                            </div>

                        </div>
                    </div>
                </div>


                <div className="row border-top pt-4">
                    <div className="col-12 d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">

                        <div className={css.textoInferior}>
                            © 2026 Book Plus. Todos os direitos reservados.
                        </div>

                        <div className={`${css.textoInferior} d-flex align-items-center gap-2`}>
                            <span>Desenvolvido com</span>
                            <span>❤️</span>
                            <span>Em Senai</span>
                        </div>

                    </div>
                </div>

            </div>
        </footer>
    )
}