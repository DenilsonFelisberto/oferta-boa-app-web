import React, { useState } from 'react';
import "./login-cadastro.css";
import LoginLoja from '../../components/LoginLoja';
import CadastroLoja from '../../components/CadastroLoja';

export default function LoginCadastro() {

    const [isActvOpc1, setIsActvOpc1] = React.useState(true);
    const [isActvOpc2, setIsActvOpc2] = React.useState(false);

    function actionClickOpc1() {
        if (isActvOpc1 === false) {
            setIsActvOpc1(true)
            setIsActvOpc2(false)
        }

        if (isActvOpc1 === true) {
            setIsActvOpc1(false)
        }
    }

    function actionClickOpc2() {
        if (isActvOpc2 === false) {
            setIsActvOpc2(true)
            setIsActvOpc1(false)
        }

        if (isActvOpc2 === true) {
            setIsActvOpc2(false)
        }
    }

    return (
        <div className="container-principal">
            <div></div>
            <div className="container-login-cadastro">
                <div className="abas-login-cadastro">
                    <div className="opcButton1">
                        <a onClick={actionClickOpc1}>Login</a>
                        {isActvOpc1 === true && <div className="activeOption"></div>}
                        {isActvOpc1 === false && <div></div>}
                    </div>
                    <div className="opcButton2">
                        <a onClick={actionClickOpc2}>Cadastrar-se</a>
                        {isActvOpc2 === true && <div className="activeOption"></div>}
                        {isActvOpc2 === false && <div></div>}
                    </div>
                </div>
                <div className="cabecalho-login-cadastro">
                    <div className="img-logo-login-cadastro">
                        <img src="/store.png" alt="Logo da Aplicação" />
                    </div>
                    <div className="text-login-cadastro">
                        <h1>OfertaBoa - Minha Loja</h1>
                        {isActvOpc1 === true && <span>Entre com seus dados para fazer login!</span>}
                        {isActvOpc2 === true && <span>Entre com os dados abaixo para cadastrar sua loja/estabelecimento!</span>}
                    </div>
                </div>

                <div className="conteudo-login-cadastro">
                    {isActvOpc1 === true && <LoginLoja />}
                    {isActvOpc2 === true && <CadastroLoja />}
                </div>
            </div>
            <div></div>
        </div>
    )
}