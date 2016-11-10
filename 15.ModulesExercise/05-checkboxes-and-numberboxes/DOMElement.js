export class DOMElement {
    constructor(label, selector) {
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