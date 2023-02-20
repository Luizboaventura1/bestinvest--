

// Botão dashboard

$('.btn_dashboard svg').click(function(){
    let control = $('.container_controle')
    if(control.css('display') == 'block'){
        $('.dashboard').css('min-width','50px')
        $('.dashboard').css('width','50px')

        $('.container_controle').hide()
        $('.user_container').hide()
    }else if(control.css('display') == 'none') {
        $('.dashboard').css('min-width','300px')
        $('.dashboard').css('width','300px')
        
        $('.container_controle').show()
        $('.user_container').css('display','flex')
    }
})