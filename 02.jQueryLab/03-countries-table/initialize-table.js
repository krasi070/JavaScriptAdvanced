function initializeTable() {
    appendRow('Bulgaria', 'Sofia');
    appendRow('Germany', 'Berlin');
    appendRow('Russia', 'Moscow');

    $('#createLink').click(function () {
        let country = $('#newCountryText').val();
        $('#newCountryText').val('');
        let capital = $('#newCapitalText').val();
        $('#newCapitalText').val('');
        appendRow(country, capital);
    });

    function appendRow(country, capital) {
        let newRow = $('<tr>')
            .append($('<td>').text(country))
            .append($('<td>').text(capital))
            .append($('<td>')
                .append($('<a href="#">[Up]</a>').click(moveUp))
                .append(' ')
                .append($('<a href="#">[Down]</a>').click(moveDown))
                .append(' ')
                .append($('<a href="#">[Delete]</a>').click(deleteRow)));
        $('#countriesTable').append(newRow);
        fixRows();
    }

    function moveUp() {
        let row = $(this).parent().parent();
        $(row).fadeOut(function () {
            $(row).prev().insertAfter(row);
            $(row).fadeIn();
            fixRows();
        });
    }

    function moveDown() {
        let row = $(this).parent().parent();
        $(row).fadeOut(function () {
            $(row).next().insertBefore(row);
            $(row).fadeIn();
            fixRows();
        });
    }

    function deleteRow() {
        let row = $(this).parent().parent();
        $(row).fadeOut(function () {
            $(row).remove();
            fixRows();
        });
    }

    function fixRows() {
        let rows = $('#countriesTable tr').toArray();
        $(rows).each((index, row) => {
            $(row).find('td a:contains("Up")').css('display', 'inline');
            $(row).find('td a:contains("Down")').css('display', 'inline');
        });
        $(rows[2]).find('td a:contains("Up")').css('display', 'none');
        $(rows[rows.length - 1]).find('td a:contains("Down")').css('display', 'none');
    }
}