function search() {
    let text = $('#searchText').val();
    $('#searchText').val('');
    let matchedItems = $('#towns li')
        .toArray()
        .filter(l => l.textContent.indexOf(text) != -1);
    $('#towns li').css('font-weight', '');
    $(matchedItems).css('font-weight', 'bold');
    $('#result').text(matchedItems.length + ' matches found.');
}