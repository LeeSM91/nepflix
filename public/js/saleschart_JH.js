

//직선그래프//
var chart1arr = [15, 20, 20, 25, 25, 15,10, 30, 80, 20, 20, 35];
var chart1_1arr = [0, 5, 5, 0, 5, 5,0, 7, 3, 3, 1, 1];
var chart2arr = [20, 25, 55, 25, 37, 3, 2,8, 10, 130];
var chart3arr = [5, 16, 18, 10, 15, 6];
var chart4arr = [20, 25, 55, 25, 37];
var chart5arr = [2, 2, 1, 1, 1,3,1,1,3,1,3,1];
var chart6arr = [2, 2, 1, 4, 1,3,1,3,3,1,3,1];
var chart7arr = [10, 12, 1, 2, 3,2,8,3,7,1,1,1];
var chart8arr = [0, 0, 0,15, 0,0,0,8,0,0,2,0];
var chart9arr = [10, 0, 0, 17, 0,0,2,4,4,0,0,0];


var ctx = document.getElementById('myChart1');
var myChart_1 = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
            label: '채권회수율(억)',
            data: chart1arr,
            backgroundColor: [
                
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,255,255,1)'
                
            ],
            borderWidth: 1
        },
        {
            label: '미수금(억)',
            data: chart1_1arr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
                
            ],
            borderColor: [
                'rgba(255,255,255,1)'
            ],
            borderWidth: 1
        }
        
    ]
    },
    options: {

        onClick: function clickHandler(evt) {           //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함   
            const points = myChart_1.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        
            if (points.length) {
                const firstPoint = points[0];   
                var label = myChart_1.data.labels[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
                var value = myChart_1.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기
                console.log(label);     //sm. 콘솔로 값이 제대로 가져와지는지 확인
                console.log(value);

                
                var myModal = new bootstrap.Modal(document.getElementById('JanuaryModal'))  //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
                myModal.show()                                                              //sm. 모달 실행
                
            }

            
        }
        ,

        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "rgba(0, 0, 0, 1)"
                }
            }

        },
        scales: {
            X: {
                stacked: true,
                ticks: {
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: 10
                }
            },
            Y: {
                stacked: true,
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

var ctx = document.getElementById('myChart2');
var myChart_2 = new Chart(ctx, {

    type: 'bar',
    data: {
        labels: ["감속기","NICO 감속기","전자레버", "탄성커플링", "PTO", "사이트 트러스터", "조수기", "유압기기", "조타기", "기타"],
        datasets: [{
            label: '제품별 매출액',
            data: chart2arr,
            backgroundColor: [
                'rgba(240,157,157, 0.5)', //감속기
                'rgba(101,75,190, 0.5)',  //NICO 감속기
                'rgba(174,217,113, 0.5)',  //전자레버
                'rgba(226,135,173, 0.5)',  //탄성커플링
                'rgba(111,211,109, 0.5)', //PTO
                'rgba(181,88,191, 0.5)', //사이트 트러스터
                'rgba(123,200,207, 0.5)', //조수기
                'rgba(232,235,86, 0.5)', //유압기기
                'rgba(239,193,87, 0.5)',  //조타기
                'rgba(195,143,65, 0.5)',  // 기타
                
            ],
            borderColor: [
                'rgba(240,157,157, 1)', //감속기
                'rgba(101,75,190, 1)',  //NICO 감속기
                'rgba(174,217,113, 1)',  //전자레버
                'rgba(226,135,173, 1)',  //탄성커플링
                'rgba(111,211,109, 1)', //PTO
                'rgba(181,88,191, 1)', //사이트 트러스터
                'rgba(123,200,207, 1)', //조수기
                'rgba(232,235,86, 1)', //유압기기
                'rgba(239,193,87, 1)',  //조타기
                'rgba(195,143,65, 1)',  // 기타
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "rgba(0, 0, 0, 1)"
                    
                }
            }

        },
        scales: {
            xAxes: {
                ticks: {
                    color: "rgba(0, 0, 0, 1)",
                    fontSize: 10
                }
            },
            yAxes: {
                ticks: {
                    color: "black",
                    fontSize: 14,
                }
            }


        }


    }
});








//sm.원형차트 테스트 시작
var ctx = document.getElementById("myChart5").getContext('2d');

var myChart_5 = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["감속기","NICO 감속기","전자레버", "탄성커플링", "PTO"],
        datasets: [{
            
            data: chart4arr,
            backgroundColor: [
                'rgba(240,157,157, 0.5)', //감속기
                'rgba(101,75,190, 0.5)',  //NICO 감속기
                'rgba(174,217,113, 0.5)',  //전자레버
                'rgba(226,135,173, 0.5)',  //탄성커플링
                'rgba(111,211,109, 0.5)' //PTO
                
            ],
            borderColor: [
                'rgba(240,157,157, 1)', //감속기
                'rgba(101,75,190, 1)',  //NICO 감속기
                'rgba(174,217,113, 1)',  //전자레버
                'rgba(226,135,173, 1)',  //탄성커플링
                'rgba(111,211,109, 1)' //PTO
                
            ],
            borderWidth: 1
        }]
    },
    options: {
        
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: "rgba(0, 0, 0, 1)"
                }
            }

        },
        scales: {

            yAxes: {
                ticks: {
                    color: "black",
                    fontSize: 10,
                }
            }


        }


    }
});


// 라인차트


var ctx = document.getElementById("myChart6").getContext('2d');

var myChart_6 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
            {
            
            label: '감속기',
            data: chart5arr,
            fill: false,
            borderColor: 'rgb(240,157,157)',
            tension: 0.1,
            backgroundColor: 'rgb(240,157,157, 0.5)' //감속기
               
        },
        {
           
            label: 'NICO 감속기',
            data: chart6arr,
            fill: false,
            borderColor: 'rgb(101,75,190)',
            tension: 0.1,
            backgroundColor: 'rgb(101,75,190, 0.5)' //NICO 감속기

        },
        {
           
            label: '전자레버',
            data: chart7arr,
            fill: false,
            borderColor: 'rgb(174,217,113)',
            tension: 0.1,
            backgroundColor: 'rgb(174,217,113, 0.5)' //전자레버

        },
        {
           
            label: '탄성커플링',
            data: chart8arr,
            fill: false,
            borderColor: 'rgb(226,135,173)',
            tension: 0.1,
            backgroundColor: 'rgb(226,135,173, 0.5)' //탄성커플링

        },
        {
           
            label: 'PTO',
            data: chart9arr,
            fill: false,
            borderColor: 'rgb(111,211,109)',
            tension: 0.1,
            backgroundColor: 'rgb(111,211,109, 0.5)' //PTO

        }
       
        
    ]
    },
    options: {
        
        plugins: {
            legend: {
                
                labels: {
                    usePointStyle: true,
                    color: "rgba(0, 0, 0, 1)"
                }
            }

        },
        scales: {
            X: {
               
                ticks: {
                    color: "rgba(0, 0, 0, 1)",
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