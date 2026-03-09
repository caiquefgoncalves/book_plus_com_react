import { BrowserRouter, Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Catalogo from './pages/Catalogo';
import Livro from './pages/Livro';
import Erro404 from './pages/Erro404';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route path="/catalogo" element={<Catalogo />} />
                <Route path="/livro/:id" element={<Livro />} />
                <Route path="*" element={<Erro404 />} />
            </Routes>
        </BrowserRouter>
    );
}