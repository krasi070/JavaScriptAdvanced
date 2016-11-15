class Card {
    constructor(face, suit) {
        this.face = face;
        this.suit = suit;
    }

    get face() {
        return this._face;
    }

    set face(val) {
        let validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        if (validFaces.filter(f => f == val).length == 0) {
            throw new Error('Incorrect face was given as parameter!');
        }

        this._face = val;
    }

    get suit() {
        return this._suit;
    }

    set suit(val) {
        if (val != 'S' && val != 'H' && val != 'D' && val != 'C') {
            throw new Error('Incorrect suit was given as parameter!');
        }

        this._suit = val;
    }

    toString() {
        let result = this.face;
        if (this.suit == 'S') {
            result += '\u2660';
        } else if (this.suit == 'H') {
            result += '\u2665'
        } else if (this.suit == 'D') {
            result += '\u2666'
        } else if (this.suit == 'C') {
            result += '\u2663'
        }

        return result;
    }
}