import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Dashboard() {
    const [livros, setLivros] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            localStorage.setItem('aviso_acesso', 'Acesso restrito! Faça login para continuar.');
            navigate('/login');
        } else {
            buscarLivrosParaGerenciar();
        }
    }, [navigate]);

    async function buscarLivrosParaGerenciar() {
        const resposta = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro");
        const dados = await resposta.json();

        let listaPronta = [];
        if (Array.isArray(dados)) {
            listaPronta = dados;
        } else if (dados && Array.isArray(dados.data)) {
            listaPronta = dados.data;
        } else if (dados && Array.isArray(dados.content)) {
            listaPronta = dados.content;
        } else if (dados && Array.isArray(dados.livros)) {
            listaPronta = dados.livros;
        } else if (dados && typeof dados === 'object' && dados.id) {
            listaPronta = [dados];
        }

        setLivros(listaPronta);
    }

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Header />

            <main className="container py-5 flex-grow-1" style={{ maxWidth: '1280px' }}>
                <div className="d-flex justify-content-between align-items-center mb-5 pb-3 border-bottom">
                    <h2 className="fw-bold m-0" style={{color: '#001f3f'}}>Gerenciar Catálogo</h2>

                    <Link to="/admin/cadastrar" className="btn btn-dark fw-bold px-4 py-2">Novo Livro</Link>
                </div>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                    {livros.length > 0 ? (
                        livros.map((livro) => (
                            <div className="col" key={livro.id}>
                                <div className="card h-100 shadow-sm border-0 bg-white">
                                    <img
                                        src={livro.imagem || livro.capa || "https://via.placeholder.com/300x400"}
                                        alt={livro.titulo}
                                        className="card-img-top"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body d-flex flex-column">
                                        <h6 className="card-title fw-bold text-truncate mb-1">{livro.titulo}</h6>
                                        <p className="card-text small text-muted mb-3">{livro.autor}</p>

                                        <div className="mt-auto d-flex flex-column gap-2">
                                            <Link
                                                to={`/livro/${livro.id}`}
                                                className="btn btn-dark btn-sm w-100 fw-bold"
                                            >
                                                Ver Detalhes
                                            </Link>

                                            <div className="d-flex justify-content-between gap-2">
                                                <button className="btn btn-outline-primary btn-sm w-50 fw-bold">Editar</button>
                                                <button className="btn btn-outline-danger btn-sm w-50 fw-bold">Excluir</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="col-12 text-center py-5">
                            <p className="text-muted fs-5">Nenhum livro no sistema ainda.</p>
                        </div>
                    )}
                </div>
            </main>

            <Footer />
        </div>
    );
}