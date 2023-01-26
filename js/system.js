
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
        
                // Desabilita o botao
                $(btn).prop('disabled', false);
            }
        },200)
    },3200)
}

// Botões de ação

$('#btn_add_investimento').click(function(){
    let inputAdd = $('#add_dinheiro').val()
    if(parseFloat(inputAdd) > saldoConta){
        popUpTransacaoErro()
        disableButtonTransacao($('.btn_input'))
    }else if(parseFloat(inputAdd) <= saldoConta) {
        saldoConta -= parseFloat(inputAdd)
        dinheiroInvestidoTotal = parseFloat(dinheiroInvestidoTotal) + parseFloat(inputAdd)

        popUpTransacao()
        atualizarSaldo()
        atualizarSaldoInvestimento()

        disableButtonTransacao($('.btn_input'))
    }
    else if(inputAdd <= 0 || inputAdd != (/[0-9]/)) {
        popUpTransacaoErro()
        disableButtonTransacao($('.btn_input'))
    }
})

$('#btn_retirar_investimento').click(function(){
    let inputRetirar = $('#retirar_dinheiro').val()
    if(parseFloat(inputRetirar) > dinheiroInvestidoTotal){
        popUpTransacaoErro()
        disableButtonTransacao($('.btn_input'))
    }else if(parseFloat(inputRetirar) <= dinheiroInvestidoTotal){
        saldoConta = parseFloat(saldoConta) + parseFloat(inputRetirar)
        dinheiroInvestidoTotal -= parseFloat(inputRetirar)
        
        popUpTransacao()
        atualizarSaldo()
        atualizarSaldoInvestimento()
  
        disableButtonTransacao($('.btn_input'))
    }
    else if(inputAdd <= 0 || inputAdd != (/[0-9]/)) {
        popUpTransacaoErro()
        disableButtonTransacao($('.btn_input'))
    }
})

$('.menu_burguer').click(function(){
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
            <div class="valor_extrato_box">
                <span id="nome_transacao">Pix recebido</span>
                <span id="valor_transferencia">R$ 200,00</span>
                <span id="data_transacao">06/03/23, às 20H30</span>
            </div>
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
    closeBtnExtrato ()

   $('.fundo_popup_select').click(function(){
        $('.fundo_popup_select').fadeOut(300)
        setTimeout(function(){
            $('.fundo_popup_select').remove()
        },300)
    })

    $('.extrato_user').click(function(e){
        e.stopPropagation()
    })
})


function extratoConta () {

}
