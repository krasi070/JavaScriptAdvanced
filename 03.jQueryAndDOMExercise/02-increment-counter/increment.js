function increment(selector) {
    $(selector).append($('<textarea class="counter" disabled>').val('0'));
    $(selector).append($('<button class="btn" id="incrementBtn">')
        .text('Increment')
        .on('click', incrementCounter));
    $(selector).append($('<button class="btn" id="addBtn">')
        .text('Add')
        .on('click', addValue));
    $(selector).append($('<ul class="results">'));

    function incrementCounter() {
        let counter = $('.counter:first');
        $(counter).val(Number($(counter).val()) + 1);
    }

    function addValue() {
        let list = $('.results:first');
        let valueToAdd = $('.counter:first').val();
        $(list).append($('<li>').text(valueToAdd));
    }
}