

// Botão dashboard

$('.btn_dashboard svg').click(function(){
    if($('.container_controle').css('display') == 'block'){
        $('.dashboard').css('min-width','50px')
        $('.dashboard').css('width','50px')

        $('.container_controle').hide()
        $('.user_container').hide()
    }else {
        $('.dashboard').css('min-width','300px')
        $('.dashboard').css('width','300px')
        
        $('.container_controle').show()
        $('.user_container').show()
    }
})