window.addEventListener('load', function () {
    let moniter = document.querySelector('#moniter');
    let monitering = document.querySelector('#monitering');
    document.querySelector('#moniter').addEventListener('mouseenter', function () {
        moniter.style.fontWeight = "bold";
        monitering.style.display = "flex";
        document.querySelector('#monitering').addEventListener('mouseleave', function () {
            moniter.style.fontWeight = "400";
            monitering.style.display = 'none';
            
            let date = new Date();
            let year = date.getFullYear();
            let month = date.getMonth();
            let today = date.getDate();

            // 이전 달의 마지막 날 날짜와 요일 구하기
            // console.log(new Date());
            let startDay = new Date(currentYear, currentMonth, 0);
            let prevDate = startDay.getDate();
            let monthSartDay = 
            let prevDay = startDay.getDay();
            // 이번 달의 마지막 날짜와 요일 구하기
            let endDay = new Date(currentYear,currentMonth + 1, 0);
            let nextDate = endDay.getDate();
            let nextDay = endDay.getDay();

        })
    })
})