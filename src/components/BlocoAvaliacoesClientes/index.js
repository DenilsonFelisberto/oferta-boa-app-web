import React, { useState } from 'react';
import './bloco-avaliacoes-clientes.css';

export default function BlocoAvaliacoesClientes() {

    const list = [1, 2, 3];

    function renderItemAvaliacao(item) {
        return (
            <div className="container-avaliacao" key={item}>
                <div className="bloco-titulo">
                    <div>
                        <h4>Por: </h4>
                        <h5>Denilson Felisberto</h5>
                    </div>
                    <div className="starCon" title="Avaliações">
                        {[1, 2, 3, 4, 5].map(str => <img className="starConIcon" src="/star-bold2.png" key={str} />)}
                    </div>

                </div>
                <p>Loja muito acolhedora, ótimas promoções, descontos em itens super interessantes, comprarei de novo sim!</p>
                <div className="info-data">
                    <h6>Em 20.03.2023</h6>
                </div>
            </div>
        )
    }

    const components = [];

    list.forEach(element => {
        components.push(renderItemAvaliacao(element));
    });

    return (
        <div className="bloco-avaliacoes-clientes">
            <div className="cabecalho">
                <div>
                    <h4>Avaliações de clientes</h4>
                </div>
                <a href="/home" className="ver-todas" title="Ver todas">
                    <h4>Ver todas</h4>
                    <img src="/ir.png" alt="Img Ver Todas" style={{ width: 22, height: 22, marginLeft: 5 }} />
                </a>
            </div>
            <div className="corpo">
                {components}
            </div>
        </div>
    )
}