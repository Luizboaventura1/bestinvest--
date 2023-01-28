
// Saldo investimentos
let dinheiroInvestidoTotal = localStorage.getItem('dinheiroInvestido')

// Saldo da conta
let saldoConta = localStorage.getItem('saldoConta')



// Mostrar saldo da conta

function totalSaldo(){
    if(localStorage.getItem('saldoConta') == null){
        saldoConta += 1000
        localStorage.setItem('saldoConta',saldoConta)
        $('.saldo_atual').text(`R$ ${parseFloat(saldoConta).toFixed(2).replace('.',',')}`)
    }else if(localStorage.getItem('saldoConta') >= 0){
        $('.saldo_atual').text(`R$ ${parseFloat(saldoConta).toFixed(2).replace('.',',')}`)
    }
}


// Mostrar saldo dos investimentos

function totalInvestido(){
    if(localStorage.getItem('dinheiroInvestido') == null){
        dinheiroInvestidoTotal = 0
        localStorage.setItem('dinheiroInvestido',dinheiroInvestidoTotal)
        $('.dinheiro_investido_usuario').text(`R$ ${parseFloat(dinheiroInvestidoTotal).toFixed(2).replace('.',',')}`)
    }else if(localStorage.getItem('dinheiroInvestido') >= 0){
        $('.dinheiro_investido_usuario').text(`R$ ${parseFloat(dinheiroInvestidoTotal).toFixed(2).replace('.',',')}`)
    }
}


totalSaldo()
totalInvestido()


function atualizarSaldo(){
    localStorage.setItem('saldoConta',parseFloat(saldoConta))
    $('.saldo_atual').text(`R$ ${parseFloat(saldoConta).toFixed(2).replace('.',',')}`)
}

function atualizarSaldoInvestimento(){
    localStorage.setItem('dinheiroInvestido',parseFloat(dinheiroInvestidoTotal))
    $('.dinheiro_investido_usuario').text(`R$ ${parseFloat(dinheiroInvestidoTotal).toFixed(2).replace('.',',')}`)
}


function popUpTransacao() {
    // Ja comeca resetando o popup
    $('.container_popup').remove()

    setTimeout(function(){
        $('body').fadeIn(function(){
            $('body').append(`
            <div class="container_popup">
                <div class="bloco_popup">
                    <h1>Transação concluida!</h1>
                </div>
                <div class="barra_popup"></div>
            </div>`)
        })
        $('.barra_popup').css('background-color','rgb(43, 255, 0)')
        $('.barra_popup').animate({
            'width': '100%'
        },3200)
    },500)

    setTimeout(function(){
        $('.container_popup').fadeOut()
        setTimeout(function(){
            $('.container_popup').remove()
        },500)
        $('.btn_input').show()
    },3500)
}

function popUpTransacaoErro(){
    // Ja comeca resetando o popup
    $('.container_popup_erro').remove()


    setTimeout(function(){
        $('body').fadeIn(function(){
            $('body').append(`
            <div class="container_popup_erro">
                <div class="bloco_popup">
                    <h1>Saldo insuficiente!</h1>
                </div>
                <div class="barra_popup"></div>
            </div>`)
        })
        $('.barra_popup').animate({
            'width': '100%'
        },3200)
    },500)

    setTimeout(function(){
        $('.container_popup_erro').fadeOut()
        setTimeout(function(){
            $('.container_popup_erro').remove()
        },500)
    },3500)
}


$('.retirar_dinheiro_btn').click(function(){
    // Retirar
    $('#label_retirar_dinheiro').slideToggle(400)

})


// Botoes da tabela de investimentos

function buttonFlecharPopup () {
    $('.fechar_select_inv > img').click(function(){
        $('.container_select_investimento').fadeOut(300)
        $('.fundo_popup_select').fadeOut(300)
        setTimeout(function(){
            $('.container_select_investimento').remove()
            $('.fundo_popup_select').remove()
        },400)
    })
}

function verificarFecharPopup() {
    $('.fundo_popup_select').click(function(){
        $('.fundo_popup_select').fadeOut(300)
        setTimeout(function(){
            $('.fundo_popup_select').remove()
        },400)
    })

    $('.container_select_investimento').click(function(e){
        e.stopPropagation()
    })
}


buttonFlecharPopup()
verificarFecharPopup()


function disableButtonTransacao(btn) {
    $(btn).css('background-color','rgb(224, 224, 224)')
    $(btn).css('color','rgb(138, 138, 138)')
    

    if(!$(btn).disabled){

        // Desabilita o botao
        $(btn).prop('disabled', true);
    }


    setTimeout(function(){
        $(btn).css('background-color',' #45b8ed')
        $(btn).css('color','white')
        setTimeout(function(){
            if(!$(btn).disabled){
        
                // Habilita o botao
                $(btn).prop('disabled', false);
            }
        },200)
    },3200)
}


// Verifica se tem numeros negativos no input

function verificarInput() {
    let inputAdd = $('#add_dinheiro').val()
    let inputRetirar = $('#retirar_dinheiro').val()

    if(Math.sign(parseFloat(inputAdd)) == -1 ||
        Math.sign(parseFloat(inputRetirar)) == -1) {

            $('#add_dinheiro').val('')
            $('#retirar_dinheiro').val('')
    }

}


// Botões de movimentar dinheiro

$('#btn_retirar_investimento').click(function(){
    let inputRetirar = $('#retirar_dinheiro').val()
    console.log(inputRetirar)

    if(parseFloat(inputRetirar) > dinheiroInvestidoTotal){

        popUpTransacaoErro()
        disableButtonTransacao($('.btn_input'))

    }else if(parseFloat(inputRetirar) <= dinheiroInvestidoTotal && Math.sign(inputRetirar) != -1){

        saldoConta = parseFloat(saldoConta) + parseFloat(inputRetirar)
        dinheiroInvestidoTotal -= parseFloat(inputRetirar)
        
        popUpTransacao()
        atualizarSaldo()
        atualizarSaldoInvestimento()
  
        disableButtonTransacao($('.btn_input'))

        $('#label_retirar_dinheiro').slideToggle(400)

        // Criar extrato
        let nomeTransferencia = 'Crédito Resgate Fundo'
        let valorTransferencia = `R$ ${parseFloat(inputRetirar).toFixed(2).replace('.',',')}`
        extratoConta(nomeTransferencia,valorTransferencia)
    }
    else if(inputRetirar <= 0) {
        popUpTransacaoErro()
        disableButtonTransacao($('.btn_input'))
    }

})

$('.menu_burguer').click(function(){

    let menuOpen = $('#menu_open')
    let close = $('#menu_close')

    if(menuOpen.css('display') == 'block') {
        menuOpen.fadeOut().css('display','none')
        close.fadeIn().css('display','block')
    }else {
        menuOpen.fadeIn().css('display','block')
        close.fadeOut().css('display','none')
    }

    let menu = $('.menu_mobile ul')
    menu.slideToggle()
})




// Extrato da conta

function tabelaExtrato() {
    let tabelaExtrato = $(`
    <div class="fundo_popup_select">
    <div class="extrato_user">
        <div class="fechar_select_inv" id="close_pop">
            
            <img src="../images/icone-closepopup.png" alt="Icone fechar Popup">

        </div><!--fechar_select_inv-->
        <h1>Extrato</h1>
        <div class="container_extrato_user">

        </div>
    </div>
    </div>`)

    tabelaExtrato.hide()
    $('body').append(tabelaExtrato)
    tabelaExtrato.fadeIn()
    
}


function closeBtnExtrato () {
    $('#close_pop > img').click(function(){

        $('.extrato_user').fadeOut(400)

        setTimeout(function(){
            $('.extrato_user').remove()
        },500)

        $('.fundo_popup_select').fadeOut(300)
        setTimeout(function(){
            $('.fundo_popup_select').remove()
        },300)
    })
}

$('#button_extrato').click(function(){
    tabelaExtrato()
    closeBtnExtrato()
    

   $('.fundo_popup_select').click(function(){
        $('.fundo_popup_select').fadeOut(300)
        setTimeout(function(){
            $('.fundo_popup_select').remove()
        },300)
    })

    $('.extrato_user').click(function(e){
        e.stopPropagation()
    })

    mostrarExtratos()
})



let listaExtrato = JSON.parse(localStorage.getItem('listaExtrato')) ? JSON.parse(localStorage.getItem('listaExtrato')) : []


function extratoConta (tipoTransferencia,valor) {
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth()
    let ano = data.getFullYear()
    let horas = data.getHours()
    let minutos = data.getMinutes()

    let dataTransferencia = `${dia}/${mes+1}/${ano}, às ${horas}h${minutos}`
    console.log(dataTransferencia)

    let extratoUser = {
        transferencia: tipoTransferencia,
        valorTransferencia: valor,
        horarioTransferencia: dataTransferencia
    }

    listaExtrato.push(extratoUser)

    localStorage.setItem('listaExtrato',JSON.stringify(listaExtrato))

}


function mostrarExtratos () {

    
    for(let i = 0;i <= listaExtrato.length;i++ ){
        listaExtrato.reverse()
        $('.container_extrato_user').append(`
            <div class="valor_extrato_box">
                <span class="nome_transacao">${listaExtrato[i].transferencia}</span>
                <span class="valor_transferencia">${listaExtrato[i].valorTransferencia}</span>
                <span class="data_transacao">${listaExtrato[i].horarioTransferencia}</span>
            </div>
        `)   
    }
}
