function tableBuilder(selector) {
    function createTable(columnNames) {
        let tableRow = $('<tr>');
        for (let columnName of columnNames) {
            $(tableRow).append($('<th>').text(columnName));
        }

        $(tableRow).append($('<th>').text('Action'));

        $(selector + ' *').remove();
        $(selector)
            .append($('<table>')
                .append($(tableRow)));
    }
    
    function fillData(dataRows) {
        for (let data of dataRows) {
            let currRow = $('<tr>');
            for (let partOfData of data) {
                $(currRow).append($('<td>').text(partOfData));
            }

            $(currRow)
                .append($('<td>')
                    .append($('<button>Delete</button>').on('click', deleteTableRow)));
            $(selector + ' table').append($(currRow));
        }

        function deleteTableRow(event) {
            $(event.target).parent().parent().remove();
        }
    }

    return {
        createTable,
        fillData
    };
}