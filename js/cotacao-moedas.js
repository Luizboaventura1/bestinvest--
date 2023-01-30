
// Cotacoes de criptomoedas e outras moedas


let url = 'https://economia.awesomeapi.com.br/last/'

let moedas = 'USD-BRL,EUR-BRL,BTC-BRL,ETH-BRL'


fetch(url + moedas)
    .then(function(response){
        return response.json()
        .then((function(data){
            const usdBRL = data.USDBRL
            const btcBRL = data.BTCBRL
            const ethBRL = data.ETHBRL

            $("#moedaUSDBRL").text(parseFloat(usdBRL.bid).toFixed(3).replace('.',','))
            $('#horarioUSD').text(usdBRL.create_date.split(' ')[1])

            $("#moedaBTCBRL").text(parseFloat(btcBRL.bid).toFixed(3).replace('.',','))
            $('#horarioBTC').text(btcBRL.create_date.split(' ')[1])

            $("#moedaETHBRL").text(parseFloat(ethBRL.bid).toFixed(3).replace('.',','))
            $('#horarioETH').text(ethBRL.create_date.split(' ')[1])
        }))
})

const simboloBR = 'R$ '