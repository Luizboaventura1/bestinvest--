
// Pegar os ultimos seis meses

let months=["Jan","Feb","Mar","Abr","Jun", "Jul", "Ago", 
"Sep", "Oct", "Nov", "Dez"];


let currentMonth = new Date().getMonth()
currentMonth += 1

let ultimosSeisMeses = months.slice(currentMonth-6).concat(months.slice(0,currentMonth))


for(let i = 0;i< ultimosSeisMeses.length;i++){
    $('.box_bottom').append(`<div class="data">${ultimosSeisMeses[i]}</div>`)
    $('.box_top').append(`<div class="barra"></div>`)
}

let valorHeight = 0
function grafico(value){
    let vl = value
    for(let i = 0;i < (tesouroDireto[vl].historicoRentabilidade).length;i++){
        valorHeight = tesouroDireto[vl].historicoRentabilidade[i]
        $('.barra').css('transition','1s')
        $(`.barra:nth-of-type(${i + 1})`).css('height',valorHeight+30+'%')
    }
}
