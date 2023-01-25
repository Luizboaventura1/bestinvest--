// Opcoes de investimento do usuario



const tesouroDireto = [
    {
        nome:'TESOURO PREFIXADO',
        investimentoMinimo: 35.43,
        rentabilidade: 12.33,
        grauRiscoNome: 'Baixo',
        grauRisco: 'risco_baixo',
        imposto: 'isento após 30 dias',
        id: 0
    },
    {
        nome:'TESOURO PREFIXADO',
        investimentoMinimo: 34.89,
        rentabilidade: 12.44,
        grauRiscoNome: 'Médio',
        grauRisco: 'risco_medio',
        imposto: 'isento após 30 dias',
        id: 1
    }
]

const rendaFixa = [
    {
        nome:'LCI Dl LIQUIDEZ 90 DIAS',
        investimentoMinimo: 50,
        rentabilidade: 89,
        grauRiscoNome: 'Muito baixo',
        grauRisco: 'risco_muitobaixo',
        impostodeRenda: 'Isento',
        liquidez: 'Após 90 dias',
        id: 0
    }
]

const acoes = [
    {
        nome:'Select',
        investimentoMinimo: 0,
        rentabilidade: 0,
        taxadeAdministracao: 0,
        cashBack: 0,
        id: 0,
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
                    <span class="info_valor">R$ ${value.investimentoMinimo.toFixed(2).replace('.',',')}</span>
                </div>
            </div><!--inv_minimo-->
            <div class="rentabilidade_box">
                <div class="bloco_span_wraper">
                    <span class="span_info_investir">Em 12 meses</span>
                    <span id="rentabilidade_grau" class="info_valor">${value.rentabilidade}%</span>
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
                    <span class="info_valor">R$ ${value.investimentoMinimo.toFixed(2).replace('.',',')}</span>
                </div>
            </div><!--inv_minimo-->
            <div class="rentabilidade_box">
                <div class="bloco_span_wraper">
                    <span class="span_info_investir">Em 12 meses</span>
                    <span id="rentabilidade_grau" class="info_valor">${value.rentabilidade}% do cdi</span>
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
                    <span class="info_valor">R$ ${value.investimentoMinimo.toFixed(2).replace('.',',')}</span>
                </div>
            </div><!--inv_minimo-->
            <div class="rentabilidade_box">
                <div class="bloco_span_wraper">
                    <span class="span_info_investir">Em 12 meses</span>
                    <span id="rentabilidade_grau" class="info_valor">${value.rentabilidade}%</span>
                </div>
            </div><!--rentabilidade_box-->
        </div><!--box_info_investir2-->
    </div><!--bloco_info_investir-->
</div><!--div_investir_box-->`)
})


//  Botao 

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

// Tabela de investimentos
function tabelaInv () {
    $('body').append(`
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
        <div class="lista_dados_inv">
            <ul>
                <li class="valor_minimo_inv">valor min</li>
                <li class="grau_risco_inv">risco</li>
                <li class="liquidez_inv">liquidez</li>
                <li class="rentabilidade_inv">rentabilidade</li>
                <li class="imposto_inv">imposto</li>
            </ul>
            <ul>
                <li class="valor_minimo_inv" id="valor_minimo">0</li>
                <li class="grau_risco_inv" id="grau_risco">0</li>
                <li class="liquidez_inv" id="liquidez">0</li>
                <li class="rentabilidade_inv" id="rentabilidade_inv">0</li>
                <li class="imposto_inv" id="imposto_inv">0</li>
            </ul>
        </div><!--lista_dados_inv-->
        <div class="container_button_confirmar">
            <button type="submit" id="button_confirmar_inv">Confirmar</button>
        </div><!--container_button_confirmar-->
    </div><!--container_select_investimento-->
 </div><!--fundo_popup_select-->`)
}

// Tipos de investimentos

function selectTesouroDireto(id) {
    resetarValorInvestimento()

    // Aparecer tabela
    tabelaInv()

    // Fechar popup tabela
    $('.fechar_select_inv > img').click(function(){
        $('.container_select_investimento').remove()
        $('.fundo_popup_select').remove()
    })

    $('.fundo_popup_select').click(function(){
        $('.fundo_popup_select').remove()
    })

    $('.container_select_investimento').click(function(e){
        e.stopPropagation()
    })

    //  Informacoes
    $('.valor_minimo_inv').css('display','block')
    $('.grau_risco_inv').css('display','block')
    $('.rentabilidade_inv').css('display','block')
    $('.imposto_inv').css('display','block')


    $('#nome_investimento').text(`${tesouroDireto[id].nome}`)
    $('#valor_minimo').text(`R$ ${tesouroDireto[id].investimentoMinimo.toFixed(2).replace('.',',')}`)
    $('#grau_risco').text(`${tesouroDireto[id].grauRiscoNome}`)
    $('#rentabilidade_inv').text(`${tesouroDireto[id].rentabilidade}%`)
    $('#imposto_inv').text(`${tesouroDireto[id].imposto}`)


    $('#button_confirmar_inv').click(function(){
        let valorInput = $('.valor-user-investir').val()
        if(parseFloat(valorInput) < tesouroDireto[id].investimentoMinimo){
            alert('Valor baixo')
        }else {
            alert('Valor aceito')
        }
    })
}

function selectRendaFixa(id) {
    resetarValorInvestimento()


    $('#valor_minimo').text(`R$ ${rendaFixa[id].investimentoMinimo.toFixed(2).replace('.',',')}`)

    $('.valor_minimo_inv').css('display','block')
    $('.grau_risco_inv').css('display','block')
    $('.rentabilidade_inv').css('display','block')
    $('.imposto_inv').css('display','block')
    $('.liquidez_inv').css('display','block')


    $('#nome_investimento').text(`${rendaFixa[id].nome}`)
    $('#valor_minimo').text(`R$ ${rendaFixa[id].investimentoMinimo.toFixed(2).replace('.',',')}`)
    $('#grau_risco').text(`${rendaFixa[id].grauRiscoNome}`)
    $('#rentabilidade_inv').text(`${rendaFixa[id].rentabilidade}% do cdi`)
    $('#imposto_inv').text(`${rendaFixa[id].impostodeRenda}`)
    $('#liquidez').text(`${rendaFixa[id].liquidez}`)
}

function selectAcoes(id) {
    resetarValorInvestimento()
    $('.fundo_popup_select').fadeIn()
    $('.container_select_investimento').fadeIn()
}

