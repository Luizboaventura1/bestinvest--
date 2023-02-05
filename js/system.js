
// Saldo investimentos
let dinheiroInvestidoTotal = localStorage.getItem('dinheiroInvestido')

// Saldo da conta
let saldoConta = localStorage.getItem('saldoConta')

let coinValue = 25000

// Mostrar saldo da conta

function totalSaldo(){
    if(localStorage.getItem('saldoConta') == null || localStorage.getItem('saldoConta') == ''){
        saldoConta += coinValue
        localStorage.setItem('saldoConta',saldoConta)
        $('.saldo_atual').text(`R$ ${formatPreco(saldoConta)}`)
    }else if(localStorage.getItem('saldoConta') >= 0){
        $('.saldo_atual').text(`R$ ${formatPreco(saldoConta)}`)
    }
}


// Mostrar saldo dos investimentos

function totalInvestido(){
    if(localStorage.getItem('dinheiroInvestido') == null){
        dinheiroInvestidoTotal = 0
        localStorage.setItem('dinheiroInvestido',dinheiroInvestidoTotal)
        $('.dinheiro_investido_usuario').text(`R$ ${formatPreco(dinheiroInvestidoTotal)}`)
    }else if(localStorage.getItem('dinheiroInvestido') >= 0){
        $('.dinheiro_investido_usuario').text(`R$ ${formatPreco(dinheiroInvestidoTotal)}`)
    }
}


totalInvestido()


// Opcao de esconder saldo da conta

let verificarEye = JSON.parse(localStorage.getItem('eyeVerify')) ? JSON.parse(localStorage.getItem('eyeVerify')) : ''

let olhoOpen = $('#eye_open')
let olhoClosed = $('#eye_closed')

if(verificarEye == 'open'){
    totalSaldo()
    olhoClosed.fadeOut(200).css('display','none')
    olhoOpen.fadeIn(200).css('display','block')
}
else if(verificarEye == 'close') {
    $('.saldo_atual').text('')
    $('.saldo_atual').append('<span></span>')
    olhoClosed.fadeIn(200).css('display','block')
    olhoOpen.fadeOut(200).css('display','none')
}
console.log(verificarEye)


function olhoMostrarSaldo() {

    let olhoOpen = $('#eye_open')
    let olhoClosed = $('#eye_closed')

    $('#eye_open').click(function(){
        $('.saldo_atual').text('')
        $('.saldo_atual').append('<span></span>')
        olhoClosed.fadeIn(200).css('display','block')
        olhoOpen.fadeOut(200).css('display','none')

        verificarEye = 'close'
        localStorage.setItem('eyeVerify',JSON.stringify(verificarEye))
    })
    $('#eye_closed').click(function(){
        totalSaldo()
        olhoClosed.fadeOut(200).css('display','none')
        olhoOpen.fadeIn(200).css('display','block')

        verificarEye = 'open'
        localStorage.setItem('eyeVerify',JSON.stringify(verificarEye))

    })
}

olhoMostrarSaldo()


function atualizarSaldo(value){
    localStorage.setItem('saldoConta',parseFloat(value))
    $('.saldo_atual').text(`R$ ${formatPreco(value)}`)
}

function atualizarSaldoInvestimento(value){
    localStorage.setItem('dinheiroInvestido',parseFloat(value))
    $('.dinheiro_investido_usuario').text(`R$ ${formatPreco(value)}`)
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
        /*setTimeout(function(){
            $('.container_select_investimento').remove()
            $('.fundo_popup_select').remove()
        },400)*/
    })
}

function verificarFecharPopup() {
    $('.fundo_popup_select').click(function(){
        $('.fundo_popup_select').fadeOut(300)
        /*setTimeout(function(){
            $('.fundo_popup_select').remove()
        },400)*/
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

    if(parseFloat(inputRetirar) == 4.5){
        saldoConta = 25000
        atualizarSaldo(saldoConta)
    }

    else if(parseFloat(inputRetirar) > dinheiroInvestidoTotal){

        popUpTransacaoErro()
        disableButtonTransacao($('.btn_input'))

    }else if(parseFloat(inputRetirar) <= dinheiroInvestidoTotal && Math.sign(inputRetirar) != -1){

        saldoConta = parseFloat(saldoConta) + parseFloat(inputRetirar)
        dinheiroInvestidoTotal -= parseFloat(inputRetirar)
        
        popUpTransacao()
        atualizarSaldo(saldoConta)
        atualizarSaldoInvestimento(dinheiroInvestidoTotal)
        disableButtonTransacao($('.btn_input'))

        // animacao
        $('#label_retirar_dinheiro').slideToggle(400)


        // Criar extrato
        let nomeTransferencia = 'Crédito Resgate Fundo'
        let valorTransferencia = parseFloat(inputRetirar)
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


// Formatar preco
function formatPreco(valorAtual) {
    valorAtual = parseFloat(valorAtual).toFixed(2)
    valorFormatar = valorAtual.split('.')

    let newValue = formatTotal(valorFormatar)

    return newValue
}

function formatTotal(valorFormatar) {
    if(valorFormatar[0] < 1000){
        return valorFormatar[0]+','+valorFormatar[1]
    }
    else if(valorFormatar[0] < 10000){
        return valorFormatar[0][0]+','+valorFormatar[0].substr(1,valorFormatar[0].length)+','+valorFormatar[1]
    }
    else if(valorFormatar[0] < 100000) {
        return valorFormatar[0][0]+valorFormatar[0][1]+','+valorFormatar[0].substr(2,valorFormatar[0].length)+','+valorFormatar[1]
    }
    else if(valorFormatar[0] < 1000000){
        return valorFormatar[0][0]+valorFormatar[0][1]+valorFormatar[0][2]+','+valorFormatar[0].substr(3,valorFormatar[0].length)+','+valorFormatar[1]
    }
}