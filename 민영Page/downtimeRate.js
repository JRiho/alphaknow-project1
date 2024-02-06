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

//////////////////////////////
// content 영역 자바스크립트 //
/////////////////////////////

document.addEventListener('DOMContentLoaded', function () {
    const toggleButtons = document.querySelectorAll('.toggleButton');
    const downtimePie = document.getElementById('downtime_pie');
    const operationStats = document.getElementById('operationStats');
    const ctx = downtimePie.getContext('2d');
    let currentData = [0, 0]; 

    // 각 버튼을 클릭할 때마다 해당 기기의 가동률과 비가동률을 랜덤으로 설정하고 파이 차트를 업데이트
    toggleButtons.forEach(function (button, index) {
        button.addEventListener('click', function () {
            // 랜덤 가동률 생성
            const operatingRate = (Math.random() * 1.9 + 98).toFixed(1);
            const downtimeRate = 100 - operatingRate;

            // 현재 선택된 기기의 가동률 데이터를 업데이트
            currentData = [operatingRate, downtimeRate];
            updatePieChart(currentData, button.dataset.target);
            updateOperationStats(operatingRate, downtimeRate);
        });
    });

    // 초기 파이 차트 생성 (PCB 로더의 가동률로 설정)
    const initialOperatingRate = (Math.random() * 1.9 + 98).toFixed(1);
    const initialDowntimeRate = 100 - initialOperatingRate;
    currentData = [initialOperatingRate, initialDowntimeRate];
    updatePieChart(currentData, 'PCB 로더');
    updateOperationStats(initialOperatingRate, initialDowntimeRate);

    // 파이 차트 업데이트 함수
    function updatePieChart(data, deviceName) {
        if (window.myPieChart) {
            window.myPieChart.destroy();
        }

        // 파이 차트 데이터 생성
        const chartData = {
            labels: ['가동률', '비가동률'],
            datasets: [{
                label: '비가동률',
                data: data,
                backgroundColor: [
                    'rgba(30, 212, 176, 0.7)',
                    'rgba(231, 56, 50, 0.7)'
                ],
                borderColor: [
                    'rgba(26, 188, 156, 1)',
                    'rgba(255, 8, 0, 1)'
                ],
                borderWidth: 1
            }]
        };

        // 파이 차트 설정
        const config = {
            type: 'pie',
            data: chartData,
            options: {
                responsive: false,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    title: {
                        display: true,
                        text: deviceName,
                        font: {
                            size: 30
                        }
                    }
                }
            }
        };

        // 파이 차트 생성
        window.myPieChart = new Chart(ctx, config);
    }

    function updateOperationStats(operatingRate, downtimeRate) {
        operationStats.querySelector('#operatingRate').textContent = `${operatingRate}%`;
        operationStats.querySelector('#downtimeRate').textContent = `${downtimeRate.toFixed(1)}%`;
    }

    // 현재 시간을 기준으로 총 작동시간 업데이트 함수
    function updateTotalOperationTime() {
        const now = new Date();
        const startTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 9, 0, 0); // 오전 9시
        const millsec = now - startTime;
        const totalOperationHours = Math.floor(millsec / (1000 * 60 * 60)); // 시간 단위
        const totalOperationMins = Math.floor((millsec % (1000 * 60 * 60)) / (1000 * 60)); // 분 단위
        operationStats.querySelector('#totalOperationTime').textContent = 
        `${totalOperationHours}시간 ${totalOperationMins}분`;
    }

    // 페이지가 로드될 때
    updateTotalOperationTime();
    setInterval(updateTotalOperationTime, 10 * 60 * 1000); // 10분마다 업데이트

});

