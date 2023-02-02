

// Animacao do Arrow

function arrowFunc(id) {
    $('.info_investimento_user').eq(id).slideToggle()
}

$('.arrow_display').click(function(){
    arrow = $('.arrow_display')

    if(arrow.css('rotate') == '0deg') {
        arrow.animate({
            'rotate': '90deg'
        },300)
    }else {
        arrow.animate({
            'rotate': '0deg'
        },300)
        $('.container_movimentar_dinheiro').hide()
    }
    arrowFunc()
})


$('.button_aplicar').click(function(){
    let boxAplicar = $('.box_aplicar')
    $('.container_movimentar_dinheiro').hide()
    $('.box_resgatar').hide()

    if(boxAplicar.css('display') == 'none') {
        boxAplicar.fadeIn()
        $('.container_movimentar_dinheiro').slideToggle()
    }else {
        $('.container_movimentar_dinheiro').hide()
        boxAplicar.fadeOut()
    }
})

$('.button_resgatar').click(function(){
    let boxResgatar = $('.box_resgatar')
    $('.container_movimentar_dinheiro').hide()
    $('.box_aplicar').hide()

    if(boxResgatar.css('display') == 'none'){
        $('.box_resgatar').fadeIn()
        $('.container_movimentar_dinheiro').slideToggle()
    }else {
        $('.box_resgatar').fadeOut()
        $('.container_movimentar_dinheiro').hide()
    }

})