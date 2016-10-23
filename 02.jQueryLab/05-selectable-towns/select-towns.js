function attachEvents() {
    $('#items li').click(function() {
        if ($(this).attr('data-selected')) {
            $(this).css('background', '');
            $(this).removeAttr('data-selected');
        } else {
            $(this).css('background', '#DDD');
            $(this).attr('data-selected', 'true');
        }
    });

    $('#showTownsButton').on('click', function() {
        let selectedTowns = $('#items li[data-selected]')
            .toArray()
            .map(l => l.textContent);
        $('#selectedTowns').text('Selected towns: ' + selectedTowns.join(', '));
    });
}