//Buscar dados do usuário na sessão
export function getDataSession(key) {
    const dado = sessionStorage.getItem(key);

    var dadoSalvo =  JSON.parse(dado) || '';

    return dadoSalvo;

}

//Salvar dados do usuário na sessão
export function saveDataSession(key, data) {
    
    var dadoSalvo = getDataSession(key);

    if(!dadoSalvo){
        sessionStorage.setItem(key, data);
        console.log("usuario logado com sucesso");
    }else{
        console.log('Usuário já logado!');
    }

}

//Atualiza dados na sessão
export function updateDataSession(key, data) {
    
    sessionStorage.setItem(key, data);
}


//Deletar dados do usuário da sessão

export function deleteDataSession(key) {
    
    sessionStorage.removeItem(key);
    console.log('Usuário efetuou logout!');

}


