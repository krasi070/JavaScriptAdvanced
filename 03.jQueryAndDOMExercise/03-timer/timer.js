function timer() {
    let intervalId;
    let isTimerOn = false;
    $('#start-timer').on('click', function () {
        if (!isTimerOn) {
            intervalId = setInterval(increaseTimer, 1000);
            isTimerOn = true;
        }
    });

    $('#stop-timer').on('click', stopTimer);

    function stopTimer() {
        if (isTimerOn) {
            clearInterval(intervalId);
            isTimerOn = false;
        }
    }

    function increaseTimer() {
        let hours = Number($('#hours').text());
        let minutes = Number($('#minutes').text());
        let seconds = Number($('#seconds').text());

        seconds++;
        if (seconds == 60) {
            seconds = 0;
            minutes++;
            if (minutes == 60) {
                minutes = 0;
                hours++;
            }
        }

        $('#hours').text(hours < 10 ? '0' + hours : hours);
        $('#minutes').text(minutes < 10 ? '0' + minutes : minutes);
        $('#seconds').text(seconds < 10 ? '0' + seconds : seconds);
    }
}