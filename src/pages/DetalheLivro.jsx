import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function DetalheLivro(){
    const id = 1
    const [livro, setLivro] = useState(null)

    useEffect(() => {
        async function buscarDetalhe(){
            const resposta = await fetch('https://apps-api-livros.ucxocw.easypanel.host/livro/${id}')
            const dados = await resposta.json();

            if(dados.livro){
                setLivro(dados.livro)
            }
            else{
                setLivro(dados)
            }
        }
        buscarDetalhe();
    }, []);

    if (!livro){
        return(
            <div className="-flex flex-column min-vh-100 text-center justify-content-center">
                <Header/>
                <h3 className="flex-grow-1 mt-5">Carregando detalhes do livro...</h3>
                <Footer/>
            </div>
        )
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header/>
            <main className="container py-5 flex-grow-1">
                <Link to="/catalogo" className="btn btn-outline-dark mb-4">&larr; Voltar ao Catálogo</Link>

                <div className="row">
                    <div className="col-md-4 mb-4">
                        <img
                            src={livro.imagem || livro.capa || "https://via.placeholder.com/400x600"}
                            alt={livro.titulo}
                            className="img-fluid rounded shadow"
                        />
                    </div>

                    <div className="col-md-8">
                        <span className="badge bg-secondary mb-2">{livro.categoria}</span>
                        <h1 className="fw-bold" style={{color: '#001f3f3'}}>{livro.titulo}</h1>
                        <h4 className="text-muted mb-4">{livro.autor}</h4>
                        <p className="fs-5">{livro.descricao}</p>

                        <div className="mt-4 p-3 bg-light rounded border">
                            <strong>Faixa Etária recomendada:</strong>{livro.faixaEtaria || "Livre"}
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )

}