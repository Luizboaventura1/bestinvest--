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


let listaAplicacoes = JSON.parse(localStorage.getItem('listaAplicacoes')) ? JSON.parse(localStorage.getItem('listaAplicacoes')) : []


let element = `
<div class="fundo_investido_usuario">
            <div class="investido_aplicacao">
                <span>R$ 600,00</span>
                <span>12,23%</span>
                <span>Nome investimento</span>
                <div class="arrow_display" onclick="arrowFunc(0)">
                    <img src="../images/right-arrow.png" alt="Arrow right">
                </div>
            </div>
            <div class="info_investimento_user">
                <div class="button_wraper">
                    <div class="button_aplicar">Aplicar</div>
                    <div class="button_resgatar">Resgatar</div>
                </div>
            </div>
            <div class="container_movimentar_dinheiro">
                <div class="box_aplicar">
                    <input type="number" placeholder="Aplicar">
                    <button type="submit" class="btn_input" >Confirmar</button>
                </div>
                <div class="box_resgatar">
                    <input type="number" placeholder="Resgatar">
                    <button type="submit" class="btn_input" >Confirmar</button>
                </div>
            </div>
        </div><!--fundo_investido_usuario-->
`


function adicionarAplicacao(nomeAplicacao,valorAplicado,rentabilidade) {


    let aplicacaoSingle = {
        nomeAplicacao: nomeAplicacao,
        valorAplicado: valorAplicado,
        rentabilidade: rentabilidade
    }

    let verificarAplicacao = listaAplicacoes.find(function(nome){
        return nome.nomeAplicacao === nomeAplicacao
    })

    if(verificarAplicacao){

        console.log('tudo certo')

        localStorage.setItem('listaAplicacoes',JSON.stringify(listaAplicacoes))
    }
    else if(listaAplicacoes.length == 0){
        listaAplicacoes.push(aplicacaoSingle)
        localStorage.setItem('listaAplicacoes',JSON.stringify(listaAplicacoes))
    }
    else {
        listaAplicacoes.push(aplicacaoSingle)
        localStorage.setItem('listaAplicacoes',JSON.stringify(listaAplicacoes))
        console.log('diferente')
    }

}


const teste = [
    {
        valor: 70
    },
    {
        valor: 90
    }
]
let valor = 0

let list = teste.map((val)=> {
    if(val.valor == 70){
        valor = val.valor += 70
    }
})

teste[0].valor = valor

console.log(teste[0].valor)