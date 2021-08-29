var chart2arr = [80, 88, 95, 90, 86, 99];


var ctx = document.getElementById("myChart2").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/


var myChart_2 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["A-12", "A-41", "BB-03", "BG-304", "BG-306", "BG-098"],
        datasets: [{
            label: '가동률(%)',
            data: chart2arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        onClick: function clickHandler(evt) {
            const points = myChart_2.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        
            if (points.length) {
                const firstPoint = points[0];
                var label = myChart_2.data.labels[firstPoint.index];
                var value = myChart_2.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];
                console.log(label);
                console.log(value);
                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))
                myModal.show()
                
            }
        },
            

        
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "rgba(255, 255, 255, 1)"
                }
            }

        },
        scales: {
            X: {
                ticks: {
                    color: "rgba(255, 255, 255, 1)",
                    fontSize: 10
                }
            },
            Y: {
                grid: {
                    drawBorder: false,
                    color: "gray"
                    },
                ticks: {
                    color: "white",
                    fontSize: 14,
                }
            }


        }


    }
});