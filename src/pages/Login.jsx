import { useState, useEffect } from 'react';
import css from '../components/Login/Login.module.css';
import Header from "../components/Header/Header.jsx";
import Footer from "../components/Footer/Footer.jsx";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [alerta, setAlerta] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        const aviso = localStorage.getItem('aviso_acesso');
        if (aviso) {
            setAlerta(aviso);
            localStorage.removeItem('aviso_acesso');
        }
    }, []);

    async function realizarLogin() {



            let retorno = await fetch('https://apps-api-livros.ucxocw.easypanel.host/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, senha })
            });

            retorno = await retorno.json();

            if (retorno.token) {
                localStorage.setItem('token', retorno.token);
                localStorage.setItem('usuario_nome', retorno.usuario.nome);
                localStorage.setItem('usuario_email', retorno.usuario.email);

                navigate('/admin');
            } else {
                setAlerta("E-mail ou senha incorretos!");
            }
    }

    return (
        <>
            <Header />
            <div className={css.loginFundo}>
                <div className={css.cartao}>
                    <div className="mb-4 text-center">
                        <h1 className={css.logo}>LOGAR CONTA</h1>
                        <p className="text-muted mt-2" style={{ fontSize: '14px' }}>
                            Junte-se novamente à Book Plus
                        </p>
                    </div>

                    {alerta && (
                        <div className="alert alert-danger text-center p-2 mb-3 fw-bold" style={{fontSize: '14px'}}>
                            {alerta}
                        </div>
                    )}

                    <form onSubmit={realizarLogin}>
                        <div className={css.grupoInput}>
                            <label className={css.label}>E-mail</label>
                            <input
                                type="email"
                                className={css.input}
                                placeholder="admin@bookplus.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className={css.grupoInput}>
                            <label className={css.label}>Senha</label>
                            <input
                                type="password"
                                className={css.input}
                                placeholder="••••••••"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className={css.botao}>
                            Entrar
                        </button>
                    </form>

                    <div className="mt-3 text-center" style={{fontSize: '14px'}}>
                        Não possui uma conta? <Link to="/cadastro" style={{color: '#001f3f', fontWeight: 'bold'}}>Faça Cadastro</Link>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}