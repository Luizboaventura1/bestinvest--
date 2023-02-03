

// Animacao do Arrow
let id1 = 0
let id2 = 0
let id3 = 0


function containerMovimentarDinheiro(id) {
    id4 = id
}
let id4 = 0


function btnArrow (id) {
    id1 = id
    arrow = $('.arrow_display').eq(id1)

    if(arrow.css('rotate') == '0deg') {
        $('.info_investimento_user').eq(id1).show()
        arrow.animate({
            'rotate': '90deg'
        },300)
    }else {
        $('.container_movimentar_dinheiro').eq(id1).hide()
        $('.info_investimento_user').eq(id1).hide()
        arrow.animate({
            'rotate': '0deg'
        },300)
    }
}


function btnAplicar(id) {
    $('.container_movimentar_dinheiro').eq(id4).hide()
    $('.box_resgatar').eq(id3).hide()

    id2 = id
    let boxAplicar = $('.box_aplicar').eq(id2)

    if(boxAplicar.css('display') == 'none') {
        $('.container_movimentar_dinheiro').eq(id2).show()
        boxAplicar.show()
    }else {
        $('.container_movimentar_dinheiro').eq(id2).hide()
        boxAplicar.hide()
    }
}


function btnResgatar(id) {
    $('.container_movimentar_dinheiro').eq(id4).hide()
    $('.box_aplicar').eq(id2).hide()

    id3 = id
    let box_resgatar = $('.box_resgatar').eq(id3)

    if(box_resgatar.css('display') == 'none') {
        $('.container_movimentar_dinheiro').eq(id3).show()
        box_resgatar.show()
    }else {
        $('.container_movimentar_dinheiro').eq(id3).hide()
        box_resgatar.hide()
    }
}