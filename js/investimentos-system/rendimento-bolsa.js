/*
1 - Pegar o valor para investir
2 - Adicionar o valor em fundo
3 - comecar a render
4 - opcao de pegar o investimento

*/

//  Render investimentos do usuario

// Dados de cotacoes do arquivo investir.js



function saldoTesouroDireto() {
    //Verificar se tem saldo
    let value = 0
    if(localStorage.getItem('tesouroDireto') == NaN || localStorage.getItem('tesouroDireto') == null) {
        localStorage.setItem('tesouroDireto',parseFloat(value))
    }
}

saldoTesouroDireto()

function atualizarTesouroDireto(value) {
    localStorage.setItem('tesouroDireto',parseFloat(value))
}

function renderTesouroDireto() {

}
