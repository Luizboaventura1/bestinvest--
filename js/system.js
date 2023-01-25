
let dinheiroInvestidoTotal = localStorage.getItem('dinheiroInvestido') 
let saldoConta = localStorage.getItem('saldoConta')

// Funções do site

function totalSaldo(){
    if(localStorage.getItem('saldoConta') == null){
        saldoConta += 1000
        localStorage.setItem('saldoConta',saldoConta)
        $('.saldo_atual').text(`R$ ${parseFloat(saldoConta).toFixed(2).replace('.',',')}`)
    }else if(localStorage.getItem('saldoConta') >= 0){
        $('.saldo_atual').text(`R$ ${parseFloat(saldoConta).toFixed(2).replace('.',',')}`)
    }
}


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

function inputLimit () {
    $('#add_dinheiro').keypress(function(){
        $(this).val(this.match(/^[0-9]$/))
    })

    $('#retirar_dinheiro').keypress(function(){
        $(this).val(this.match(/^[0-9]$/))
    })
}

inputLimit()

$('.adicionar_dinheiro_btn').click(function(){
    if($('#label_add_dinheiro').css('display') == 'none') {
        $('#label_add_dinheiro').css('display', 'block')

        if($('#label_retirar_dinheiro').css('display') == 'block') {
            $('#label_retirar_dinheiro').css('display','none')
        }
    }else {
        $('#label_add_dinheiro').css('display', 'none')
    }
})

$('.retirar_dinheiro_btn').click(function(){
    if($('#label_retirar_dinheiro').css('display') == 'none') {
        $('#label_retirar_dinheiro').css('display', 'block')

        if($('#label_add_dinheiro').css('display') == 'block') {
            $('#label_add_dinheiro').css('display','none')
        }
    }else {
        $('#label_retirar_dinheiro').css('display', 'none')
    }
})

function buttonFlecharPopup () {
    $('.fechar_select_inv > img').click(function(){
        $('.container_select_investimento').remove()
        $('.fundo_popup_select').remove()
    })
}

function verificarFecharPopup() {
    $('.fundo_popup_select').click(function(){
        $('.fundo_popup_select').remove()
    })

    $('.container_select_investimento').click(function(e){
        e.stopPropagation()
    })
}


buttonFlecharPopup()
verificarFecharPopup()

// Botões de ação

$('#btn_add_investimento').click(function(){
    let inputAdd = $('#add_dinheiro').val()
    if(parseFloat(inputAdd) > saldoConta){
        popUpTransacaoErro()
    }else if(parseFloat(inputAdd) <= saldoConta) {
        saldoConta -= parseFloat(inputAdd)
        dinheiroInvestidoTotal = parseFloat(dinheiroInvestidoTotal) + parseFloat(inputAdd)

        popUpTransacao()
        atualizarSaldo()
        atualizarSaldoInvestimento()

        $(this).hide()
        setTimeout(function(){
            $(this).slideIn('#btn_add_investimento')
        },2200)
    }
})

$('#btn_retirar_investimento').click(function(){
    let inputRetirar = $('#retirar_dinheiro').val()
    if(parseFloat(inputRetirar) > dinheiroInvestidoTotal){
        popUpTransacaoErro()
    }else if(parseFloat(inputRetirar) <= dinheiroInvestidoTotal){
        saldoConta = parseFloat(saldoConta) + parseFloat(inputRetirar)
        dinheiroInvestidoTotal -= parseFloat(inputRetirar)
        
        popUpTransacao()
        atualizarSaldo()
        atualizarSaldoInvestimento()

        $(this).hide()
        setTimeout(function(){
            $(this).slideIn('#btn_retirar_investimento')
        },2200)
    }
})

$('.menu_burguer').click(function(){
    let menu = $('.menu_mobile ul')
    menu.slideToggle()
})

// Botões de ação
