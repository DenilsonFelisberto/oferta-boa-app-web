import { useState, useEffect } from 'react';
import './bloco-promocoes.css';

import { ScrollMenu } from 'react-horizontal-scrolling-menu';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import { CircularProgress } from '@mui/joy';

import CadastroPromocao from '../CadastroPromocao';

import api from "../../services/api";
import { getDataSession } from '../../services/sessionDataUser';

// const list = [1, 2, 3, 4, 5, 6, 7];

export default function BlocoPromocoes() {

    const [promocoes, setPromocoes] = useState([]);
    const [loading, setLoading] = useState(true);

    function encurtaString(str) {
        return str.substring(0, 25);
    }

    function renderItemCard(promo) {

        return (
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }} key={promo.id}>
                <div className="container-card">
                    <div className="image-card">
                        <a href="/home" className="post">
                            <img src="/promocao2.png" alt="Img Promo Card" title="Img Promo Card" />
                        </a>
                    </div>
                    <div className="conteudo-card">
                        <h5>{encurtaString(promo.descricao) + "..."}</h5>
                        <div className="starCon" title="Avaliações">
                            {[1, 2, 3, 4, 5].map(str => <img className="starConIcon" src="/star-bold2.png" key={str} />)}
                        </div>
                        <div className="avaliacoes" title="Avaliações">
                            <p>54 avaliações</p>
                        </div>
                        <div className="timePost" title="Data da postagem">
                            <img className="clockIcon" src="/clock.png" />
                            <p>em {promo.data_adicao}</p>
                        </div>
                    </div>
                    <div className="buttonVerPromo" title="Ver promoção">
                        <img className="verIcon" src="/ir.png" />
                    </div>
                </div>
                {promo.status_promo === "1" &&
                    <div className="statusPromoActive" title="Status">
                        <p>Ativa</p>
                    </div>
                }
                {promo.status_promo === "2" &&
                    <div className="statusPromoExpired" title="Status">
                        <p>Encerrada</p>
                    </div>
                }
            </div>
        )
    }

    // list.forEach(element => {
    //     components.push(renderItemCard(element));
    // });

    const componentLoading = <div style={{ width: 250, display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginTop: 10, marginBottom: 10 }} >
        <CircularProgress color="success" />
        <h4 style={{ color: '#479F76', marginLeft: 10 }}>Carregando promoções...</h4>
    </div>

    // const components = [];

    const componentButtonAddPost = <div className="container-card">
        <div className="image-card" style={{ width: 100 }}>
            <a className="addPost" style={{ alignSelf: 'center' }} onClick={viewFormCadastroPostagem}>
                <img src="/add.png" alt="Img Add Promo" title="Adicionar Promoção" />
                <h6>Add Promoção</h6>
            </a>
        </div>
    </div>;

    function viewFormCadastroPostagem() {

        const MySwal = withReactContent(Swal);

        MySwal.fire({
            html: <CadastroPromocao />,
            // width: '80%',
            showCloseButton: true,
            showConfirmButton: false,
            allowOutsideClick: false,
        })
    };

    useEffect(() => {
        async function loadPostagens() {

            var dados = {};

            dados['estabelecimento_id'] = getDataSession('DADOS_CLI').id;

            try {
                const response = await api.post('/buscaPromocoesPorEstabelecimento', dados)

                if (response.data.type === "success") {
                    // console.log(response.data);
                    setLoading(false);

                    var res = [];

                    JSON.parse(response.data.promocoes_estabelecimento).forEach(promo => {
                        console.log(promo);

                        res.push(JSON.parse(promo));
                    });

                    setPromocoes(res.slice(0,4));

                }
            } catch (error) {
                console.log(error);
            }
        }

        loadPostagens();
    }, [])

    return (
        <div className="bloco-promocoes">
            <div className="cabecalho">
                <div>
                    <h4>Ultimas postagens</h4>
                </div>
                <a href="/home" className="ver-todas" title="Ver todas">
                    <h4>Ver todas</h4>
                    <img src="/ir.png" alt="Img Ver Todas" style={{ width: 22, height: 22, marginLeft: 5 }} />
                </a>
            </div>
            <div className="corpo teste">
                {loading === true && componentLoading}
                {loading === false && componentButtonAddPost}
                {promocoes.map((post) => renderItemCard(post))}
            </div>
        </div>
    )
}