import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Livro() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [livro, setLivro] = useState(null);

    useEffect(() => {
        async function buscarDetalhe() {
            const resposta = await fetch(`https://apps-api-livros.ucxocw.easypanel.host/livro/${id}`);
            const dados = await resposta.json();

            if (dados.livro) {
                setLivro(dados.livro);
            } else if (dados.data) {
                setLivro(dados.data);
            } else {
                setLivro(dados);
            }
        }

        buscarDetalhe();
    }, [id]);

    if (!livro) {
        return (
            <div className="d-flex flex-column min-vh-100 text-center justify-content-center bg-light">
                <Header />
                <h3 className="flex-grow-1 mt-5" style={{color: '#001f3f'}}>Carregando detalhes do livro...</h3>
                <Footer />
            </div>
        );
    }

    return (
        <div className="d-flex flex-column min-vh-100 bg-light">
            <Header />
            <main className="container py-5 flex-grow-1">
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-outline-dark mb-4 fw-bold"
                >
                    &larr; Voltar
                </button>

                <div className="card shadow-sm border-0 bg-white p-4">
                    <div className="row">
                        <div className="col-md-4 mb-4 mb-md-0 text-center">
                            <img
                                src={livro.imagem || livro.capa || "https://via.placeholder.com/400x600"}
                                alt={livro.titulo}
                                className="img-fluid rounded shadow"
                                style={{ maxHeight: '500px', objectFit: 'cover' }}
                            />
                        </div>

                        <div className="col-md-8 d-flex flex-column justify-content-center">
                            <div>
                                <span className="badge bg-secondary mb-2 fs-6">{livro.categoria}</span>
                                <h1 className="fw-bold display-5" style={{color: '#001f3f'}}>{livro.titulo}</h1>
                                <h4 className="text-muted mb-4">Por: {livro.autor}</h4>

                                <h5 className="fw-bold">Sinopse:</h5>
                                <p className="fs-5" style={{ lineHeight: '1.6' }}>{livro.descricao}</p>

                                <div className="mt-4 p-3 rounded" style={{ backgroundColor: '#f8f9fa', borderLeft: '5px solid #001f3f' }}>
                                    <strong className="fs-5">Faixa Etária Recomendada:</strong>
                                    <span className="fs-5 ms-2">{livro.faixa_etaria || "Livre"}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}