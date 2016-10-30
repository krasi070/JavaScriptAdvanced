let createCalculator = require('../04-add-subtract').createCalculator;
let expect = require('chai').expect;

describe('Create Calculator Test', function () {
    let calc;
    beforeEach(function () {
        calc = createCalculator();
    });
    describe('Normal cases', function () {
        it('should contain properties add, subtract and get', function () {
            expect(calc).to.have.property('add');
            expect(calc).to.have.property('subtract');
            expect(calc).to.have.property('get');
        });

        it('should return 10 for add 1, add 4, add 5', function () {
            calc.add(1);
            calc.add(4);
            calc.add(5);
            expect(calc.get()).to.be.equal(10);
        });

        it('should return 5 for add 6, subtract 1', function () {
            calc.add(6);
            calc.subtract(1);
            expect(calc.get()).to.be.equal(5);
        });
    });

    describe('Special cases', function () {
        it('should return 0 for get', function () {
            expect(calc.get()).to.be.equal(0);
        });

        it('should return -12 for subtract 12', function () {
            calc.subtract(12);
            expect(calc.get()).to.be.equal(-12);
        });

        it('should return 133 for add "12", add "121"', function () {
            calc.add("12");
            calc.add("121");
            expect(calc.get()).to.be.equal(133);
        });

        it('should return 1.2 for add 5.1, subtract 3.9', function () {
            calc.add(5.1);
            calc.subtract(3.9);
            expect(calc.get()).to.be.equal(5.1 - 3.9);
        });

        it('should return 10 for add "20.2", subtract 10.2', function () {
            calc.add("20.2");
            calc.subtract(10.2);
            expect(calc.get()).to.be.equal(20.2 - 10.2);
        });
    });
});