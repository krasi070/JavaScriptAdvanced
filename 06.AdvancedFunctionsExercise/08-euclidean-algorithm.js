function euclideanAlgorithm(num1, num2) {
    let gcdCalculator = (function (a, b) {
        return function () {
            if (a > b) {
                a -= b;
            } else {
                b -= a;
            }

            return { a: a, b: b };
        }
    })(num1, num2);

    let result = gcdCalculator();
    while (result.a > 0 && result.b > 0) {
        result = gcdCalculator();
    }

    return result.a == 0 ? result.b : result.a;
}