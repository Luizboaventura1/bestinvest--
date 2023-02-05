let chart = document.querySelector('.myChart').getContext('2d')

const labels = [
    ``,
    '',
    '',
    '',
    '',
    ''
]

const data = {
    labels,
    datasets: [{
        data: [6,4,3,9,3,],
        label: 'Rentabilidade %',
        fill: true,
        backgroundColor: '#00ff22'
    }]
}

const config = {
    type: 'bar',
    data:data,
    options: {
        responsive: true,
        scales: {
            x: {
                grid: {
                    color: 'white',
                }
            },
            y: {
                grid: {
                    color: 'white'
                }
            }
        }
    }
}


const myChart = new Chart(chart,config)




let months=["January","February","March","April","June", "July", "August", 
"September", "October", "November", "December"];


let currentMonth = new Date().getMonth()
currentMonth += 1

let ultimosSeisMeses = months.slice(currentMonth-6).concat(months.slice(0,currentMonth))
