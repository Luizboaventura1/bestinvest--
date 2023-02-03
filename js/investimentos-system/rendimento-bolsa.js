/*
1 - Pegar o valor para investir
2 - Adicionar o valor em fundo
3 - comecar a render
4 - opcao de pegar o investimento

*/

//  Render investimentos do usuario

// Dados de cotacoes do arquivo investir.js



let listaAplicacoes = JSON.parse(localStorage.getItem('listaAplicacoes')) ? JSON.parse(localStorage.getItem('listaAplicacoes')) : []


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

        listaAplicacoes.map((valor) => {
            if(valor.nomeAplicacao == nomeAplicacao)
            return valor.valorAplicado += valorAplicado
            else{localStorage.setItem('listaAplicacoes',JSON.stringify(listaAplicacoes))}

        })

        localStorage.setItem('listaAplicacoes',JSON.stringify(listaAplicacoes))
    }
    else if(listaAplicacoes.length == 0){
        listaAplicacoes.push(aplicacaoSingle)
        localStorage.setItem('listaAplicacoes',JSON.stringify(listaAplicacoes))
    }
    else {
        listaAplicacoes.push(aplicacaoSingle)
        localStorage.setItem('listaAplicacoes',JSON.stringify(listaAplicacoes))
    }

    mostrarAplicacoes()
    valorTotalAplicacoes()
}



mostrarAplicacoes = () => {
    $('.wraper_tabela').html('')
    let i = 0
    let id = 0
    let id2 = 0
    let id3 = 0

    listaAplicacoes.map((value)=> {
        $('.wraper_tabela').append(`
        <div class="fundo_investido_usuario">
            <div class="investido_aplicacao">
                <div class="row_box">
                    <span>R$ ${parseFloat(value.valorAplicado).toFixed(2).replace('.',',')}</span>
                    <span>${value.rentabilidade}%</span>
                    <span>${value.nomeAplicacao}</span>
                </div>
                <div class="row_box" onclick="btnArrow(id='${i++}')">
                    <div class="arrow_display">
                        <img src="../images/right-arrow.png" alt="Arrow right">
                    </div>
                </div>
            </div>
            <div class="info_investimento_user">
                <div class="button_wraper">
                    <div class="button_aplicar" onclick="btnAplicar(id='${id++}')">Aplicar</div>
                    <div class="button_resgatar" onclick="btnResgatar(id='${id2++}')">Resgatar</div>
                </div>
            </div>
            <div class="container_movimentar_dinheiro" onclick="containerMovimentarDinheiro(id='${id3++}')">
                <div class="box_aplicar">
                    <input type="number" placeholder="Aplicar">
                    <button type="submit" class="btn_input">Confirmar</button>
                </div>
                <div class="box_resgatar">
                    <input type="number" placeholder="Resgatar">
                    <button type="submit" class="btn_input" >Confirmar</button>
                </div>
            </div>
        </div><!--fundo_investido_usuario-->`)

    })
}

mostrarAplicacoes()


function valorTotalAplicacoes() {
    let totalInvestido = 0
    for(let i = 0;i < listaAplicacoes.length;i++){
        totalInvestido += listaAplicacoes[i].valorAplicado
    }
    $(".dinheiro_investido_usuario").text(`R$ ${parseFloat(totalInvestido).toFixed(2).replace('.',',')}`)
}

valorTotalAplicacoes()