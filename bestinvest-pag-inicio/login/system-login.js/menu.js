
// Menu

$('.menu_burguer').click(function(){
    let menuOpen = $('#menu_open')
    let menuClose = $('#menu_close')
    if(menuOpen.css('display') == 'block'){
        menuOpen.fadeOut().css('display','none')
        menuClose.fadeIn().css('display','block')
    }else {
        menuOpen.fadeIn().css('display','block')
        menuClose.fadeOut().css('display','none')
    }

    $('.menu_mobile > ul').slideToggle()
})