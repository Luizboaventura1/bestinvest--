// Opcoes de investimento do usuario
const tesouroDireto = [
    {
        nome:'TESOURO PREFIXADO',
        investimentoMinimo: 35.43,
        rentabilidade: 12.33,
        grauRiscoNome: 'Baixo',
        grauRisco: 'risco_muitobaixo',
        historicoRentabilidade: [3,60,8,10,6,12],
        id: 0
    },
    {
        nome:'TESOURO IPCA+',
        investimentoMinimo: 55.30,
        rentabilidade: 6.17,
        grauRiscoNome: 'Baixo',
        grauRisco: 'risco_baixo',
        historicoRentabilidade: [10,70,2,60,20,6],
        id: 1
    },
    {
        nome:'TESOURO SELIC',
        investimentoMinimo: 127.25,
        rentabilidade:  0.09,
        grauRiscoNome: 'Baixo',
        grauRisco: 'risco_baixo',
        historicoRentabilidade: [20,30,8,40,6,9],
        id: 2
    }
]

const rendaFixa = [
    {
        nome:'LCI Dl LIQUIDEZ 90 DIAS',
        investimentoMinimo: 50,
        rentabilidade: 9,
        grauRiscoNome: 'Muito baixo',
        grauRisco: 'risco_muitobaixo',
        historicoRentabilidade: [45,12,78,44,60,89],
        id: 0
    }
]

const acoes = [
    {
        nome:'Select',
        investimentoMinimo: 40,
        rentabilidade: 7,
        historicoRentabilidade: [23,78,12,32,56,7],
        id: 0,
        grauRiscoNome: 'Baixo',
        grauRisco: 'risco_baixo'
    }
]


tesouroDireto.map((value)=> {
    $('.centralizar_content').append(`
    <div class="div_investir_box display_tesouro_direto" onclick="selectTesouroDireto(${value.id})">
    <div class="grau_risco ${value.grauRisco}">
        <!-- Grau de risco -->
    </div><!--grau_risco-->
    <div class="bloco_info_investir">
        <div class="box_info_investir1">
            <h1>${value.nome}</h1>
        </div><!--box_info_investir1-->
        <div class="barra_hr"></div>
        <div class="box_info_investir2">
            <div class="inv_minimo">
                <div class="bloco_span_wraper">
                    <span class="span_info_investir">Inv minimo</span>
                    <span class="info_valor">R$ ${formatPreco(value.investimentoMinimo)}</span>
                </div>
            </div><!--inv_minimo-->
            <div class="rentabilidade_box">
                <div class="bloco_span_wraper">
                    <span class="span_info_investir">Em 12 meses</span>
                    <span id="rentabilidade_grau" class="info_valor">${formatPreco(value.rentabilidade)}%</span>
                </div>
            </div><!--rentabilidade_box-->
        </div><!--box_info_investir2-->
    </div><!--bloco_info_investir-->
</div><!--div_investir_box-->`)
})

rendaFixa.map((value)=> {
    $('.centralizar_content').append(`
    <div class="div_investir_box display_renda_fixa" onclick="selectRendaFixa(${value.id})">
    <div class="grau_risco ${value.grauRisco}">
        <!-- Grau de risco -->
    </div><!--grau_risco-->
    <div class="bloco_info_investir">
        <div class="box_info_investir1">
            <h1>${value.nome}</h1>
        </div><!--box_info_investir1-->
        <div class="barra_hr"></div>
        <div class="box_info_investir2">
            <div class="inv_minimo">
                <div class="bloco_span_wraper">
                    <span class="span_info_investir">Inv minimo</span>
                    <span class="info_valor">R$ ${formatPreco(value.investimentoMinimo)}</span>
                </div>
            </div><!--inv_minimo-->
            <div class="rentabilidade_box">
                <div class="bloco_span_wraper">
                    <span class="span_info_investir">Em 12 meses</span>
                    <span id="rentabilidade_grau" class="info_valor">${formatPreco(value.rentabilidade)}% do cdi</span>
                </div>
            </div><!--rentabilidade_box-->
        </div><!--box_info_investir2-->
    </div><!--bloco_info_investir-->
</div><!--div_investir_box-->`)
})

acoes.map((value)=> {
    $('.centralizar_content').append(`
    <div class="div_investir_box display_acoes" onclick="selectAcoes(${value.id})">
    <div class="grau_risco ${value.grauRisco}">
        <!-- Grau de risco -->
    </div><!--grau_risco-->
    <div class="bloco_info_investir">
        <div class="box_info_investir1">
            <h1>${value.nome}</h1>
        </div><!--box_info_investir1-->
        <div class="barra_hr"></div>
        <div class="box_info_investir2">
            <div class="inv_minimo">
                <div class="bloco_span_wraper">
                    <span class="span_info_investir">Inv minimo</span>
                    <span class="info_valor">R$ ${formatPreco(value.investimentoMinimo)}</span>
                </div>
            </div><!--inv_minimo-->
            <div class="rentabilidade_box">
                <div class="bloco_span_wraper">
                    <span class="span_info_investir">Em 12 meses</span>
                    <span id="rentabilidade_grau" class="info_valor">${formatPreco(value.rentabilidade)}%</span>
                </div>
            </div><!--rentabilidade_box-->
        </div><!--box_info_investir2-->
    </div><!--bloco_info_investir-->
</div><!--div_investir_box-->`)
})


// Tabela de investimentos

function tabelaInv () {
    let tabela = $(`
    <div class="fundo_popup_select">
        <div class="container_select_investimento">
            <div class="fechar_select_inv">
                
                <img src="../images/icone-closepopup.png" alt="Icone fechar Popup">
     
            </div><!--fechar_select_inv-->
            <h1 id="nome_investimento">
                <!-- Nome do investimento -->
            </h1>
            <h2>
                Quanto você quer investir?
            </h2>
            <div class="valor_investir">
                <p>R$</p><input type="number" class="valor-user-investir" placeholder="valor">
            </div><!--valor_investir-->
            <div class="container_grafico">
                <div class="box_top">
                    <!-- Barra grafico -->
                </div>
                <div class="box_bottom">
                    <!-- Meses -->
                </div>
            </div>
            <div class="lista_dados_inv">
                <ul>
                    <li class="valor_minimo_inv">valor min</li>
                    <li class="grau_risco_inv">risco</li>
                    <li class="rentabilidade_inv">rentabilidade</li>
                </ul>
                <ul>
                    <li class="valor_minimo_inv" id="valor_minimo">0</li>
                    <li class="grau_risco_inv" id="grau_risco">0</li>
                    <li class="rentabilidade_inv" id="rentabilidade_inv">0</li>
                </ul>
            </div><!--lista_dados_inv-->
            <div class="container_button_confirmar">
                <button type="submit" id="button_confirmar_inv">Confirmar</button>
            </div><!--container_button_confirmar-->
            </div><!--container_select_investimento-->
            </div>
        `)
    tabela.hide()
    $('body').append(tabela)
    tabela.fadeIn()
}

//  Botao de cada lista de investimento

function clickOpcaoInvestimento(){
    $('#clickTesouroDireto').css('background-color','#ff9900')
    $('.display_renda_fixa').hide()
    $('.display_acoes').hide()

    let btnRendaFixa = $('.display_renda_fixa')
    let btnTesouroDireto = $('.display_tesouro_direto')
    let btnAcoes = $('.display_acoes')

    $('#clickTesouroDireto').click(function(){{
        btnRendaFixa.hide()
        btnAcoes.hide()
        btnTesouroDireto.show()

        $('#clickTesouroDireto').css('background-color','#ff9900')
        $('#clickAcoes').css('background-color','white')
        $('#clickRendaFixa').css('background-color','white')
    }})

    $('#clickRendaFixa').click(function(){
        btnAcoes.hide()
        btnTesouroDireto.hide()
        btnRendaFixa.show()

        $('#clickTesouroDireto').css('background-color','white')
        $('#clickAcoes').css('background-color','white')
        $('#clickRendaFixa').css('background-color','#ff9900')
    })

    $('#clickAcoes').click(function(){
        btnTesouroDireto.hide()
        btnRendaFixa.hide()
        btnAcoes.show()

        $('#clickTesouroDireto').css('background-color','white')
        $('#clickAcoes').css('background-color','#ff9900')
        $('#clickRendaFixa').css('background-color','white')
    })
}

clickOpcaoInvestimento()

// Zerar as informacoes

function displayUnico() {
    $('.valor_minimo_inv').css('display','none')
    $('.grau_risco_inv').css('display','none')
    $('.liquidez_inv').css('display','none')
    $('.rentabilidade_inv').css('display','none')
    $('.imposto_inv').css('display','none')
}

displayUnico()

function resetarValorInvestimento () {
    $('#nome_investimento').text('')
    $('#valor_minimo').text(0)
    $('#grau_risco').text(0)
    $('#liquidez').text(0)
    $('#rentabilidade_inv').text(0)
    $('#imposto_inv').text('')
}

// Desabilitar Botao

function disableButton() {
    $('#button_confirmar_inv').css('background-color','rgb(224, 224, 224)')
    $('#button_confirmar_inv').css('color','rgb(138, 138, 138)')
    

    if(!$('#button_confirmar_inv').disabled){

        // Desabilita o botao
        $('#button_confirmar_inv').prop('disabled', true);
    }


    setTimeout(function(){
        $('#button_confirmar_inv').css('background-color','rgb(255, 128, 0)')
        $('#button_confirmar_inv').css('color','white')

        setTimeout(function(){
            if(!$('#button_confirmar_inv').disabled){
                // Habilitar o botao
                $('#button_confirmar_inv').prop('disabled', false);
            }
        },200)
    },3200)
}

// Tipos de investimentos
function selectTesouroDireto(id) {
    tabelaInv()

    grafico(tesouroDireto,id)
    resetarValorInvestimento()


    // Fechar popup tabela
    buttonFlecharPopup()
    verificarFecharPopup()

    //  Informacoes
    $('.valor_minimo_inv').css('display','block')
    $('.grau_risco_inv').css('display','block')
    $('.rentabilidade_inv').css('display','block')


    $('#nome_investimento').text(`${tesouroDireto[id].nome}`)
    $('#valor_minimo').text(`R$ ${tesouroDireto[id].investimentoMinimo.toFixed(2).replace('.',',')}`)
    $('#grau_risco').text(`${tesouroDireto[id].grauRiscoNome}`)
    $('#rentabilidade_inv').text(`${tesouroDireto[id].rentabilidade}%`)


    // Dados da conta e de investimentos
    let saldoConta = parseFloat(localStorage.getItem('saldoConta'))


    $('#button_confirmar_inv').click(function(){
        let valorInput = $('.valor-user-investir').val()
        if(parseFloat(valorInput) < tesouroDireto[id].investimentoMinimo){
            popUpTransacaoErro()
            disableButton()
        }
        else if(
            parseFloat(valorInput) >= tesouroDireto[id].investimentoMinimo 
            && parseFloat(valorInput) <= parseFloat(saldoConta)) {
            popUpTransacao()
            disableButton()

            saldoConta = parseFloat(saldoConta) - parseFloat(valorInput)

            extratoConta('Aplicacao fundos',valorInput)
            atualizarSaldo(saldoConta)

            adicionarAplicacao(tesouroDireto[id].nome,parseFloat(valorInput),tesouroDireto[id].rentabilidade)
            olhoMostrarSaldo()

        }
        else if(valorInput == 0){
            popUpTransacaoErro()
            disableButton()
        }
        else if(parseFloat(valorInput) > parseFloat(saldoConta)) {
            popUpTransacaoErro()
            disableButton()
        }
    })
}


function selectRendaFixa(id) {
    tabelaInv()

    resetarValorInvestimento()
    grafico(rendaFixa,id)


    // Fechar popup tabela
    buttonFlecharPopup()
    verificarFecharPopup()


    $('#valor_minimo').text(`R$ ${rendaFixa[id].investimentoMinimo.toFixed(2).replace('.',',')}`)
    $('.valor_minimo_inv').css('display','block')
    $('.grau_risco_inv').css('display','block')
    $('.rentabilidade_inv').css('display','block')


    $('#nome_investimento').text(`${rendaFixa[id].nome}`)
    $('#valor_minimo').text(`R$ ${rendaFixa[id].investimentoMinimo.toFixed(2).replace('.',',')}`)
    $('#grau_risco').text(`${rendaFixa[id].grauRiscoNome}`)
    $('#rentabilidade_inv').text(`${rendaFixa[id].rentabilidade}% do cdi`)


    // Dados da conta e de investimentos
    let saldoConta = parseFloat(localStorage.getItem('saldoConta'))

    $('#button_confirmar_inv').click(function(){
        let valorInput = $('.valor-user-investir').val()
        if(parseFloat(valorInput) < rendaFixa[id].investimentoMinimo){
            popUpTransacaoErro()
            disableButton()
        }
        else if(parseFloat(valorInput) >= rendaFixa[id].investimentoMinimo && parseFloat(valorInput) <= parseFloat(saldoConta)) {
            popUpTransacao()
            disableButton()

            saldoConta = parseFloat(saldoConta) - parseFloat(valorInput)

            extratoConta('Aplicacao fundos',valorInput)
            atualizarSaldo(saldoConta)

            adicionarAplicacao(rendaFixa[id].nome,parseFloat(valorInput),rendaFixa[id].rentabilidade)
            olhoMostrarSaldo()
        }
        else if(valorInput == 0){
            popUpTransacaoErro()
            disableButton()

        }

    })
}


function selectAcoes(id) {
    tabelaInv()

    resetarValorInvestimento()
    grafico(acoes,id)

    // Fechar popup tabela
    buttonFlecharPopup()
    verificarFecharPopup()

    $('#valor_minimo').text(`R$ ${acoes[id].investimentoMinimo.toFixed(2).replace('.',',')}`)
    $('.valor_minimo_inv').css('display','block')
    $('.grau_risco_inv').css('display','block')
    $('.rentabilidade_inv').css('display','block')


    $('#nome_investimento').text(`${acoes[id].nome}`)
    $('#valor_minimo').text(`R$ ${acoes[id].investimentoMinimo.toFixed(2).replace('.',',')}`)
    $('#grau_risco').text(`${acoes[id].grauRiscoNome}`)
    $('#rentabilidade_inv').text(`${acoes[id].rentabilidade}%`)


    // Dados da conta e de investimentos
    let saldoConta = parseFloat(localStorage.getItem('saldoConta'))


    $('#button_confirmar_inv').click(function(){
        let valorInput = $('.valor-user-investir').val()
        if(parseFloat(valorInput) < acoes[id].investimentoMinimo){
            popUpTransacaoErro()
            disableButton()
        }
        else if(parseFloat(valorInput) >= acoes[id].investimentoMinimo && parseFloat(valorInput) <= parseFloat(saldoConta)) {
            popUpTransacao()
            disableButton()

            saldoConta = parseFloat(saldoConta) - parseFloat(valorInput)

            extratoConta('Aplicacao fundos',valorInput)
            atualizarSaldo(saldoConta)

            adicionarAplicacao(acoes[id].nome,parseFloat(valorInput),acoes[id].rentabilidade)
            olhoMostrarSaldo()
        }
        else if(valorInput == 0){
            popUpTransacaoErro()
            disableButton()

        }
    })
}

