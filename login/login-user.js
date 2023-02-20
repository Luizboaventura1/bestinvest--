
let contaList = JSON.parse(localStorage.getItem('contaList')) ? JSON.parse(localStorage.getItem('contaList')) : []

let tokenConta = localStorage.getItem('tokenConta') ? localStorage.getItem('tokenConta') : ''


$('#cadastro').click(function(){

    let nome = $('#inputCadastroNome').val()
    let gmail = $("#inputCadastroEmail").val()
    let senha = $('#inputCadastroSenha').val()

    const user = {
        nome: nome,
        gmail: gmail,
        senha: senha
    }
    let gmailLista

    if(contaList.length == 0){
        gmailLista = ''
    }else {
        gmailLista = contaList.find(function(gmail){
            return gmail === gmail
        })
    }

    if(gmailLista.gmail == gmail){
        avisoForm('Email existente!')
    }
    else if(gmailLista != gmail && nome != '' && senha != ''){
        contaList.push(user)
        localStorage.setItem('contaList',JSON.stringify(contaList))
        location.href = '../bestinvest.html'

        tokenConta = 'token'
        localStorage.setItem('tokenConta',JSON.stringify(tokenConta))
    }
    else if(gmail == '' && senha == '' && nome == ''){
        avisoForm('Campo vazio!')
    }
    else if(gmail == '' || senha == '' || nome == '') {
        avisoForm('Campo vazio!')
    }
    else if(gmailLista == '' && gmail != '' && nome != '' && senha != '') {
        contaList.push(user)
        localStorage.setItem('contaList',JSON.stringify(contaList))
        location.href = '../bestinvest.html'

        localStorage.setItem('tokenConta',JSON.stringify(tokenConta))
    }
})


$('#login').click(function(){
    let gmail = $("#inputLoginEmail").val()
    let senha = $('#inputLoginSenha').val()

    let gmailLista
    let senhaLista

    // Pegar gmail e senha da lista
    if(contaList.length == 0){
        gmailLista = ''
        senhaLista = ''
    }else {
        gmailLista = contaList.find(function(gmail){
            return gmail === gmail
        })
        senhaLista = contaList.find(function(senha){
            return senha === senha
        })
    }

    // Verificação
    if(gmailLista.gmail == gmail && senhaLista.senha == senha){
        location.href = '../bestinvest.html'
    }
    else if(gmail == '' && senha == '') {
        avisoForm('Campo vazio!')
    }
    else if(gmailLista.gmail != gmail || senhaLista.senha != senha){
        avisoForm('Campo inválido!')
    }
    else if(gmailLista.gmail != gmail && senhaLista.senha == senha) {
        avisoForm('Informações inválidas!')
    }
})




$("#button_investir").click(function(){
    if(tokenConta == ''){
        avisoForm('Crie uma conta!')
    }else {
        location.href = '../bestinvest.html'
    }
})


function avisoForm (msg) {
   $('.popup_aviso_form').remove()


    let aviso = $(`
    <div class="popup_aviso_form">
        <span>${msg}</span>
    </div>`)

    aviso.hide()
    $("body").append(aviso)
    aviso.stop().fadeIn()

    setTimeout(function(){
        aviso.stop().fadeOut(200)
        setTimeout(function(){aviso.remove()},500)
    },3000)
}