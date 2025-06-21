import React, { useState } from 'react';
import './bloco-dados-complementares.css';

export default function BlocoDadosComplementares() {

    return (
        <div className="bloco-dados-complementares">
            <div className="cabecalho">
                <div>
                    <h4>Dados Complementares</h4>
                </div>
                <a href="/home" className="editar-dados" title="Editar Dados">
                    <h4>Editar</h4>
                    <img src="/ir.png" alt="Img Editar Dados" style={{ width: 22, height: 22, marginLeft: 5 }} />
                </a>
            </div>
            <div className="corpo">
                <div className="endereco">
                    <h5>Endereço</h5>
                    <p>Rua Alfredo Amaro, Nº 23, Bairro Mario Gadelha, SÃO PAULO</p>
                    <h5>Ponto de referência</h5>
                    <p>Ao lado da churrascaria Andrade</p>
                </div>
                <div className="outros">
                    <h5>Cadastrado(a) em</h5>
                    <p>20.03.2023</p>
                    <h5>Ponto de referência</h5>
                    <p>Ao lado da churrascaria Andrade</p>
                </div>
            </div>
            <div className="segmentos">
                <h5>Segmentos</h5>
                <div>
                    <div className="segs">
                        <h4>ROUPAS</h4>
                    </div>
                    <div className="segs">
                        <h4>CALÇADOS</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}