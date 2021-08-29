

//직선그래프//
var chart1arr = [0, 10, 5, 2, 20, 30,32];
var chart2arr = [80, 88, 95, 90, 86, 99];
var chart3arr = [80, 70, 89, 96, 95, 98];
var chart4arr = [12, 19, 3, 5, 2, 3];

var ctx = document.getElementById('myChart1');
var myChart_1 = new Chart(ctx, {

    type: 'line',


    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June','July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
            label: '월별 생산액(억 원)',
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: chart1arr,
            fill: false
        }]
    },


    options: {
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
                    font: { size: 10 }
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





















//막대차트

// 컨텍스트
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
        onClick: function clickHandler(evt) {           //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함   
            const points = myChart_2.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        
            if (points.length) {
                const firstPoint = points[0];   
                var label = myChart_2.data.labels[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
                var value = myChart_2.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기
                console.log(label);     //sm. 콘솔로 값이 제대로 가져와지는지 확인
                console.log(value);

                
                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))  //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
                myModal.show()                                                              //sm. 모달 실행
                
            }}
        ,

            

        
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
                    font: { size: 10 }
                }
            },
            Y: {
                grid: {
                    drawBorder: false,
                    color: "gray"
                    },
                ticks: {
                    color: "white",
                    font: { size: 10 },
                }
            }


        }


    }
});


// 우선 컨텍스트를 가져옵니다. 
var ctx = document.getElementById("myChart3").getContext('2d');
/*
- Chart를 생성
- ctx를 첫번째 argument로 넘겨주
- 두번째 argument로 그림을 그릴때 필요한 요소들을 모두 넘겨줍
*/
var myChart_3 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["B-15", "YUH-31", "POP-10", "KPO-01", "BZO-123", "BPD-12"],
        datasets: [{
            label: '가동률(%)',
            data: chart3arr,
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
        onClick: function clickHandler(evt) {           //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함   
            const points = myChart_3.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        
            if (points.length) {
                const firstPoint = points[0];   
                var label = myChart_3.data.labels[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
                var value = myChart_3.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기
                console.log(label);     //sm. 콘솔로 값이 제대로 가져와지는지 확인
                console.log(value);
                var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))  //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
                myModal.show()                                                              //sm. 모달 실행
                
            }}
        ,

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

//sm.원형차트 테스트 시작
var ctx = document.getElementById("myChart4").getContext('2d');

var myChart_4 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["B-15", "A-12", "BB-03", "BG-304", "BG-306", "BG-098"],
        datasets: [{
            label: '비율',
            data: chart4arr,
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
                    color: "rgba(255, 255, 255, 1)"
                }
            }

        },
        scales: {

            Y: {
                ticks: {
                    color: "white",
                    fontSize: 14,
                }
            }


        }


    }
});
