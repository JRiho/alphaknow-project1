/////////////////////////////공동 javascript /////////////////////////////////////////////////////

window.addEventListener('load', function () {
    let moniter = document.querySelector('#moniter');
    let monitering = document.querySelector('#monitering');

    let standard = document.querySelector('#standard');
    let criteria = document.querySelector('#criteria');

    let plan = document.querySelector('#plan');
    let planning = document.querySelector('#planning');

    let performance = document.querySelector('#performance');
    let performing = document.querySelector('#performing');

    let prediction = document.querySelector('#prediction');
    let predicting = document.querySelector('#predicting');

    let inventory = document.querySelector('#inventory');
    let invent = document.querySelector('#invent');

    let store = document.querySelector('#store');
    let storing = document.querySelector('#storing');


    document.querySelector('#moniter').addEventListener('mouseenter', function () {
        moniter.style.fontWeight = "bold";
        monitering.style.display = "flex";

        criteria.style.display = 'none';
        standard.style.fontWeight = "400";

        plan.style.fontWeight = "400";
        planning.style.display = 'none';

        performance.style.fontWeight = "400";
        performing.style.display = 'none';

        prediction.style.fontWeight = "400";
        predicting.style.display = 'none';

        inventory.style.fontWeight = "400";
        invent.style.display = 'none';

        store.style.fontWeight = "400";
        storing.style.display = 'none';
    })
    document.querySelector('#monitering').addEventListener('mouseleave', function () {
        moniter.style.fontWeight = "400";
        monitering.style.display = 'none';
    })
    document.querySelector('#standard').addEventListener('mouseenter', function () {
        standard.style.fontWeight = "bold";
        criteria.style.display = "flex";

        moniter.style.fontWeight = "400";
        monitering.style.display = 'none';

        plan.style.fontWeight = "400";
        planning.style.display = 'none';

        performance.style.fontWeight = "400";
        performing.style.display = 'none';

        prediction.style.fontWeight = "400";
        predicting.style.display = 'none';

        inventory.style.fontWeight = "400";
        invent.style.display = 'none';

        store.style.fontWeight = "400";
        storing.style.display = 'none';
    })
    document.querySelector('#criteria').addEventListener('mouseleave', function () {
        standard.style.fontWeight = "400";
        criteria.style.display = 'none';
    })
    document.querySelector('#plan').addEventListener('mouseenter', function () {
        plan.style.fontWeight = "bold";
        planning.style.display = "flex";

        moniter.style.fontWeight = "400";
        monitering.style.display = 'none';

        criteria.style.display = 'none';
        standard.style.fontWeight = "400";

        performance.style.fontWeight = "400";
        performing.style.display = 'none';

        prediction.style.fontWeight = "400";
        predicting.style.display = 'none';

        inventory.style.fontWeight = "400";
        invent.style.display = 'none';

        store.style.fontWeight = "400";
        storing.style.display = 'none';
    })
    document.querySelector('#planning').addEventListener('mouseleave', function () {
        plan.style.fontWeight = "400";
        planning.style.display = 'none';
    })
    document.querySelector('#performance').addEventListener('mouseenter', function () {
        performance.style.fontWeight = "bold";
        performing.style.display = "flex";

        moniter.style.fontWeight = "400";
        monitering.style.display = 'none';

        criteria.style.display = 'none';
        standard.style.fontWeight = "400";

        plan.style.fontWeight = "400";
        planning.style.display = 'none';

        prediction.style.fontWeight = "400";
        predicting.style.display = 'none';

        inventory.style.fontWeight = "400";
        invent.style.display = 'none';

        store.style.fontWeight = "400";
        storing.style.display = 'none';
    })
    document.querySelector('#performing').addEventListener('mouseleave', function () {
        performance.style.fontWeight = "400";
        performing.style.display = 'none';
    })
    document.querySelector('#prediction').addEventListener('mouseenter', function () {
        prediction.style.fontWeight = "bold";
        predicting.style.display = "flex";

        moniter.style.fontWeight = "400";
        monitering.style.display = 'none';

        criteria.style.display = 'none';
        standard.style.fontWeight = "400";

        plan.style.fontWeight = "400";
        planning.style.display = 'none';

        performance.style.fontWeight = "400";
        performing.style.display = 'none';

        inventory.style.fontWeight = "400";
        invent.style.display = 'none';

        store.style.fontWeight = "400";
        storing.style.display = 'none';
    })
    document.querySelector('#predicting').addEventListener('mouseleave', function () {
        prediction.style.fontWeight = "400";
        predicting.style.display = 'none';
    })
    document.querySelector('#inventory').addEventListener('mouseenter', function () {
        inventory.style.fontWeight = "bold";
        invent.style.display = "flex";

        prediction.style.fontWeight = "400";
        predicting.style.display = 'none';

        moniter.style.fontWeight = "400";
        monitering.style.display = 'none';

        criteria.style.display = 'none';
        standard.style.fontWeight = "400";

        plan.style.fontWeight = "400";
        planning.style.display = 'none';

        performance.style.fontWeight = "400";
        performing.style.display = 'none';

        store.style.fontWeight = "400";
        storing.style.display = 'none';
    })
    document.querySelector('#invent').addEventListener('mouseleave', function () {
        inventory.style.fontWeight = "400";
        invent.style.display = 'none';
    })
    document.querySelector('#store').addEventListener('mouseenter', function () {
        store.style.fontWeight = "bold";
        storing.style.display = "flex";

        prediction.style.fontWeight = "400";
        predicting.style.display = 'none';

        moniter.style.fontWeight = "400";
        monitering.style.display = 'none';

        criteria.style.display = 'none';
        standard.style.fontWeight = "400";

        plan.style.fontWeight = "400";
        planning.style.display = 'none';

        performance.style.fontWeight = "400";
        performing.style.display = 'none';

        inventory.style.fontWeight = "400";
        invent.style.display = 'none';
    })
    document.querySelector('#storing').addEventListener('mouseleave', function () {
        store.style.fontWeight = "400";
        storing.style.display = 'none';
    })
    document.querySelector('#header').addEventListener('mouseenter', function () {
        prediction.style.fontWeight = "400";
        predicting.style.display = 'none';

        moniter.style.fontWeight = "400";
        monitering.style.display = 'none';

        criteria.style.display = 'none';
        standard.style.fontWeight = "400";

        plan.style.fontWeight = "400";
        planning.style.display = 'none';

        performance.style.fontWeight = "400";
        performing.style.display = 'none';

        inventory.style.fontWeight = "400";
        invent.style.display = 'none';

        store.style.fontWeight = "400";
        storing.style.display = 'none';
    })
})
/////////////////////////////공동 javascript 끝/////////////////////////////////////////////////////


/////////////////////////////메인페이지 시작///////////////////////////////////////////////////////////
window.addEventListener('load', function () {
    document.querySelector('#plus_img').addEventListener('click', function () {
        document.querySelector('#to_do_list').style.display = 'block';
        document.querySelector('#to_do').style.opacity = '0.3';
        document.querySelector('#plus').style.opacity = '0.3';
        document.querySelector('#frame').style.opacity = '0.3';
        document.querySelector('#calendar_div').style.opacity = '0.3';

    })

    document.querySelector('#btn_cancel').addEventListener('click', function () {
        document.getElementById('task_input').value = '';
    })
    document.querySelector('#btn_out').addEventListener('click', function () {
        document.querySelector('#to_do_list').style.display = 'none';
        document.querySelector('#to_do').style.opacity = '1';
        document.querySelector('#plus').style.opacity = '1';
        document.querySelector('#frame').style.opacity = '1';
        document.querySelector('#calendar_div').style.opacity = '1';
        document.getElementById('task_input').value = '';
    })
})

document.addEventListener('DOMContentLoaded', () => {
    const btn_submit = document.getElementById('btn_submit');
    const taskInput = document.getElementById('task_input');
    const taskList = document.getElementById('task_list');

    btn_submit.addEventListener('click', () => {
        const task = taskInput.value;
        if (task) {
            addTask(task);
            taskInput.value = '';
            taskInput.focus();
        }
    });

    function addTask(task) {
        const listItem = document.createElement('li');
        listItem.textContent = task;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = '삭제';
        deleteButton.onclick = function () {
            listItem.remove();
        };
        listItem.appendChild(deleteButton);
        taskList.appendChild(listItem);

    }
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////    
window.addEventListener('load', function () {

    const date = new Date();

    const renderCalendar = () => {
        const viewYear = date.getFullYear();
        const viewMonth = date.getMonth();

        document.querySelector('.year_month').textContent = `${viewYear}년 ${viewMonth + 1}월`;

        const prevLast = new Date(viewYear, viewMonth, 0);
        const thisLast = new Date(viewYear, viewMonth + 1, 0);

        const PLDate = prevLast.getDate();
        const PLDay = prevLast.getDay();

        const TLDate = thisLast.getDate();
        const TLDay = thisLast.getDay();

        const prevDates = [];
        const thisDates = [...Array(TLDate + 1).keys()].slice(1);
        const nextDates = [];

        if (PLDay !== 6) {
            for (let i = 0; i < PLDay + 1; i++) {
                prevDates.unshift(PLDate - i);
            }
        }
        for (let i = 1; i < 7 - TLDay; i++) {
            nextDates.push(i)
        }

        const dates = prevDates.concat(thisDates, nextDates);
        const firstDateIndex = dates.indexOf(1);
        const lastDateIndex = dates.lastIndexOf(TLDate);

        dates.forEach((date, i) => {
            const condition = i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other';
            dates[i] = `<div class="date"><span class = ${condition} > ${date}</span></div>`;
        });

        this.document.querySelector('.dates').innerHTML = dates.join('');

        const today = new Date();

        if (viewMonth === today.getMonth() && viewYear === today.getFullYear()) {
            for (let date of document.querySelectorAll('.this')) {
                if (+date.innerText === today.getDate()) {
                    date.classList.add('today');
                }
            }
        }
    };

    renderCalendar();

    document.querySelector('.go_prev').addEventListener('click', function () {
        console.log('Previous month clicked'); // 디버깅을 위한 콘솔 로그
        date.setMonth(date.getMonth() - 1);

        renderCalendar();
    });

    document.querySelector('.go_today').addEventListener('click', function () {
        console.log('Go to today clicked'); // 디버깅을 위한 콘솔 로그
        const today = new Date();
        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());

        renderCalendar();
    });

    document.querySelector('.go_next').addEventListener('click', function () {
        console.log('Next month clicked'); // 디버깅을 위한 콘솔 로그
        date.setMonth(date.getMonth() + 1);

        renderCalendar();
    });

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    document.addEventListener('DOMContentLoaded', function () {
        const apiKey = 'e20c5e5ad8e68beb46540b4914ba2271';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&units=metric`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                document.getElementById('temperature').textContent = `온도: ${data.main.temp}°C`;
                document.getElementById('weather').textContent = `날씨: ${data.weather[0].main}`;
                document.getElementById('wind').textContent = `풍속: ${data.wind.speed}m/s`;

                const weatherImage = document.getElementById('weatherImage');
                switch (data.weather[0].main) {
                    case 'Clear':
                        weatherImage.src = '../img/Sun.png';
                        break;
                    case 'Clouds':
                        weatherImage.src = '../img/Sun.png';
                        break;
                    case 'Rain':
                        weatherImage.src = '../img/Sun.png';
                        break;
                    // 여기에 필요한 만큼 다른 날씨 상태를 추가할 수 있습니다.
                    default:
                        weatherImage.src = '../img/Sun.png';
                }
            })
            .catch(error => console.error('API 요청 중 오류 발생:', error));
    })
});

document.addEventListener('DOMContentLoaded', function () {
    var formattedDateElement = document.getElementById('currentDate');

    // 초기 월 설정
    var currentDate = new Date();
    var currentMonth = currentDate.getMonth();

    // 초기 월 표시
    updateFormattedDate(currentDate);

    // 이전 월 버튼 클릭 시
    document.getElementById('prevMonth').addEventListener('click', function () {
        currentMonth--;
        updateFormattedDate(new Date(currentDate.getFullYear(), currentMonth, 1));
    });

    // 다음 월 버튼 클릭 시
    document.getElementById('nextMonth').addEventListener('click', function () {
        currentMonth++;
        updateFormattedDate(new Date(currentDate.getFullYear(), currentMonth, 1));
    });

    function updateFormattedDate(date) {
        var year = date.getFullYear();
        var month = (date.getMonth() + 1).toString().padStart(2, '0');
        var formattedDate = `${year}.${month}`;
        formattedDateElement.textContent = formattedDate;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    let option_btn1 = document.getElementById('option_btn1');
    let option_btn2 = document.getElementById('option_btn2');
    let rateTable_day = document.getElementById('rateTable_day');
    let rateChart_week = document.getElementById('rateChart_week');

    option_btn1.classList.add('active');
    option_btn2.classList.add('inactive');

    option_btn1.addEventListener('click', function () {
        if (!option_btn1.classList.contains('active')) {
            option_btn1.classList.remove('inactive');
            option_btn1.classList.add('active');
            option_btn2.classList.remove('active');
            option_btn2.classList.add('inactive');
        }

        rateTable_day.style.display = 'block';
        rateChart_week.style.display = 'none';
    });

    option_btn2.addEventListener('click', function () {
        if (!option_btn2.classList.contains('active')) {
            option_btn2.classList.remove('inactive');
            option_btn2.classList.add('active');
            option_btn1.classList.remove('active');
            option_btn1.classList.add('inactive');
        }

        rateTable_day.style.display = 'none';
        rateChart_week.style.display = 'block';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    // 현재 날짜를 가져오기
    const currentDate = new Date();

    // 현재 월의 일 수를 계산
    const currentMonth = currentDate.getMonth() + 1;
    const daysInMonth = new Date(currentDate.getFullYear(), currentMonth + 1, 0).getDate();

    // 테이블 생성
    const table = document.createElement('table');
    table.setAttribute('id', 'dayTable');

    // 일 헤더 생성
    const headerRow = table.insertRow();
    const dayHeader = headerRow.insertCell();
    dayHeader.textContent = 'Day';
    dayHeader.style.backgroundColor = '#ddd';
    dayHeader.style.position = 'sticky';
    dayHeader.style.top = '0';

    // 장비 정보 헤더 생성
    const equipmentHeaders = ['PCB 로더', '솔더 프린팅', 'SPI (솔더 페이스트 검사기)'
        , '칩 마운터', '리플로우 솔더링', '자동광학검사', 'PCB 언로더'];
    equipmentHeaders.forEach(headerText => {
        const header = headerRow.insertCell();
        header.textContent = headerText;
        header.style.backgroundColor = '#ddd';
        header.style.position = 'sticky';
        header.style.top = '0';
    });

    // 평균 열 헤더 생성
    const avgHeader = headerRow.insertCell();
    avgHeader.textContent = '평균';
    avgHeader.style.backgroundColor = '#ddd';
    avgHeader.style.position = 'sticky';
    avgHeader.style.top = '0';

    // 각 날짜에 대한 데이터 계산 및 테이블에 추가
    for (let i = 1; i <= daysInMonth; i++) {
        const row = table.insertRow();

        // 날짜 열 추가
        const dayCell = row.insertCell();
        dayCell.textContent = i + "일";

        let total = 0;

        // 각 장비 정보 열 추가
        equipmentHeaders.forEach(headerText => {
            const cell = row.insertCell();
            let randomValue;

            // 토요일 또는 일요일인 경우 0으로 설정
            if ((new Date(currentDate.getFullYear(), currentMonth, i)).getDay() === 0 ||
                (new Date(currentDate.getFullYear(), currentMonth, i)).getDay() === 6) {
                randomValue = '0%';
            } else {
                randomValue = (Math.random() * 1.9 + 98).toFixed(1) + '%';
            }

            cell.textContent = randomValue;
            total += parseFloat(randomValue);
        });

        // 평균 열 추가
        const avgCell = row.insertCell();
        const average = (total / equipmentHeaders.length).toFixed(1);
        avgCell.textContent = average + '%';
    }

    // 테이블을 body에 추가
    document.getElementById('rateTable_day').appendChild(table);
});

function getWeeksInMonth(year, month) {
    const firstDayOfMonth = new Date(year, month - 1, 1);

    // 첫째 날의 요일을 가져오기
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // 첫째 주의 시작일을 계산
    let firstWeekStart = 1; // 월요일부터 시작
    if (firstDayOfWeek <= 3) { // 목요일을 포함하지 않는 경우
        firstWeekStart = 5 - firstDayOfWeek + 1;
    }

    // 해당 월의 마지막 날짜 가져오기
    const lastDayOfMonth = new Date(year, month, 0).getDate();

    // 마지막 날짜의 요일 가져오기
    const lastDayOfWeek = new Date(year, month - 1, lastDayOfMonth).getDay();

    // 마지막 주의 마지막 날짜를 계산
    let lastWeekEnd = lastDayOfMonth; // 기본적으로 마지막 날짜로 설정
    if (lastDayOfWeek >= 4) { // 목요일을 포함하는 경우
        lastWeekEnd = lastDayOfMonth - (lastDayOfWeek - 4);
    }

    // 총 주 수를 계산
    const totalWeeks = Math.ceil((lastWeekEnd - firstWeekStart + 1) / 7);

    return totalWeeks;
}

function generateRandomData(year, month) {
    const weeksInMonth = getWeeksInMonth(year, month);
    const data = [];

    for (let week = 1; week <= weeksInMonth; week++) {
        // 랜덤 데이터 생성
        const value = (Math.random() * 1.9 + 98).toFixed(1);
        data.push(value);
    }

    return data;
}

function updateChart(year, month) {
    const ctx = document.getElementById('weeklyChart').getContext('2d');
    const weeksInMonth = getWeeksInMonth(year, month);
    const weekLabels = Array.from({ length: weeksInMonth }, (_, index) => `${index + 1}주차`);

    const data = {
        labels: weekLabels,
        datasets: [
            {
                label: 'PCB 로더',
                data: generateRandomData(year, month),
                backgroundColor: 'rgba(226, 15, 0, 0.2)',
                borderColor: 'rgba(226, 15, 0, 1)',
                borderWidth: 1,
                barPercentage: 0.8,
            },
            {
                label: '솔더 프린팅',
                data: generateRandomData(year, month),
                backgroundColor: 'rgba(226, 155, 0, 0.2)',
                borderColor: 'rgba(226, 155, 0, 1)',
                borderWidth: 1,
                barPercentage: 0.8,
            },
            {
                label: 'SPI (솔더 페이스트 검사기)',
                data: generateRandomData(year, month),
                backgroundColor: 'rgba(168, 230, 0, 0.2)',
                borderColor: 'rgba(168, 230, 0, 1)',
                borderWidth: 1,
                barPercentage: 0.8,
            },
            {
                label: '칩 마운터',
                data: generateRandomData(year, month),
                backgroundColor: 'rgba(0, 216, 144, 0.2)',
                borderColor: 'rgba(0, 216, 144, 1)',
                borderWidth: 1,
                barPercentage: 0.8,
            },
            {
                label: '리플로우 솔더링',
                data: generateRandomData(year, month),
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                barPercentage: 0.8,
            },
            {
                label: '자동광학검사',
                data: generateRandomData(year, month),
                backgroundColor: 'rgba(0, 60, 255, 0.2)',
                borderColor: 'rgba(0, 60, 255, 1)',
                borderWidth: 1,
                barPercentage: 0.8,
            },
            {
                label: 'PCB 언로더',
                data: generateRandomData(year, month),
                backgroundColor: 'rgba(119, 0, 231, 0.2)',
                borderColor: 'rgba(119, 0, 231, 1)',
                borderWidth: 1,
                barPercentage: 0.8,
            }
        ]
    };

    const config = {
        type: 'bar',
        data: data,
        options: {
            responsive: false,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true,
                }
            },
            layout: {
            }
        }
    };
    
    if (window.myChart) {
        window.myChart.destroy();
      }

      window.myChart = new Chart(ctx, config);
};

document.addEventListener('DOMContentLoaded', function () {
    const currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let currentMonth = currentDate.getMonth() + 1;

    // 초기 차트 생성
    updateChart(currentYear, currentMonth);

    // 이전 월 버튼 클릭 시 차트 업데이트
    document.getElementById('prevMonth').addEventListener('click', function () {
        currentMonth = (currentMonth - 1 + 12) % 12;
        if (currentMonth === 0) currentMonth = 12;
        updateChart(currentYear, currentMonth);
    });

    // 다음 월 버튼 클릭 시 차트 업데이트
    document.getElementById('nextMonth').addEventListener('click', function () {
        currentMonth = (currentMonth % 12) + 1;
        updateChart(currentYear, currentMonth);
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let currentMonth = new Date().getMonth() + 1; // 현재 월 초기화

    function updateTable() {
        // 이전 월 버튼 클릭 시 날짜 변경하면서 테이블변경 함수 실행
        document.getElementById('prevMonth').addEventListener('click', function () {
            currentMonth = (currentMonth - 1 + 12) % 12;
            updateTableBody();
        });

        // 다음 월도 마찬가지
        document.getElementById('nextMonth').addEventListener('click', function () {
            currentMonth = (currentMonth % 12) + 1;
            updateTableBody();
        });

        updateTableBody();
    }

    function updateTableBody() {
        // 현재 테이블 삭제
        const existingTable = document.getElementById('dayTable');
        if (existingTable) {
            existingTable.remove();
        }

        // 다시 테이블 생성
        const table = document.createElement('table');
        table.setAttribute('id', 'dayTable');

        // 헤더 생성
        const headerRow = table.createTHead().insertRow();
        const dayHeader = headerRow.insertCell();
        dayHeader.textContent = 'Day';
        dayHeader.style.backgroundColor = '#ddd';
        dayHeader.style.position = 'sticky';
        dayHeader.style.top = '0';

        // 장비 정보 헤더 생성
        const equipmentHeaders = ['PCB 로더', '솔더 프린팅', 'SPI (솔더 페이스트 검사기)', '칩 마운터', '리플로우 솔더링', '자동광학검사', 'PCB 언로더'];
        equipmentHeaders.forEach(headerText => {
            const header = headerRow.insertCell();
            header.textContent = headerText;
            header.style.backgroundColor = '#ddd';
            header.style.position = 'sticky';
            header.style.top = '0';
        });

        // 평균 열 헤더 생성
        const avgHeader = headerRow.insertCell();
        avgHeader.textContent = '평균';
        avgHeader.style.backgroundColor = '#ddd';
        avgHeader.style.position = 'sticky';
        avgHeader.style.top = '0';

        // 각 날짜에 대한 데이터 계산 및 테이블에 추가
        const daysInMonth = new Date(new Date().getFullYear(), currentMonth, 0).getDate();
        for (let i = 1; i <= daysInMonth; i++) {
            const row = table.insertRow();

            // 날짜 열 추가
            const dayCell = row.insertCell();
            dayCell.textContent = i;

            let total = 0;

            // 각 장비 정보 열 추가
            equipmentHeaders.forEach(headerText => {
                const cell = row.insertCell();
                const randomValue = (Math.random() * 1.9 + 98).toFixed(1);
                cell.textContent = randomValue;

                total += parseFloat(randomValue); // 총합 계산
            });

            // 평균 열 추가
            const avgCell = row.insertCell();
            const average = (total / equipmentHeaders.length).toFixed(1);
            avgCell.textContent = average;
        }

        // 테이블을 body에 추가
        document.getElementById('rateTable_day').appendChild(table);
    }

    // 초기 테이블 생성
    updateTable();

});
