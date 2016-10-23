function extractText() {
    let items = $('#items li').toArray().map(l => l.textContent);
    $('#result').text(items.join(', '));
}