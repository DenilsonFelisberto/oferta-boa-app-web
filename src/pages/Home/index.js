import { useState } from 'react';
import './home.css';
import Cabecalho from '../../components/Cabecalho';
import Rodape from '../../components/Rodape';
import BlocoPromocoes from '../../components/BlocoPromocoes';
import BlocoDadosLoja from '../../components/BlocoDadosLoja';
import BlocoDadosComplementares from '../../components/BlocoDadosComplementares';
import BlocoBuscaCliente from '../../components/BlocoBuscaCliente';
import BlocoAvaliacoesClientes from '../../components/BlocoAvaliacoesClientes';

export default function Home() {

    return (
        <div className="container-home">
            <Cabecalho />
            <BlocoDadosLoja />
            <BlocoBuscaCliente />   
            <BlocoPromocoes />
            <BlocoDadosComplementares />
            <BlocoAvaliacoesClientes />
            <Rodape />
        </div>
    )
}