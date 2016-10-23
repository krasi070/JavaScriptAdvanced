function calendar([day, month, year]) {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let date = new Date(year, month - 1, 1);
    let lastDay;
    if (month == 12) {
        lastDay = new Date(year + 1, 0, 0).getDate();
    } else {
        lastDay = new Date(year, month, 0).getDate();
    }

    let calendar = $('<table>')
        .append($('<caption>').text(`${months[date.getMonth()]} ${date.getFullYear()}`))
        .append($('<tbody>')
            .append($('<tr>')
                .append($('<th>').text('Mon'))
                .append($('<th>').text('Tue'))
                .append($('<th>').text('Wed'))
                .append($('<th>').text('Thu'))
                .append($('<th>').text('Fri'))
                .append($('<th>').text('Sat'))
                .append($('<th>').text('Sun'))));
    $('#content').append($(calendar));

    let firstDayOfWeek = date.getDay() == 0 ? 7 : date.getDay();
    let currDate = 1;
    let currWeekDay = 1;
    let currWeekInCalendar = 1;
    while (true) {
        if (currWeekDay == 1) {
            $('#content table tbody').append($('<tr>'));
        }

        if (currWeekDay < firstDayOfWeek) {
            $('#content table tbody tr:last')
                .append($('<td>'));
        } else if (currDate <= lastDay) {
            firstDayOfWeek = 0;
            if (currDate == day) {
                $('#content table tbody tr:last')
                    .append($('<td class="today">').text(`${currDate}`));
            } else {
                $('#content table tbody tr:last')
                    .append($('<td>').text(`${currDate}`));
            }
        }

        if (currWeekDay > firstDayOfWeek) {
            currDate++;
        }

        currWeekDay++;
        if (currWeekDay == 8) {
            currWeekDay = 1;
            currWeekInCalendar++;
        }

        if (currDate > lastDay && currWeekDay == 1) {
            break;
        } else if (currDate > lastDay) {
            $('#content table tbody tr:last')
                .append($('<td>'));
        }
    }
}