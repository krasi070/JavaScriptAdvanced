export class BaseElement {
    constructor() {
        if (new.target === BaseElement) {
            throw new TypeError('BaseElement is an abstract class!');
        }

        this.element = null;
    }

    appendTo(selector) {
        this.createElement();
        $(selector).append($(this.element));
    }

    createElement() {
        this.element = this.getElementString();
    }

    getElementString() {
        return undefined;
    }
}