import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Erro404() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center text-center py-5">

                <h1 style={{fontSize: '8rem', color: '#001f3f', fontWeight: '900', lineHeight: '1'}}>
                    404
                </h1>

                <h2 className="mb-3" style={{color: '#374151'}}>Oops! Página não encontrada.</h2>

                <p className="text-muted mb-4" style={{maxWidth: '500px', fontSize: '18px'}}>
                    Parece que se perdeu entre as estantes da nossa biblioteca. O livro ou a página que procura não existe ou foi movida.
                </p>


                <Link to="/" className="btn btn-primary px-4 py-2" style={{backgroundColor: '#001f3f', border: 'none', borderRadius: '999px', fontWeight: 'bold'}}>
                    Voltar para a Página Inicial
                </Link>
            </main>

            <Footer />
        </div>
    );
}