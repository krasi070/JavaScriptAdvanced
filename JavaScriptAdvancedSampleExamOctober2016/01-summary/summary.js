function summary(buttonSelector) {
    $(buttonSelector).on('click', generateSummary);
    function generateSummary() {
        let highlightedText = $('#content p strong')
            .toArray()
            .map(h => $(h).text())
            .join('');
        $('#content').parent()
            .append($('<div id="summary">')
                .append($('<h2>').text('Summary'))
                .append($('<p>').text(highlightedText)));
    }
}