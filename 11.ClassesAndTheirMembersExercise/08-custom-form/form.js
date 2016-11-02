(function() {
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

    class Form {
        constructor(...textBoxes) {
            this._element = $('<div>').addClass('form');
            this._textBoxes = [];
            for (let textBox of textBoxes) {
                if (textBox instanceof TextBox) {
                    this._textBoxes.push(textBox);
                    $(this._element).append($(textBox.elements));
                } else {
                    throw new Error('Passed element wasn\'t of type TextBox!');
                }
            }
        }

        submit() {
            let allValid = true;
            for (let textBox of this._textBoxes) {
                if (textBox.isValid()) {
                    $(textBox.elements).css('border', '2px solid green');
                } else {
                    $(textBox.elements).css('border', '2px solid red');
                    allValid = false;
                }
            }

            return allValid;
        }

        attach(selector) {
            $(selector).append($(this._element));
        }
    }

    return {
        Textbox: TextBox,
        Form: Form
    }
})();