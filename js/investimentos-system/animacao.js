

// Animacao do Arrow
let id = 0
let id2 = 0
let id3 = 0

function btnArrow (id) {
    id = id
    arrow = $('.arrow_display').eq(id)

    if(arrow.css('rotate') == '0deg') {
        arrow.animate({
            'rotate': '90deg'
        },300)
    }else {
        arrow.animate({
            'rotate': '0deg'
        },300)
    }
    $('.info_investimento_user').eq(id).slideToggle()
}


function btnAplicar(id) {
    $('.container_movimentar_dinheiro').hide()
    $('.box_resgatar').hide()

    id2 = id
    let boxAplicar = $('.box_aplicar').eq(id2)

    if(boxAplicar.css('display') == 'none') {
        $('.container_movimentar_dinheiro').fadeIn()
        boxAplicar.fadeIn(100)
    }else {
        $('.container_movimentar_dinheiro').hide()
        boxAplicar.hide(100)
    }
}


function btnResgatar(id) {
    $('.container_movimentar_dinheiro').hide()
    $('.boxAplicar').hide()

    id3 = id
    let box_resgatar = $('.box_resgatar').eq(id3)

    if(box_resgatar.css('display') == 'none') {
        $('.container_movimentar_dinheiro').fadeIn()
        box_resgatar.fadeIn(100)
    }else {
        $('.container_movimentar_dinheiro').hide()
        box_resgatar.hide(100)
    }
}