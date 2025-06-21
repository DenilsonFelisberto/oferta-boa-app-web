import React, { useState } from 'react';
import './bloco-busca-cliente.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { CircularProgress } from '@mui/joy';

import api from "../../services/api";

import { getDataSession } from '../../services/sessionDataUser';

export default function BlocoBuscaCliente() {

    const [clientes, setClientes] = useState([]);

    const [nomeCliente, setNomeCliente] = useState('');

    const [loading, setLoading] = useState(false);

    const MySwal = withReactContent(Swal);

    var dados = {}

    function renderClienteInList(cliente) {
        return (
            <div className="data-cli">
                <div>
                    <h5>{cliente.nome}</h5><h5 className="cabecalho-data-cli-inline">Nome</h5>
                </div>
                <div>
                    <h5>{cliente.usuario}</h5><h5 className="cabecalho-data-cli-inline">Usuário</h5>
                </div>
                <div>
                    <div className="box-num-cup">
                        <div className="num-cup">{cliente.cupons_resgatados}</div><h6>cupom(s) disponível(eis)</h6>
                    </div>
                    <h6 className="cabecalho-data-cli-inline">Cupons resgatados</h6>
                </div>
                <div>
                    <button title="Ver cupons">Ver cupons</button>
                </div>
            </div>
        )
    }

    async function searchCliente() {
        setLoading(false);

        dados['nome_cliente'] = nomeCliente;

        try {
            const response = await api.post('/buscaClientes', dados)

            if (response.data.type === "success") {

                setLoading(false);

                var res = [];

                JSON.parse(response.data.clientes).forEach(cli => {
                    console.log(cli);

                    res.push(JSON.parse(cli));
                });

                MySwal.fire({
                    html: <div className="corpo">
                        <div className="cabecalho-data-cli">
                            <div>
                                <h5>Nome</h5>
                            </div>
                            <div>
                                <h5>Usuário</h5>
                            </div>
                            <div>
                                <h6>Cupons resgatados</h6>
                            </div>
                            <div></div>
                        </div>
                        {clientes.map((cli) => renderClienteInList(cli))}
                    </div>,
                    width: '100%',
                    showCloseButton: true,
                    allowOutsideClick: false,
                    // showConfirmButton: false,
                })
            }
        } catch (error) {
            MySwal.fire({
                icon: 'error',
                html: <h4 style={{ color: '#479F76', marginTop: 5 }}>Ops. Parece que algo deu errado!</h4>,
                // width: '80%',
                showCloseButton: false,
                allowOutsideClick: false,
                // showConfirmButton: false,
            })
        }
    }

    if (loading) {

        const html = <div style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
            {/* <ActivityIndicator size={'large'} color="#479F76" /> */}
            <CircularProgress color="success" />
            <h5 style={{ color: '#479F76', marginTop: 5 }}>Um momento...</h5>
        </div>

        MySwal.fire({
            html: html,
            // width: '80%',
            showCloseButton: false,
            showConfirmButton: false,
            allowOutsideClick: false,
        })
    }

    return (
        <div className="bloco-busca-cliente">
            <div className="cabecalho">
                <div className="area-input nome-cliente">
                    <div>
                        <img src="/user2.png" alt="Icone Cliente" />
                        <input
                            placeholder='Busque por clientes aqui...'
                            type={"text"}
                            value={nomeCliente}
                            onChange={(e) => setNomeCliente(e.target.value)}
                        />
                        <button title="Buscar Cliente">Buscar</button>
                    </div>
                    <div className="ajuda">
                        <p>Busque clientes para cadastrar suas compras e validar seus cupons resgatados!</p>
                    </div>
                </div>
            </div>
            {/* <div className="corpo">
                <div className="cabecalho-data-cli">
                    <div>
                        <h5>Nome</h5>
                    </div>
                    <div>
                        <h5>Usuário</h5>
                    </div>
                    <div>
                        <h6>Cupons resgatados</h6>
                    </div>
                    <div></div>
                </div>

                <div className="data-cli">
                    <div>
                        <h5>Denilson</h5><h5 className="cabecalho-data-cli-inline">Nome</h5>
                    </div>
                    <div>
                        <h5>denny193</h5><h5 className="cabecalho-data-cli-inline">Usuário</h5>
                    </div>
                    <div>
                        <div className="box-num-cup">
                            <div className="num-cup">22</div><h6>cupom(s) disponível(eis)</h6>
                        </div>
                        <h6 className="cabecalho-data-cli-inline">Cupons resgatados</h6>
                    </div>
                    <div>
                        <button title="Ver cupons">Ver cupons</button>
                    </div>
                </div>
            </div> */}
        </div>
    )
}
