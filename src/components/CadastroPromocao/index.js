import React, { useState, useEffect } from 'react';
import './cadastro-promocao.css';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { CircularProgress } from '@mui/joy';

import api from "../../services/api";
import { getDataSession } from '../../services/sessionDataUser';

export default function CadastroPromocao() {

    const [descricao, setDescricao] = useState('');
    const [palavrasChave, setPalavrasChave] = useState('');

    const [palavraChave, setPalavraChave] = useState('');

    const [desconto, setDesconto] = useState('');
    const [cupons, setCupons] = useState('');
    const [dataValidade, setDatavalidade] = useState('');

    const [loading, setLoading] = useState(false);

    const MySwal = withReactContent(Swal.mixin({
        customClass: {
            confirmButton: 'btn-confirm-modal',
        },
        buttonsStyling: false
    }));

    function addPalavraClave() {

        if (palavrasChave === "") {
            if (palavraChave !== "") {
                setPalavrasChave(palavraChave);

                setPalavraChave("");
            }
        } else {
            if (palavraChave !== "") {
                setPalavrasChave(palavrasChave + "," + palavraChave);

                setPalavraChave("");
            }
        }

    }

    async function cadastraPromo() {
        
        setLoading(true);
        
        var dados = {}

        dados['descricao'] = descricao;
        dados['data_validade'] = dataValidade;
        dados['desconto'] = desconto;
        dados['cupons'] = cupons;
        dados['palavras_chave'] = palavrasChave;
        dados['estabelecimento_id'] = getDataSession('DADOS_CLI').id;

        try {
            const response = await api.post('/storePromocao', dados)

            if (response.data.type === "success") {

                setLoading(false);

                const html = <div style={{ width: "100%", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                    <h4 style={{ color: '#479F76', marginTop: 5 }}>{response.data.message}</h4>
                </div>

                MySwal.fire({
                    icon: response.data.type,
                    html: html,
                    // width: '80%',
                    showCloseButton: false,
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
        <div className="cadastro-promocao">
            <div className="titulo">
                <h4>Cadastrar Promoção</h4>
            </div>
            <div className="campos">
                <div className="area-input descricao">
                    <div>
                        <textarea
                            rows={5}
                            placeholder='Descrição'
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
                </div>
                <div className="area-input desconto">
                    <div>
                        <input
                            placeholder='Valor do desconto'
                            type={"number"}
                            value={desconto}
                            onChange={(e) => setDesconto(e.target.value)}
                        />
                    </div>
                </div>
                <div className="area-input cupons">
                    <div>
                        <input
                            placeholder='Cupons oferecidos'
                            type={"number"}
                            value={cupons}
                            onChange={(e) => setCupons(e.target.value)}
                        />
                    </div>
                </div>

                <div className="area-input palavras-chave">
                    <div style={{ backgroundColor: '#FFF' }}>
                        <input
                            style={{ fontWeight: 'bold', color: '#545454' }}
                            placeholder='Palavras chave'
                            type={"text"}
                            disabled
                            value={palavrasChave.toUpperCase()}
                        // onChange={(e) => setPalavrasChave(e.target.value)}
                        />
                    </div>
                    <small>Adicione palavras para ajudar os clientes a identificar melhor sua promoção. Ex.: Calçado, Camisa, Vestido</small>
                </div>

                <div className="area-input add-palavras-chave" style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <div style={{ width: '65%' }}>
                        <input
                            placeholder='Insira suas palavras aqui...'
                            type={"text"}
                            value={palavraChave}
                            onChange={(e) => setPalavraChave(e.target.value)}
                        />
                    </div>
                    <button className="add-palavra-chave" title="Adicionar" onClick={addPalavraClave}>Add</button>
                </div>

                <div className="area-input data-validade">
                    <h5>Data de validade da promoção:</h5>
                    <div>
                        <input
                            type={"date"}
                            value={dataValidade}
                            onChange={(e) => setDatavalidade(e.target.value)}
                        />
                    </div>
                </div>

                <div className="area-input">
                    <button onClick={cadastraPromo}>Cadastrar</button>
                </div>

            </div>
        </div>
    )
}