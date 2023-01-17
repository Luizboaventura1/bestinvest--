$(function(){

    const criptoMoedas = [
        {
            imagem: 'img-logo-eua.png',
            nome: 'USD',
            cotacao: `<span id="moedaUSDBRL"></span>`,
            horarioCotacao: `<span id="horarioUSD"></span>`
        },
        {
            imagem: 'bitcoin-logo.webp',
            nome: 'BitCoin',
            cotacao: `<span id="moedaBTCBRL"></span>`,
            horarioCotacao: `<span id="horarioBTC"></span>`
        },
        {
            imagem: 'ethereum-gold.png',
            nome: 'Ethereum',
            cotacao: `<span id="moedaETHBRL"></span>`,
            horarioCotacao: `<span id="horarioETH"></span>`
        }/*
        {
            imagem: 'logo-tether-1024.png',
            nome: 'Theter',
            cotacao: '1,000,4'
        },
        {
            imagem: 'bnb-logo.png',
            nome: 'BNB',
            cotacao: '243,00'
        },
        {
            imagem: 'usdcoin-logo.png',
            nome: 'USD Coin',
            cotacao: '1,000,50'
        }*/
    ]

    //Para achar a pasta
    let pastaCriptoLocal = 'js/images-cripto/'

    criptoDinamico = () => {
        criptoMoedas.map((value)=> {
            $('.section_cripto').append(`
            <div class="container_cripto_single">
                <div class="bloco_wraper_cripto">
                    <div class="logo_cripto">
                        <img src="${pastaCriptoLocal}${value.imagem}" alt="Logo">
                    </div>
                    <div class="bloco_cripto">
                        <h1 class="nome_cripto_moeda">${value.nome}</h1>
                        <span class="cotacao_cripto">${simboloBR}${value.cotacao}</span>
                        <span class="atualizar_cotacao">Atualizado às ${value.horarioCotacao}</span>
                    </div>
                </div>
            </div>`)
        })
    }

    criptoDinamico()
})