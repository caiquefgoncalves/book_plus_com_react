import css from './Header.module.css'

export default function Header(){
    return (
        <header>
            <h1>BOOK PLUS</h1>

            <div className={css.pesquisa}>
                <input
                    type="text"
                    placeholder="Encontre sua próxima leitura..."
                    className={css.pesquisaInput}
                />
            </div>

            <nav>
                <a href="#">Catálogo</a>
                <a href="#">Lançamentos</a>
                <a href="#">Mais Vendidos</a>
                <button className={css.login} type={'button'}>
                    Login Admin
                </button>
            </nav>
        </header>
    )
}