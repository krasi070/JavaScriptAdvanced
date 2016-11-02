class TextBox {
    constructor(selector, invalidSymbols) {
        this.selector = selector;
        this._invalidSymbols = invalidSymbols;
        this._elements = $(selector);
        let that = this;
        $(this.selector).on('input', function () {
            that.value = $(this).val();
        });
    }

    get value() {
        return $(this.selector).val();
    }

    set value(value) {
        $(this.selector).val(value);
    }

    get elements() {
        return this._elements;
    }

    isValid() {
        return !this.value.match(this._invalidSymbols);
    }
}