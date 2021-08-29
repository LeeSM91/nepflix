var ctx = document.getElementById('ProduceChart')

var ProduceChart = new Chart(ctx,  {
    type: 'bar',
    data: {
        labels: ['1분기', '2분기', '3분기', '4분기'],
        datasets: [{
            label: 'A-01',
            data: [2500, 2000, 3000, 2800],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        },
        {
          label: 'A-02',
            data: [3000, 2500, 2500, 3200],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        },
        {
          label: 'A-03',
            data: [1500, 2000, 2500, 2800],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)'
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