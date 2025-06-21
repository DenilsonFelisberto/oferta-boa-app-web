import React, { useState } from 'react';
import './bloco-dados-loja.css';

export default function BlocoDadosLoja() {

    return (
        <div className="bloco-dados-loja">
            <div className="campo-img-perfil">
                <div className="bloco-img">
                    <img src="/store.png" alt="Foto Perfil" />
                </div>
            </div>
            <div className="campo-informacoes">
                <div className="bloco-scores">
                    <div className="campo-avaliacoes-loja" title="Avaliações">
                        <div>
                            <h4>56</h4>
                        </div>
                        <img src="/star-bold2.png" alt="Icon Avaliação" style={{ width: 30, height: 30 }} />
                    </div>
                    <div className="campo-curtidas-loja" title="Curtidas">
                        <div>
                            <h4>21</h4>
                        </div>
                        <img src="/favorite2.png" alt="Icon Favorito" style={{ width: 30, height: 30 }} />
                    </div>
                </div>
                <p>Adriana Modas</p>
            </div>
        </div>
    )
}