import { useState } from 'react';
import './cadastro-loja.css';
import { m_success, m_error } from './metodos-de-suporte.js';

import api from '../../services/api';

export default function CadastroLoja() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [segmento, setSegmento] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmSenha, setConfirmSenha] = useState('');

    var dados = {};

    var text = '';

    async function cadastraEstabelecimento() {

        // text += `Nome: ${nome}`;
        // text += `Nome: ${email}`;
        // text += `Nome: ${usuario}`;
        // text += `Nome: ${senha}`;
        // text += `Nome: ${confirmSenha}`;

        dados['nome'] = nome;
        dados['email'] = email;
        dados['segmento'] = segmento.toUpperCase();
        dados['usuario'] = usuario;
        dados['senha'] = senha;
        dados['confirmSenha'] = confirmSenha;

        if (senha === confirmSenha) {
            try {
                const response = await api.post('/storeEstabelecimento', dados)

                if (response.data.type === "success") {
                    m_success(response.data.message)
                } else {
                    document.querySelector(".container-cadastro-loja > .usuario > div").style.border = "1px solid #ff6347"
                    m_error(response.data.message)
                }
            } catch (error) {
                m_error("Ops. Parece que algo deu errado!")
            }
        } else {
            m_error("Ops. Preencha os campos corretamente!")
        }


        // alert(text);
    }

    return (
        <div className="container-cadastro-loja">
            <div className="area-input">
                <div>
                    <img src="/icon-store.png" alt="Icone Loja" />
                    <input
                        placeholder='Informe o nome da loja/estabelecimento'
                        type={"text"}
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                </div>
            </div>
            <div className="area-input">
                <div>
                    <img src="/segment2.png" alt="Icone Segmento" />
                    <input
                        placeholder='Informe o segmento da loja/estabelecimento'
                        type={"text"}
                        value={segmento}
                        onChange={(e) => setSegmento(e.target.value)}
                    />
                </div>
            </div>
            <div className="area-input">
                <div>
                    <img src="/sign.png" alt="Icone E-mail" />
                    <input
                        placeholder='Informe um e-mail válido'
                        type={"text"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>
            <div className="area-input usuario">
                <div>
                    <img src="/user2.png" alt="Icone Usuário" />
                    <input
                        placeholder='Informe um usuário'
                        type={"text"}
                        value={usuario}
                        onChange={(e) => setUsuario(e.target.value)}
                    />
                </div>
            </div>
            <div className="area-input">
                <div>
                    <img src="/key.png" alt="Icone Senha" />
                    <input
                        placeholder='Informe uma senha'
                        type='password'
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />
                </div>
            </div>
            <div className="area-input">
                <div>
                    <img src="/confirm.png" alt="Icone Confirmar Senha" />
                    <input
                        placeholder='Confirme sua senha'
                        type='password'
                        value={confirmSenha}
                        onChange={(e) => setConfirmSenha(e.target.value)}
                    />
                </div>
            </div>

            <div className="area-input">
                <button onClick={cadastraEstabelecimento}>Cadastrar</button>
            </div>

            <div className="message">

            </div>
        </div>
    )
}