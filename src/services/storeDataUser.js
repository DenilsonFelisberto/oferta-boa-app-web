// //Buscar dados do usuário salvos
// export async function getDataSave(key) {
//     const dadosCli = await localStorage.getItem(key);

//     let dadosSalvos = JSON.parse(dadosCli) || [];

//     return dadosSalvos;
// }

// //Salvar dados do usuário logado no local storage
// export async function saveDataCli(key, newUser) {
//     let dataUserStored = await getDataSave(key);

//     //Se já existir o ID do cliente salvo não deixar efetuar login novamente
//     const hasIdUser = dataUserStored.some( user => user.id === newUser.id);

//     if (hasIdUser) {
//         console.log('Usuário já logado!');
//         return;
//     }

//     //Adicionar dados do novo usuário à fazer login
//     dataUserStored.push(newUser);
//     await localStorage.setItem(key, JSON.stringify(dataUserStored));
//     console.log('Usuário logado com sucesso!');

// }

// //Deletar dados salvos do usuário logado
// export function deleteDataCli(dadosCliLoged, id) {
//     let dadosCli = dadosCliLoged.filter(cli => {
//         return(cli.id !== id);
//     });

//     localStorage.setItem('@cli_loged', JSON.stringify(dadosCli))
//     console.log('Usuário efetuou logout!');

//     return dadosCli;
// }




