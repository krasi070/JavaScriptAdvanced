export class DOMElement {
    constructor(label, selector) {
        if (new.target === DOMElement) {
            throw new TypeError('DOMElement is an abstract class!');
        }

        this._label = label;
        this._selector = selector;
    }

    get label() {
        return this._label;
    }

    get elements() {
        return $(this._selector);
    }
}