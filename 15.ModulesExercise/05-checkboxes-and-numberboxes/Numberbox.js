import { DOMElement } from './DOMElement';

export class Numberbox extends DOMElement {
    constructor(label, selector, minValue, maxValue) {
        super(label, selector);
        this._minValue = minValue;
        this._maxValue = maxValue;
        this.value = this._minValue;
        $(this._selector).on('change', () => {
            this.value = $(this._selector).val();
        });
    }

    get value() {
        return this._value;
    }

    set value(val) {
        if (typeof(val) != 'number') {
            throw new Error('Numberbox value must be a number!');
        }

        if (val != Math.round(val)) {
            throw new Error('Numberbox value must be an integer!');
        }

        if (val < this._minValue || val > this._maxValue) {
            throw new Error(`Numberbox value must be between ${this._minValue} and ${this._maxValue}`);
        }

        this._value = val;
        $(this._selector).val(val);
    }
}