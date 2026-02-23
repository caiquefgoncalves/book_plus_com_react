import css from './Destaques.module.css';

export default function Destaques(){
    return (
        <div className={css.secaoTituloContainer}>
            <div className={css.grupoTexto}>
                <div className={css.subtitulo}>
                    <div className={css.linha}></div>
                    <span className={css.subtitulo2}>Novidades</span>
                </div>
                <h2 className={css.tituloPrincipal}>Destaques da Semana</h2>
            </div>

            <div className={css.filtros}>


                <select className={css.ordernar}>
                    <option>Ordernar por: Relevância</option>
                    <option>Mais Recente</option>
                    <option>Menor preço</option>
                </select>
            </div>


        </div>



    )
}