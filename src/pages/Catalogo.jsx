import { useState } from 'react';
import Header from '../components/Header/Header.jsx';
import Footer from '../components/Footer/Footer.jsx';

export default function Catalogo() {
    const [livros, setLivros] = useState([]);
    const [filtroAutor, setFiltroAutor] = useState("");
    const [filtroTitulo, setFiltroTitulo] = useState("");
    const [filtroCategoria, setFiltroCategoria] = useState("");

    async function buscarLivros() {
        let url = "https://apps-api-livros.ucxocw.easypanel.host/livro";
        let separador = "?";

        if (filtroAutor !== "") {
            url = url + separador + "autor=" + filtroAutor;
            separador = "&";
        }

        if (filtroTitulo !== "") {
            url = url + separador + "titulo=" + filtroTitulo;
            separador = "&";
        }

        if (filtroCategoria !== "") {
            url = url + separador + "categoria=" + filtroCategoria;
        }

        var retorno = await fetch(url, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
            }
        });

        retorno = await retorno.json();
        setLivros(retorno);

        console.log("Resultado no catálogo:", retorno);
    }


    let listaDeLivrosNaTela = [];

    for (let i = 0; i < livros.length; i++) {
        listaDeLivrosNaTela.push(
            <div className="col" key={i}>
                <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                    {livros[i].capa ? (
                        <img
                            src={livros[i].capa}
                            alt={livros[i].titulo}
                            className="card-img-top"
                            style={{ height: '350px', objectFit: 'cover' }}
                        />
                    ) : (
                        <div className="d-flex justify-content-center align-items-center bg-light" style={{ height: '350px', color: '#aaa' }}>
                            Sem capa
                        </div>
                    )}

                    <div className="card-body d-flex flex-column">
                        <span className="badge bg-light text-dark mb-2 align-self-start" style={{fontSize: '10px'}}>{livros[i].categoria}</span>
                        <h5 className="card-title fw-bold" style={{ color: '#001f3f', fontSize: '1.1rem' }}>
                            {livros[i].titulo}
                        </h5>
                        <p className="card-text text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                            {livros[i].autor}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="container py-5 flex-grow-1" style={{ maxWidth: '1280px' }}>
                <h2 className="mb-4" style={{color: '#001f3f', fontWeight: '800'}}>Catálogo</h2>


                <section className="bg-white p-4 rounded shadow-sm mb-5">
                    <div className="row g-3 align-items-end">
                        <div className="col-12 col-md-3">
                            <label className="form-label fw-bold small text-muted">TÍTULO</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex: 1984..."
                                value={filtroTitulo}
                                onChange={(e) => setFiltroTitulo(e.target.value)}
                                style={{ borderRadius: '8px', height: '45px' }}
                            />
                        </div>

                        <div className="col-12 col-md-3">
                            <label className="form-label fw-bold small text-muted">AUTOR</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex: Machado..."
                                value={filtroAutor}
                                onChange={(e) => setFiltroAutor(e.target.value)}
                                style={{ borderRadius: '8px', height: '45px' }}
                            />
                        </div>

                        <div className="col-12 col-md-3">
                            <label className="form-label fw-bold small text-muted">CATEGORIA</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex: Romance..."
                                value={filtroCategoria}
                                onChange={(e) => setFiltroCategoria(e.target.value)}
                                style={{ borderRadius: '8px', height: '45px' }}
                            />
                        </div>

                        <div className="col-12 col-md-3">
                            <button
                                className="btn w-100 fw-bold"
                                onClick={buscarLivros}
                                style={{backgroundColor: '#000', color: '#fff', height: '45px', borderRadius: '8px'}}
                            >
                                Pesquisar
                            </button>
                        </div>
                    </div>
                </section>



            </main>

            <Footer />
        </div>
    );
}