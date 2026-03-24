import {useState, useEffect} from "react";
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";


export default function CadastroLivro(){
    const [imagem, setImagem] = useState("");
    const [titulo, setTitulo] = useState("");
    const [categoria, setCategoria] = useState("");
    const [descricao, setDescricao] = useState("");
    const [autor, setAutor] = useState("");
    const [faixaEtaria, setFaixaEtaria] = useState("");
    const[mensagem, setMensagem] = useState("");


    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token){
            window.location.href = "/login";
        }
    }, []);

    async function cadastrarLivro(e){
        e.preventDefault();
        setMensagem("Cadastrando...")

        const novoLivro = {
            imagem:imagem,
            titulo:titulo,
            categoria:categoria,
            descricao:descricao,
            autor:autor,
            faixa_etaria:faixaEtaria,
        }

        const resposta = await fetch("https://apps-api-livros.ucxocw.easypanel.host/livro", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(novoLivro)
        });

        if (resposta.ok){
            setMensagem("Livro cadastrado com sucesso!")
            setImagem(""), setTitulo(""), setCategoria(""), setAutor(""), setDescricao(""), setFaixaEtaria("")
        } else{
            setMensagem("Erro ao cadastrar este livro")
        }
    }

    return(
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="container py-5 flex-grow-1" style={{ maxWidth: '800px' }}>
                <h2 className="mb-4 fw-bold">Cadastrar Novo Livro</h2>

                {mensagem && <div className="alert alert-info">{mensagem}</div>}

                <form onSubmit={cadastrarLivro} className="p-4 border rounded shadow-sm bg-white">
                    <div className="mb-3">
                        <label className="form-label fw-bold">Título</label>
                        <input type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                    </div>

                    <div className="row mb-3">
                        <div className="col-md-6">
                            <label className="form-label fw-bold">Autor</label>
                            <input type="text" className="form-control" value={autor} onChange={(e) => setAutor(e.target.value)} required />
                        </div>

                        <div className="col-md-6">
                            <label className="form-label fw-bold">Categoria</label>
                            <input type="text" className="form-control" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
                        </div>
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">URL da Imagem</label>
                        <input type="url" className="form-control" value={imagem} onChange={(e) => setImagem(e.target.value)} required />
                    </div>

                    <div className="mb-3">
                        <label className="form-label fw-bold">Descrição</label>
                        <textarea className="form-control" rows="4" value={descricao} onChange={(e) => setDescricao(e.target.value)} required />
                    </div>

                    <div className="mb-4">
                        <label className="form-label fw-bold">Faixa Etária</label>
                        <input  type="text" className="form-control" value={faixaEtaria} onChange={(e) => setFaixaEtaria(e.target.value)} required />
                    </div>

                    <button type="submit" className="btn btn-dark w-100 fw-bold py-2">Salvar Livro</button>
                </form>
            </main>
        <Footer />
        </div>
    )
}