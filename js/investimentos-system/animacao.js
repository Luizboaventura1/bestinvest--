

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
    }
    arrowFunc()
})