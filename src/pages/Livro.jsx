import { useParams, Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';


const meusLivros = [
    {
        id: 1,
        titulo: "Sherlock Holmes",
        autor: "Arthur Conan Doyle",
        categoria: "Literatura Policial",
        faixaEtaria: "12+",
        imagem: "https://altabooks.com.br/wp-content/uploads/2023/10/CAPA_1000x_GrandesAventurasDeSherlockHolmes.jpg",
        descricao: "Acompanhe o detetive mais famoso do mundo e o seu fiel parceiro Dr. Watson na resolução dos mistérios mais intrigantes de Londres."
    },
    {
        id: 2,
        titulo: "1984",
        autor: "George Orwell",
        categoria: "Ficção Científica",
        faixaEtaria: "14+",
        imagem: "https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg",
        descricao: "Um clássico distópico sobre vigilância governamental extrema, totalitarismo e a perda da liberdade individual."
    },
    {
        id: 3,
        titulo: "Dom Casmurro",
        autor: "Machado de Assis",
        categoria: "Literatura Brasileira",
        faixaEtaria: "12+",
        imagem: "https://m.media-amazon.com/images/I/61x1ZHomWUL._AC_UF1000,1000_QL80_.jpg",
        descricao: "A clássica obra brasileira contada por Bentinho, que explora temas de ciúme, amor e a eterna dúvida sobre a traição de Capitu."
    },
    {
        id: 4,
        titulo: "Sapiens: Uma Breve História da Humanidade",
        autor: "Yuval Noah Harari",
        categoria: "Não Ficção",
        faixaEtaria: "14+",
        imagem: "https://m.media-amazon.com/images/I/71-ghLb8qML.jpg",
        descricao: "Uma jornada fascinante pela história da nossa espécie, desde os primeiros humanos até às revoluções tecnológicas do presente."
    },
    {
        id: 5,
        titulo: "O Pequeno Príncipe",
        autor: "Antoine de Saint-Exupéry",
        categoria: "Fábula",
        faixaEtaria: "Livre",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/4/47/O-pequeno-pr%C3%ADncipe.jpg/250px-O-pequeno-pr%C3%ADncipe.jpg",
        descricao: "Uma história poética e filosófica sobre um piloto que encontra um jovem príncipe de outro planeta no deserto do Saara."
    },
    {
        id: 6,
        titulo: "O Iluminado",
        autor: "Stephen King",
        categoria: "Terror",
        faixaEtaria: "16+",
        imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0x--9dfiRzH25-fjeEbyP6umXJwXbH_VxhA&s",
        descricao: "Um conto assustador sobre o isolamento e a loucura num hotel isolado durante o inverno."
    },
    {
        id: 7,
        titulo: "Cem Anos de Solidão",
        autor: "Gabriel García Márquez",
        categoria: "Realismo Mágico",
        faixaEtaria: "14+",
        imagem: "https://m.media-amazon.com/images/I/819vfB2BjyL._AC_UF1000,1000_QL80_.jpg",
        descricao: "A saga mágica e turbulenta da família Buendía na aldeia mítica de Macondo."
    },
    {
        id: 8,
        titulo: "Hábitos Atômicos",
        autor: "James Clear",
        categoria: "Desenvolvimento Pessoal",
        faixaEtaria: "12+",
        imagem: "https://m.media-amazon.com/images/I/81eT2pjx4jL.jpg",
        descricao: "Um guia prático e comprovado para criar bons hábitos, quebrar os maus e melhorar 1% todos os dias."
    }

];

export default function Livro() {
    const { id } = useParams();
    const livro = meusLivros.find(l => l.id === parseInt(id));


    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <main className="container flex-grow-1 py-5">
                <div className="row g-5">

                    <div className="col-md-4">
                        <img src={livro.imagem} alt={livro.titulo} className="img-fluid rounded shadow" />
                    </div>


                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        <span className="badge bg-secondary mb-2 align-self-start">{livro.faixaEtaria}</span>
                        <p className="text-muted mb-1" style={{textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 'bold'}}>
                            {livro.categoria}
                        </p>

                        <h1 style={{color: '#001f3f', fontWeight: '900', fontSize: '3rem'}}>{livro.titulo}</h1>
                        <h4 className="fst-italic text-muted mb-4">{livro.autor}</h4>

                        <p style={{fontSize: '18px', lineHeight: '1.6'}}>{livro.descricao}</p>


                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}