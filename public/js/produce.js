function clickHandler(evt, chart) {           //sm. 클릭으로 이벤트 실행하기 바 차트의 바를 클릭해서 그 바의 값을 가져오고, 모달을 실행하고자함   
    const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);

    if (points.length) {
        const firstPoint = points[0];   
        var label = chart.data.labels[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 라벨명을 가져오기
        var value = chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];    //sm. 차트의 바를 클릭했을때 그 데이터값을 가져오기
        console.log(label);     //sm. 콘솔로 값이 제대로 가져와지는지 확인
        console.log(value);
        var myModal = new bootstrap.Modal(document.getElementById('exampleModal'))  //sm. 차트 클릭이벤트와 함께 모달 실행, 모달의 인스턴스 생상하여 모달의 아이디를 추적하여 저장
        myModal.show()                                                              //sm. 모달 실행
        
    }}