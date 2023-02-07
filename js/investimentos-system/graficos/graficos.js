
// Pegar os ultimos seis meses


function grafico(nomeFundo,value){
    let months=["Jan","Feb","Mar","Abr","Jun", "Jul", "Ago", 
    "Sep", "Oct", "Nov", "Dez"];


    let currentMonth = new Date().getMonth()
    currentMonth += 1

    let ultimosSeisMeses = months.slice(currentMonth-6).concat(months.slice(0,currentMonth))


    let valorHeight = 0

    for(let i = 0;i< ultimosSeisMeses.length;i++){
        $('.box_bottom').append(`<div class="data">${ultimosSeisMeses[i]}</div>`)
        $('.box_top').append(`<div class="barra"></div>`)
    }

    let vl = value

    for(let i = 0;i < (nomeFundo[vl].historicoRentabilidade).length;i++){
        valorHeight = nomeFundo[vl].historicoRentabilidade[i]
        $('.barra').css('transition','1s')
        $(`.barra:nth-of-type(${i + 1})`).css('height',valorHeight+30+'%')
    }
}
