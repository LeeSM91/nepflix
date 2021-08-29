var ctx = document.getElementById('QualityChart')

var QualityChart = new Chart(ctx,  {
    type: 'line',
    data: {
        labels: ['1분기', '2분기', '3분기', '4분기'],
        datasets: [{
            label: 'A-01',
            data: [0.02, 0.03, 0.09, 0.07],
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
            data: [0.05, 0.02, 0.06, 0.09],
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
            data: [0.01, 0.04, 0.05, 0.05],
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