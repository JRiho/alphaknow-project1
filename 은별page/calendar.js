window.onload = function() {
    var yearSelect = document.getElementById('year');
    var monthSelect = document.getElementById('month');
    var daySelect = document.getElementById('day');

    // 년도 Select Box에 옵션 추가
    for (var i = 2024; i >= 1900; i--) {
        var option = document.createElement('option');
        option.text = i;
        option.value = i;
        yearSelect.add(option);
    }

    // 월 Select Box에 옵션 추가
    for (var i = 1; i <= 12; i++) {
        var option = document.createElement('option');
        option.text = i;
        option.value = i;
        monthSelect.add(option);
    }

    // 일 Select Box에 옵션 추가
    updateDaySelect();

    // 년도나 월이 변경되면 일 Select Box 업데이트
    yearSelect.addEventListener('change', updateDaySelect);
    monthSelect.addEventListener('change', updateDaySelect);

    function updateDaySelect() {
        // 기존에 있던 일 Select Box의 옵션들 제거
        while (daySelect.firstChild) {
            daySelect.firstChild.remove();
        }

        // 선택된 년도와 월에 따른 일의 수 계산
        var year = yearSelect.value;
        var month = monthSelect.value;
        var days = new Date(year, month, 0).getDate();

        // 일 Select Box에 옵션 추가
        for (var i = 1; i <= days; i++) {
            var option = document.createElement('option');
            option.text = i;
            option.value = i;
            daySelect.add(option);
        }
    }
}
