import Header from "./components/Header/Header.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Destaques from "./components/Destaques/Destaques.jsx";
import BookGrid from "./components/BookGrid/BookGrid.jsx";
import Footer from "./components/Footer/Footer.jsx";


export default function App(){
    return(
        <>
            <Header />
            <Hero />
            <main style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', paddingBottom: '96px' }}>
                <Destaques />
                <BookGrid />
            </main>

            <Footer />
        </>






    )
}