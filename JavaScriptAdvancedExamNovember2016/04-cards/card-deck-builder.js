function cardDeckBuilder(selector) {
    function addCard(face, suit) {
        let suitSymbol;
        if (suit == 'C') {
            suitSymbol = '\u2663';
        } else if (suit == 'D') {
            suitSymbol = '\u2666';
        } else if (suit == 'H') {
            suitSymbol = '\u2665';
        } else if (suit == 'S') {
            suitSymbol = '\u2660';
        }

        let card = $('<div class="card">').text(`${face} ${suitSymbol}`);
        card.on('click', reverseCards);
        $(selector).append($(card));
    }

    function reverseCards() {
        let cards = $('.card').toArray();
        $('.card').remove();
        for (let i = cards.length - 1; i >= 0; i--) {
            $(cards[i]).on('click', reverseCards);
            $(selector).append($(cards[i]));
        }
    }

    return {
        addCard
    };
}