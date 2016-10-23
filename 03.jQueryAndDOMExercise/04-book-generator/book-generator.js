function createBook(selector, title, author, isbn) {
    let id = $(selector + ' div').toArray().length + 1;
    let newBook = $(`<div id="book${id}">`)
        .append($('<p class="title">').text(title))
        .append($('<p class="author">').text(author))
        .append($('<p class="isbn">').text(isbn));
    let selectButton = $('<button>').click(function() {
        let divBook = $(this).parent();
        $(divBook).css('border', '2px solid blue');
    });
    let deselectButton = $('<button>').click(function() {
        let divBook = $(this).parent();
        $(divBook).css('border', '');
    });
    newBook
        .append($(selectButton).text('Select'))
        .append($(deselectButton).text('Deselect'));
    $(selector).append(newBook);
}