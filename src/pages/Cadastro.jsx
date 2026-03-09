import { useState } from 'react';
import { Link } from 'react-router-dom';


import css from '../components/Cadastro/Cadastro.module.css';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    return (

        <div className={css.paginaCadastro}>
            <Header />

            <main className={css.conteudoPrincipal}>
                <div className={css.cartao}>
                    <div className="mb-4 text-center">
                        <h1 className={css.logo}>CRIAR CONTA</h1>
                        <p className="text-muted mt-2" style={{ fontSize: '14px' }}>
                            Junte-se à Book Plus
                        </p>
                    </div>

                    <form>
                        <div className={css.inputGroup}>
                            <label className={css.label}>Nome Completo</label>
                            <input
                                type="text"
                                className={css.input}
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>

                        <div className={css.inputGroup}>
                            <label className={css.label}>E-mail</label>
                            <input
                                type="email"
                                className={css.input}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={css.inputGroup}>
                            <label className={css.label}>Senha</label>
                            <input
                                type="password"
                                className={css.input}
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className={css.botao}>Cadastrar</button>
                    </form>

                    <div className="mt-3 text-center" style={{fontSize: '14px'}}>
                        Já tem conta? <Link to="/login" style={{color: '#001f3f', fontWeight: 'bold'}}>Faça Login</Link>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}