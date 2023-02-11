
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
        return false
    }
    else if(gmailLista != gmail){
        contaList.push(user)
        localStorage.setItem('contaList',JSON.stringify(contaList))
        location.href = '../bestinvest.html'

        tokenConta = 'token'
        localStorage.setItem('tokenConta',JSON.stringify(tokenConta))
    }else if(gmailLista == '' && gmail != '') {
        contaList.push(user)
        localStorage.setItem('contaList',JSON.stringify(contaList))
        location.href = '../bestinvest.html'

        localStorage.setItem('tokenConta',JSON.stringify(tokenConta))
    }
})


$('#login').click(function(){
    let gmail = $("#inputLoginEmail").val()

    let gmailLista

    if(contaList.length == 0){
        gmailLista = ''
    }else {
        gmailLista = contaList.find(function(gmail){
            return gmail === gmail
        })
    }

    if(gmailLista.gmail == gmail){
        location.href = '../bestinvest.html'
    }
})




$("#button_investir").click(function(){
    if(tokenConta == ''){
        alert('Crie uma conta')
    }else {
        location.href = '../bestinvest.html'
    }
})