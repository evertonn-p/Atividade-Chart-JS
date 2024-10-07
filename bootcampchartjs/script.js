document.body.style.backgroundColor = '#F0F8FF';

const horarios = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
const temperaturas = [30, 29, 28, 25, 22, 23];
const umidades = [80, 82, 80, 85, 80, 83];

const graficoLinhas = new Chart(lineChart, {
    type: 'line',
    data: {
        labels: horarios,
        datasets: [
            {
                label: 'Temperatura',
                data: temperaturas,
                borderColor: 'purple',
            },
            {
                label: 'Umidade',
                data: umidades,
                borderColor: 'gray',
            }
        ]
    }
});

const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
const temperaturaMedia = [22, 24, 27, 23, 20, 18];
const umidadeMedia = [90, 89, 93, 87, 88, 82];

const graficoBarras = new Chart(barChart, {
    type: 'bar',
    data: {
        labels: meses,
        datasets: [
            {
                label: 'Temperatura Média',
                data: temperaturaMedia,
                backgroundColor: 'purple'
            },
            {
                label: 'Umidade Média',
                data: umidadeMedia,
                backgroundColor: 'gray'
            }
        ]
    }
});
