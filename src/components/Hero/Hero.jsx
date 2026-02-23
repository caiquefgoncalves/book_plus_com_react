import css from './Hero.module.css';

export default function Hero() {
    return (
        <section className={css.heroSecao}>

            <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfmiFAGbUFa0lTX5XasEEjKiwcVkFbXwoEzo8yCgHVgq5hSkEWsYsWYOg8XwwZG72fhd7h5b0P1i7pYf9ph9jcJtRuconesMJPn1GnHSu902LHK6AQr8xb4F53ylLXhqFiXedW-nVmENvmAhiDX_Rwr_BBDIwZalBQRqo5rr0zUZ4UxTKCejP__dfAxIbSNd5NN7vExip_mU0Wz4cn8zDRHWV7LfSXJXjVWl721PPNvh1jpRMdZPY5fgIBc5IV36Tjipxv60FkQVUv"
                alt="Ambiente de leitura"
                className={css.heroImagem}
            />


            <div className={css.heroOverlay}></div>


            <div className={css.heroConteudo}>
                <div>
            <span className={css.heroBadge}>
            Curadoria Exclusiva
          </span>

                    <h2 className={css.heroTitulo}>
                        Descubra seu <br/>
                        <span className={css.heroTituloGradiente}>
              próximo capítulo.
            </span>
                    </h2>

                    <p className={css.heroDescricao}>
                        Mergulhe em histórias que transformam. Explore nossa seleção premium de obras clássicas e contemporâneas.
                    </p>

                    <div className={css.botao}>
                        <a href="#catalogo" className={css.botaoPrimario}>
                            Explorar Catálogo
                        </a>
                        <a href="#promocoes" className={css.botaoSecundario}>
                            Ver Promoções
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}