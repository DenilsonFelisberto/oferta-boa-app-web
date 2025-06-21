import { useState } from 'react';
import "./inicio.css";

import api from '../../services/api';

export default function Inicio() {

  return (
    <div className="container-inicio">
      <div className="cabecalho-inicio">
        <div className="img-logo-inicio">
          <img src="/banner.png" alt="Logo da Aplicação" />
        </div>
        <div className="text-inicio">
          <h1>OfertaBoa - Minha Loja</h1>
          <span>Seu app de promoções para promover seu negócio!</span>
          <div className="area-texto-avancar">
            <span>Clique em avançar para acessar/cadastrar sua Loja!</span>
          </div>
        </div>
      </div>
      <div className="area-botao">
        <a href="/login-cadastro">
          <button title="Avançar">
            <img src="/next.png" alt="Botão Avancar" />
          </button>
        </a>
      </div>

    </div>
  )
}