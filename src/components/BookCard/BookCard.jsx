import css from './BookCard.module.css';

export default function BookCard({imagem, titulo, categoria, autor}){
    return (
        <div className={css.cartaoLivro}>

            <div className={css.imagemContainer}>
                <img src={imagem}
                     alt={titulo} className={css.imagem}/>
                <div className={css.overlay}></div>
                <button className={css.botaoDetalhes}>
                    Ver Detalhes
                </button>
            </div>

            <div className={css.informarcoes}>
                <span className={css.categoria}>{categoria}</span>
                <h3 className={css.titulo}>{titulo}</h3>
                <p className={css.autor}>{autor}</p>
            </div>
        </div>
    )
}