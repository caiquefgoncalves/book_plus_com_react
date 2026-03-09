import { Link } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import BookCard from '../components/BookCard/BookCard';

export default function Catalogo() {
    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <main className="container flex-grow-1 py-5">

                <h2 className="mb-4" style={{color: '#001f3f', fontWeight: '800'}}>Nosso Catálogo</h2>


                <div className="row g-3 mb-5 align-items-end">


                    <div className="col-12 col-md-4">
                        <label className="form-label fw-bold" style={{fontSize: '11px', color: '#6b7280', letterSpacing: '0.05em'}}>PESQUISAR</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Título do livro..."
                            style={{borderRadius: '8px', height: '45px', border: '2px solid #e5e7eb', fontSize: '14px'}}
                        />
                    </div>


                    <div className="col-6 col-md-3">
                        <label className="form-label fw-bold" style={{fontSize: '11px', color: '#6b7280', letterSpacing: '0.05em'}}>CATEGORIA</label>
                        <select className="form-select" style={{borderRadius: '8px', height: '45px', border: '2px solid #e5e7eb', fontSize: '14px'}}>
                            <option value="">Todas as categorias</option>
                            <option value="policial">Literatura Policial</option>
                            <option value="ficcao">Ficção Científica</option>
                            <option value="brasileira">Literatura Brasileira</option>
                            <option value="naoficcao">Não Ficção</option>
                            <option value="fabula">Fábula</option>
                            <option value="terror">Terror</option>
                            <option value="realismo">Realismo Mágico</option>
                            <option value="desenvolvimento">Desenvolvimento Pessoal</option>
                        </select>
                    </div>

                    <div className="col-6 col-md-3">
                        <label className="form-label fw-bold" style={{fontSize: '11px', color: '#6b7280', letterSpacing: '0.05em'}}>AUTOR</label>
                        <select className="form-select" style={{borderRadius: '8px', height: '45px', border: '2px solid #e5e7eb', fontSize: '14px'}}>
                            <option value="">Todos os autores</option>
                            <option value="doyle">Arthur Conan Doyle</option>
                            <option value="orwell">George Orwell</option>
                            <option value="machado">Machado de Assis</option>
                            <option value="harari">Yuval Noah Harari</option>
                            <option value="saint">Antoine de Saint-Exupéry</option>
                            <option value="king">Stephen King</option>
                            <option value="marquez">Gabriel García Márquez</option>
                            <option value="clear">James Clear</option>
                        </select>
                    </div>


                </div>


                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 gy-5">


                    <div className="col">
                        <Link to="/livro/1" style={{textDecoration: 'none', color: 'inherit'}}>
                            <BookCard
                                imagem="https://altabooks.com.br/wp-content/uploads/2023/10/CAPA_1000x_GrandesAventurasDeSherlockHolmes.jpg"
                                categoria="Literatura Policial"
                                titulo="Sherlock Holmes"
                                autor="Arthur Conan Doyle"
                            />
                        </Link>
                    </div>


                    <div className="col">
                        <Link to="/livro/2" style={{textDecoration: 'none', color: 'inherit'}}>
                            <BookCard
                                imagem="https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg"
                                categoria="Ficção Científica"
                                titulo="1984"
                                autor="George Orwell"
                            />
                        </Link>
                    </div>


                    <div className="col">
                        <Link to="/livro/3" style={{textDecoration: 'none', color: 'inherit'}}>
                            <BookCard
                                imagem="https://m.media-amazon.com/images/I/61x1ZHomWUL._AC_UF1000,1000_QL80_.jpg"
                                categoria="Literatura Brasileira"
                                titulo="Dom Casmurro"
                                autor="Machado de Assis"
                            />
                        </Link>
                    </div>


                    <div className="col">
                        <Link to="/livro/4" style={{textDecoration: 'none', color: 'inherit'}}>
                            <BookCard
                                imagem="https://m.media-amazon.com/images/I/71-ghLb8qML.jpg"
                                categoria="Não Ficção"
                                titulo="Sapiens: Uma Breve História da Humanidade"
                                autor="Yuval Noah Harari"
                            />
                        </Link>
                    </div>


                    <div className="col">
                        <Link to="/livro/5" style={{textDecoration: 'none', color: 'inherit'}}>
                            <BookCard
                                imagem="https://upload.wikimedia.org/wikipedia/pt/thumb/4/47/O-pequeno-pr%C3%ADncipe.jpg/250px-O-pequeno-pr%C3%ADncipe.jpg"
                                categoria="Fábula"
                                titulo="O Pequeno Príncipe"
                                autor="Antoine de Saint-Exupéry"
                            />
                        </Link>
                    </div>


                    <div className="col">
                        <Link to="/livro/6" style={{textDecoration: 'none', color: 'inherit'}}>
                            <BookCard
                                imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0x--9dfiRzH25-fjeEbyP6umXJwXbH_VxhA&s"
                                categoria="Terror"
                                titulo="O Iluminado"
                                autor="Stephen King"
                            />
                        </Link>
                    </div>


                    <div className="col">
                        <Link to="/livro/7" style={{textDecoration: 'none', color: 'inherit'}}>
                            <BookCard
                                imagem="https://m.media-amazon.com/images/I/819vfB2BjyL._AC_UF1000,1000_QL80_.jpg"
                                categoria="Realismo Mágico"
                                titulo="Cem Anos de Solidão"
                                autor="Gabriel García Márquez"
                            />
                        </Link>
                    </div>


                    <div className="col">
                        <Link to="/livro/8" style={{textDecoration: 'none', color: 'inherit'}}>
                            <BookCard
                                imagem="https://m.media-amazon.com/images/I/81eT2pjx4jL.jpg"
                                categoria="Desenvolvimento Pessoal"
                                titulo="Hábitos Atômicos"
                                autor="James Clear"
                            />
                        </Link>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}