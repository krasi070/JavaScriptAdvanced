let mathEnforcer = require('../03-math-enforcer').mathEnforcer;
let expect = require('chai').expect;

describe('Math Enforcer Test', function () {
    describe('Normal cases', function () {
        it('should return 100 for addFive(95)', function () {
            expect(mathEnforcer.addFive(95)).to.be.equal(100);
        });

        it('should return -10 for addFive(-15)', function () {
            expect(mathEnforcer.addFive(-15)).to.be.equal(-10);
        });

        it('should return -15 for subtractTen(-5)', function () {
            expect(mathEnforcer.subtractTen(-5)).to.be.equal(-15);
        });

        it('should return 12.5 for addFive(7.5)', function () {
            expect(mathEnforcer.addFive(7.5)).to.be.equal(7.5 + 5);
        });

        it('should return 35.2 for subtractTen(45.2)', function () {
            expect(mathEnforcer.subtractTen(45.2)).to.be.equal(45.2 - 10);
        });

        it('should return 12 for sum(7, 5)', function () {
            expect(mathEnforcer.sum(7, 5)).to.be.equal(12);
        });

        it('should return 3.7 for sum(1.5, 2.2)', function () {
            expect(mathEnforcer.sum(1.5, 2.2)).to.be.equal(1.5 + 2.2);
        });

        it('should return -12 for sum(-2, -5)', function () {
            expect(mathEnforcer.sum(-2, -5)).to.be.equal(-7);
        });
    });

    describe('Special cases', function () {
        it('should return undefined for addFive("15")', function () {
            expect(mathEnforcer.addFive('15')).to.be.equal(undefined);
        });

        it('should return undefined for subtractTen([10])', function () {
            expect(mathEnforcer.subtractTen([10])).to.be.equal(undefined);
        });

        it('should return undefined for sum(1, "2")', function () {
            expect(mathEnforcer.sum(1, '2')).to.be.equal(undefined);
        });

        it('should return undefined for sum("1", 2)', function () {
            expect(mathEnforcer.sum('1', 2)).to.be.equal(undefined);
        });

        it('should return undefined for sum(new Set(), "2")', function () {
            expect(mathEnforcer.sum(new Set(), "2")).to.be.equal(undefined);
        });
    });
});