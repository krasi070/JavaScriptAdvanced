function sum() {
    let domModifier = (function () {
        let num1, num2, result;
        return {
            init: (selector1, selector2, resultSelector) => {
                num1 = $(selector1);
                num2 = $(selector2);
                result = $(resultSelector);
            },
            add: () => {
                $(result).val(Number($(num1).val()) + Number($(num2).val()));
            },
            subtract: () => {
                $(result).val($(num1).val() - $(num2).val());
            }
        };
    })();

    domModifier.init('#num1', '#num2', '#result');
    $('#sumButton').on('click', domModifier.add);
    $('#subtractButton').on('click', domModifier.subtract);

    return domModifier;
}