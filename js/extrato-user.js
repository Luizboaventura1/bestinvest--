
// Extrato de cada transacao do usuario




function tabelaExtrato() {
    let tabelaExtrato = $(`
    <div class="fundo_popup_select">
    <div class="extrato_user">
        <div class="fechar_select_inv" id="close_pop">
            
            <img src="./images/icone-closepopup.png" alt="Icone fechar Popup">

        </div><!--fechar_select_inv-->
        <h1>Extrato</h1>
        <div class="container_extrato_user">

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
    closeBtnExtrato()
    

   $('.fundo_popup_select').click(function(){
        $('.fundo_popup_select').fadeOut(300)
        setTimeout(function(){
            $('.fundo_popup_select').remove()
        },300)
    })

    $('.extrato_user').click(function(e){
        e.stopPropagation()
    })

    mostrarExtratos()
})



let listaExtrato = JSON.parse(localStorage.getItem('listaExtrato')) ? JSON.parse(localStorage.getItem('listaExtrato')) : []


//Para ordenar os extratos da forma correta
listaExtrato.reverse()


// Criar Extrato
function extratoConta (tipoTransferencia,valor) {
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getMonth() + 1
    let ano = data.getFullYear()
    let horas = data.getHours()
    let minutos = data.getMinutes()

    if(dia < 10) dia = '0'+dia
    if(mes < 10) mes = '0'+mes
    if(horas < 10) horas = '0'+horas
    if(minutos < 10) minutos = '0'+minutos

    let dataTransferencia = `${dia}/${mes}/${ano}, às ${horas}h${minutos}`


    let extratoUser = {
        transferencia: tipoTransferencia,
        valorTransferencia: `R$ ${formatPreco(valor)}`,
        horarioTransferencia: dataTransferencia
    }


    listaExtrato.push(extratoUser)

    localStorage.setItem('listaExtrato',JSON.stringify(listaExtrato))

}


function mostrarExtratos () {
    
    for(let i = 0;i <= listaExtrato.length;i++ ){
        $('.container_extrato_user').append(`
            <div class="valor_extrato_box">
                <span class="nome_transacao">${listaExtrato[i].transferencia}</span>
                <span class="valor_transferencia">${listaExtrato[i].valorTransferencia}</span>
                <span class="data_transacao">${listaExtrato[i].horarioTransferencia}</span>
            </div>
        `)   
    }
}
