import css from './Destaques.module.css';

export default function Destaques(){
    return (

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end my-5 gap-4">


            <div className="d-flex flex-column gap-2">


                <div className="d-flex align-items-center gap-3">
                    <div className={css.linha}></div>
                    <span className={`${css.subtitulo2} fs-6`}>Novidades</span>
                </div>


                <h2 className={`${css.tituloPrincipal} display-6 m-0`}>Destaques da Semana</h2>

            </div>

        </div>
    )
}