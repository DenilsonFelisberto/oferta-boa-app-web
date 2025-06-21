import "./error.css";

export default function Error() {
    return(
        <div className="container-error">
            <img src="/error-fideliza-cli.png" alt="Página não encontrada" />
            <h1>Página não encontrada!</h1>
            <a href="/home">
                Voltar ao início
            </a>
        </div>
    )
}