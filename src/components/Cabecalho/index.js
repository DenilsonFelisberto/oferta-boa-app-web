
import { BsList } from "react-icons/bs";
import "./cabecalho.css";
import { getDataSession, deleteDataSession } from '../../services/sessionDataUser';
// import DadosCliente from "../../pages/DadosCliente";

export default function Cabecalho() {

  window.onload = function () {
    var cabecalho = document.querySelector(".cabecalho");

    if (getDataSession('DADOS_CLI')) {

      const dadosCli = getDataSession('DADOS_CLI');

      cabecalho.querySelector(".cabecalho > .barraDeOpcoes > .opcoesUser > h5").innerHTML = "Olá " + dadosCli.usuario;

    } else {
      window.location.href = "/";
    }

    cabecalho.querySelector(".cabecalho > .barraDeOpcoes > .logo > h2").addEventListener('click', function () {
      cabecalho.querySelector(".cabecalho > .barraDeOpcoes > .logo > a").click();
    });

    // if (document.querySelector(".container-home > .bloco-promocoes > .corpo")) {
    //   const item = document.querySelector(".container-home > .bloco-promocoes > .corpo");

    //   window.addEventListener("wheel", function (e) {
    //     if (e.deltaY > 0) {
    //       item.scrollLeft += 100;
    //       e.preventDefault();
    //     } else {
    //       item.scrollLeft -= 100;
    //       e.preventDefault();
    //     }
    //   });
    // }

    // cabecalho.querySelector(".itensCabecalho").querySelector("button").addEventListener('click', function () {

    //   if (cabecalho.querySelector(".menuOpcoes").style.display === 'block') {
    //     cabecalho.querySelector(".menuOpcoes").style.display = 'none';
    //   } else {
    //     cabecalho.querySelector(".menuOpcoes").style.display = 'block';
    //   }
    // });

    // cabecalho.querySelector(".menuOpcoes").firstChild.addEventListener("click", function () {
    //   window.location.href = "/dados-cliente";
    // });

    // cabecalho.querySelector(".menuOpcoes").lastChild.addEventListener("click", function () {
    //   deleteDataSession('DADOS_CLI')
    //   window.location.href = "/";
    // });

  }

  return (
    <div className="cabecalho">
      <div className="barraDeOpcoes">
        <div className="logo">
          <a href="/home">
            <img src="/banner.png" alt="Voltar ao inicio" title="Voltar ao inicio" />
          </a>
          <h2 title="Voltar ao inicio">OfertaBoa</h2>
        </div>
        <div className="opcoesUser">
          <h5 title="Opções do usuário"></h5>
          <a href="/home">
            <img src="/user.png" alt="Opções do usuário" title="Opções do usuário" />
          </a>
        </div>
      </div>
      <div className="linha"></div>
      {/* <div className="itensCabecalho">
        <a href="/home">
          <img src="/user-fideliza-cli2.png" alt="Voltar ao inicio" title="Voltar ao inicio" />
        </a>
        <h2></h2>

        <button><BsList size={30} color="#7f7f7f" /></button>
      </div>
      <div className="menuOpcoes">
        <a className="opcao"><span>Meus dados</span></a>
        <a className="opcao"><span>Sair</span></a>
      </div> */}
    </div>
  )
}