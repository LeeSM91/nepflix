var chart5arr = [2, 3, 3, 5, 2, 3];

//A-12 정지사유 차트

// 컨텍스트
var ctx = document.getElementById("myChart5").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주고, 
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/


var myChart_5 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["기기 이상", "품목 변경", "작업자 미숙", "원자재 교체", "끼임 발생", "에어 공급 부족"],
        datasets: [{
            label: '가동률(%)',
            data: chart5arr,
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
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "black"
                }
            }

        },
        scales: {
            X: {
                ticks: {
                    color: "black",
                    fontSize: 10
                }
            },
            Y: {
                grid: {
                    drawBorder: false,
                    color: "gray"
                    },
                ticks: {
                    color: "black",
                    fontSize: 14,
                }
            }


        }


    }
});