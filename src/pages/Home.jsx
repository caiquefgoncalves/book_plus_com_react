import { useState, useEffect } from "react";
import Header from "../components/Header/Header.jsx";
import Hero from "../components/Hero/Hero.jsx";
import Destaques from "../components/Destaques/Destaques.jsx";
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

        try {
            var resposta = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                }
            });

            var dadosDaApi = await resposta.json();

            // Tratando a resposta da API para extrair a lista corretamente
            let listaProntaParaTela = [];

            if (Array.isArray(dadosDaApi)) {
                listaProntaParaTela = dadosDaApi;
            } else if (dadosDaApi && Array.isArray(dadosDaApi.data)) {
                listaProntaParaTela = dadosDaApi.data;
            } else if (dadosDaApi && Array.isArray(dadosDaApi.content)) {
                listaProntaParaTela = dadosDaApi.content;
            } else if (dadosDaApi && Array.isArray(dadosDaApi.livros)) {
                listaProntaParaTela = dadosDaApi.livros;
            } else if (dadosDaApi && typeof dadosDaApi === 'object' && dadosDaApi.id) {
                listaProntaParaTela = [dadosDaApi];
            }

            // Atualiza a tela com todos os livros (ao abrir) ou com o filtro (ao pesquisar)
            setLivros(listaProntaParaTela);

        } catch (erro) {
            console.error("Erro na busca:", erro);
        }
    }

    // Carrega TODOS os livros assim que o usuário acessa a página
    useEffect(() => {
        buscarLivros();
    }, []);

    return (
        <>
            <Header />
            <Hero />

            <main className="container pb-5 mb-5" style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', paddingBottom: '96px' }}>
                <Destaques />

                <section className="mt-5 mb-5 pt-4 border-top">
                    <h2 className="mb-4" style={{color: '#001f3f', fontWeight: '800'}}>Busca Rápida</h2>

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

                    {/* LISTAGEM DOS LIVROS (Sem caixas de erro de desenvolvedor) */}
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 gy-5">
                        {livros && livros.length > 0 ? (
                            livros.map((livro, index) => (
                                <div className="col" key={livro.id || index}>
                                    <div className="card h-100 border-0 shadow-sm" style={{ borderRadius: '12px', overflow: 'hidden' }}>
                                        {livro.capa || livro.imagem ? (
                                            <img
                                                src={livro.capa || livro.imagem}
                                                alt={livro.titulo}
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
                                                {livro.titulo || "Sem Título"}
                                            </h5>
                                            <p className="card-text text-muted mb-0" style={{ fontSize: '0.9rem' }}>
                                                {livro.autor || "Autor Desconhecido"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div className="col-12 text-center py-5">
                                <p className="text-muted fs-5">Nenhum livro encontrado com esses critérios.</p>
                            </div>
                        )}
                    </div>
                </section>

            </main>

            <Footer />
        </>
    );
}