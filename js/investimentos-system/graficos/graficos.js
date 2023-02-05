let chart = document.querySelector('.myChart').getContext('2d')

//let values = [120.000,150.000,120.000,160.000]

const labels = [
    'Ago',
    'Set',
    'Out',
    'Nov',
    'Dez',
    'Jan',
    'Fev'

]

const data = {
    labels,
    datasets: [{
        data: [120000,130000,110000,292922,100000,50000],
        label: 'Rentabilidade',
        fill: true,
        backgroundColor: '#00ff22'
    }]
}
chart.canvas.style.backgroundColor = 'white'
const config = {
    type: 'bar',
    data,
    options: {
        responsive: true,
    }
}

const myChart = new Chart(chart,config)

