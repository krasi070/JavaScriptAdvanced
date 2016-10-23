function domSearch(selector, caseSensitive) {
    let addDiv = $('<div class="add-controls">')
        .append($('<label>').text('Enter text:'))
        .append($('<input type="text">'))
        .append($('<a href="#" class="button">').on('click', addElement).text('Add'));
    $(selector).append(addDiv);
    let searchDiv = $('<div class="search-controls">')
        .append($('<label>').text('Search:'))
        .append($('<input type="text">').on('change paste keyup', search));
    $(selector).append(searchDiv);
    let resultDiv = $('<div class="result-controls">')
        .append($('<ul class="items-list">'));
    $(selector).append(resultDiv);

    function addElement() {
        let addedElement = $('.add-controls:first input:first').val();
        $('.add-controls:first input:first').val('');
        $('.items-list:first')
            .append($('<li class="list-item">')
                .append($('<a href="#" class="button">X</a>')
                    .on('click', deleteElement))
                .append($(` <strong>${addedElement}</strong>`)));
    }
    
    function search() {
        let text = $(this).val();
        if (!caseSensitive) {
            text = text.toLowerCase();
        }

        $('.items-list:first li strong')
            .toArray()
            .forEach(l => $(l).parent().css('display', ''));
        $('.items-list:first li strong')
            .toArray()
            .filter(l => {
                if (caseSensitive) {
                    return l.textContent.indexOf(text) == -1;
                } else {
                    return l.textContent.toLowerCase().indexOf(text) == -1;
                }
            })
            .forEach(l => $(l).parent().css('display', 'none'));
    }
    
    function deleteElement() {
        let element = $(this).parent();
        $(element).remove();
    }
}