import { useState } from 'react';
import './login-loja.css';
import { m_success, m_error } from './metodos-de-suporte.js';

import api from '../../services/api';

import { saveDataSession, getDataSession } from '../../services/sessionDataUser';

export default function LoginLoja() {

    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');

    const [hideSenha, setHideSenha] = useState(true);

    var dados = {};

    function redirecionaUsuario() {

        if (getDataSession('DADOS_CLI')) {
            window.location.href = "/home";
        } else {
            window.location.href = "/";
        }
    }

    async function fazerLoginEstabelecimento() {

        dados['usuario'] = usuario
        dados['senha'] = senha

        try {
            const response = await api.post('/fazerLoginEstabelecimento', dados)

            if (response.data.type === "success") {
                m_success(response.data.message)

                //receber dados do cliente e salvar no sessionStorage
                saveDataSession('DADOS_CLI', response.data.dados_cliente.toString());

                //direcionar para pagina home
                redirecionaUsuario();
            }

            if (response.data.type === "error_user") {
                document.querySelector(".container-login-loja > .usuario > div").style.border = "1px solid #ff6347"
                m_error(response.data.message)

            }

            if (response.data.type === "error_password") {
                document.querySelector(".container-login-loja > .senha > div").style.border = "1px solid #ff6347"
                m_error(response.data.message)

            }
        } catch (error) {
            m_error("Ops. Parece que algo deu errado!")
        }

    }

    return (
        <div className="container-login-loja">
            <div className="area-input usuario">
                <div>
                    <img src="/user2.png" alt="Icone Usuário" />
                    <input
                        placeholder='Usuário'
                        type={"text"}
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>
            </div>
            <div className="area-input senha">
                <div>
                    <img src="/key.png" alt="Icone Senha" />
                    <input
                        placeholder='Senha'
                        type={hideSenha ? 'password' : 'text'}
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                    <a className="ver-senha" onProgress={() => setHideSenha(!hideSenha)}>
                        {hideSenha ?
                            <img src="/eye.png" alt="Icone Ver Senha" />
                            :
                            <img src="/invisible.png" alt="Icone Ver Senha" />
                        }
                    </a>
                </div>
            </div>
            <div className="area-input">
                <button onClick={fazerLoginEstabelecimento}>Entrar</button>
            </div>

            <div className="message">

            </div>
        </div>
    )
}