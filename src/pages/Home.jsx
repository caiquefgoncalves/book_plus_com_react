import { useState } from "react";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Destaques from "../components/Destaques/Destaques.jsx";
import BookGrid from "../components/BookGrid/BookGrid.jsx";
import Footer from "../components/Footer/Footer.jsx";

export default function Home() {
    const [livros, setLivros] = useState([]);
    const [filtroAutor, setFiltroAutor] = useState("");
    const [filtroTitulo, setFiltroTitulo] = useState("");


    async function buscarLivros() {
        let url = "https://apps-api-livros.ucxocw.easypanel.host/livro";
        let separador = "?";

        if (filtroAutor !== "") {
            url = url + separador + "autor=" + filtroAutor;
            separador = "&";
        }

        if (filtroTitulo !== "") {
            url = url + separador + "titulo=" + filtroTitulo;
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

        console.log("Resultado:", retorno);
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
        <>
            <Header />
            <Hero />

            <main className="container pb-5 mb-5" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', paddingBottom: '96px' }}>
                <Destaques />

                <section className="mt-5 mb-5 pt-4 border-top">
                    <h2 className="mb-4" style={{color: '#001f3f', fontWeight: '800'}}>Filtros</h2>


                    <div className="row g-3 mb-5 align-items-end">
                        <div className="col-12 col-md-5">
                            <label className="form-label fw-bold" style={{fontSize: '11px', color: '#6b7280', letterSpacing: '0.05em'}}>PESQUISAR POR TÍTULO</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex: 1984..."
                                value={filtroTitulo}
                                onChange={(e) => setFiltroTitulo(e.target.value)}
                                style={{ borderRadius: '8px', height: '45px', border: '2px solid #e5e7eb' }}
                            />
                        </div>

                        <div className="col-12 col-md-5">
                            <label className="form-label fw-bold" style={{fontSize: '11px', color: '#6b7280', letterSpacing: '0.05em'}}>PESQUISAR POR AUTOR</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ex: Machado..."
                                value={filtroAutor}
                                onChange={(e) => setFiltroAutor(e.target.value)}
                                style={{ borderRadius: '8px', height: '45px', border: '2px solid #e5e7eb' }}
                            />
                        </div>

                        <div className="col-12 col-md-2">
                            <button
                                className="btn w-100 fw-bold"
                                onClick={buscarLivros}
                                style={{backgroundColor: '#000000', color: '#fff', height: '45px', borderRadius: '8px'}}
                            >
                                Pesquisar
                            </button>
                        </div>
                    </div>
                </section>


                <BookGrid />

            </main>

            <Footer />
        </>
    );
}