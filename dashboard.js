document.addEventListener('DOMContentLoaded', function() {
    const ctxPrefeito = document.getElementById('chartPrefeito').getContext('2d');
    const ctxVereador = document.getElementById('chartVereador').getContext('2d');

    chartPrefeito = new Chart(ctxPrefeito, {
        type: 'bar',
        data: {
            labels: ['Hebert', 'Ribeiro'],
            datasets: [{
                label: 'Votos para Prefeito',
                data: [0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    chartVereador = new Chart(ctxVereador, {
        type: 'bar',
        data: {
            labels: ['Barone', 'Bidu', 'Monteiro', 'João Fera'],
            datasets: [{
                label: 'Votos para Vereador',
                data: [0, 0, 0, 0],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
