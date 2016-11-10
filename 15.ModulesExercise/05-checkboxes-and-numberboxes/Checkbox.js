import { DOMElement } from './DOMElement';

export class Checkbox extends DOMElement {
    constructor(label, selector) {
        super(label, selector);
        this.value = $(this._selector).is(':checked');
        $(this._selector).on('change', () => {
            this.value = $(this._selector).is(':checked');
        });
    }

    get value() {
        return this._value;
    }

    set value(val) {
        if(typeof(val) != 'boolean') {
            throw new Error('Checkbox value must of type boolean!');
        }

        this._value = val;
        $(this._selector).prop('checked', val);
    }
}