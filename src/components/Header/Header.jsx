import { useState } from 'react';
import css from './Header.module.css';

export default function Header() {
    const [menuAberto, setMenuAberto] = useState(false);

    return (
        <header className={`${css.cabecalho} border-bottom sticky-top`}>

            <div className="container d-flex flex-wrap flex-lg-nowrap justify-content-between align-items-center">


                <div className="d-flex justify-content-between align-items-center w-100 w-lg-auto">
                    <h1 className="m-0 fw-bold fs-3 text-nowrap">BOOK PLUS</h1>

                    <button
                        className="btn btn-outline-dark d-lg-none border-0 fs-3"
                        onClick={() => setMenuAberto(!menuAberto)}
                    >
                        {menuAberto ? '✖' : '☰'}
                    </button>
                </div>


                <div className={`w-100 d-lg-flex align-items-center justify-content-lg-between mt-3 mt-lg-0 ms-lg-4 ${menuAberto ? 'd-flex flex-column gap-3' : 'd-none'}`}>


                    <div className={`${css.pesquisa} flex-grow-1 mx-lg-4`}>
                        <input
                            type="text"
                            placeholder="Encontre sua próxima leitura..."
                            className={css.pesquisaInput}
                        />
                    </div>


                    <nav className="d-flex flex-column flex-lg-row align-items-center gap-4 text-nowrap">
                        <a href="#" className={css.link}>Catálogo</a>
                        <a href="#" className={css.link}>Lançamentos</a>
                        <a href="#" className={css.link}>Mais Vendidos</a>

                        <button className={`${css.login} px-4`} type="button">
                            Login Admin
                        </button>
                    </nav>

                </div>
            </div>
        </header>
    );
}