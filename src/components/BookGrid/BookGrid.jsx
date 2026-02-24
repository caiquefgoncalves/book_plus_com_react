import BookCard from "../BookCard/BookCard.jsx";

export default function BookGrid(){
    return(
        <div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 gy-5">

                <div className="col">
                    <BookCard
                        imagem="https://altabooks.com.br/wp-content/uploads/2023/10/CAPA_1000x_GrandesAventurasDeSherlockHolmes.jpg"
                        categoria="Literatura Policial"
                        titulo="Sherlock Holmes"
                        autor="Arthur Conan Doyle"
                    />
                </div>

                <div className="col">
                    <BookCard
                        imagem="https://m.media-amazon.com/images/I/61t0bwt1s3L._AC_UF1000,1000_QL80_.jpg"
                        categoria="Ficção Científica"
                        titulo="1984"
                        autor="George Orwell"
                    />
                </div>

                <div className="col">
                    <BookCard
                        imagem="https://m.media-amazon.com/images/I/61x1ZHomWUL._AC_UF1000,1000_QL80_.jpg"
                        categoria="Literatura Brasileira"
                        titulo="Dom Casmurro"
                        autor="Machado de Assis"
                    />
                </div>

                <div className="col">
                    <BookCard
                        imagem="https://m.media-amazon.com/images/I/71-ghLb8qML.jpg"
                        categoria="Não Ficção"
                        titulo="Sapiens: Uma Breve História da Humanidade"
                        autor="Yuval Noah Harari"
                    />
                </div>

                <div className="col">
                    <BookCard
                        imagem="https://upload.wikimedia.org/wikipedia/pt/thumb/4/47/O-pequeno-pr%C3%ADncipe.jpg/250px-O-pequeno-pr%C3%ADncipe.jpg"
                        categoria="Fábula"
                        titulo="O Pequeno Príncipe"
                        autor="Antoine de Saint-Exupéry"
                    />
                </div>

                <div className="col">
                    <BookCard
                        imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0x--9dfiRzH25-fjeEbyP6umXJwXbH_VxhA&s"
                        categoria="Terror"
                        titulo="O Iluminado"
                        autor="Stephen King"
                    />
                </div>

                <div className="col">
                    <BookCard
                        imagem="https://m.media-amazon.com/images/I/819vfB2BjyL._AC_UF1000,1000_QL80_.jpg"
                        categoria="Realismo Mágico"
                        titulo="Cem Anos de Solidão"
                        autor="Gabriel García Márquez"
                    />
                </div>

                <div className="col">
                    <BookCard
                        imagem="https://m.media-amazon.com/images/I/81eT2pjx4jL.jpg"
                        categoria="Desenvolvimento Pessoal"
                        titulo="Hábitos Atômicos"
                        autor="James Clear"
                    />
                </div>

            </div>
        </div>
    )
}