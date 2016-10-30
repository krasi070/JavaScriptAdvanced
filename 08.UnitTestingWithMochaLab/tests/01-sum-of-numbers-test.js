let sum = require('../01-sum-of-numbers').sum;
let expect = require('chai').expect;

describe('Sum of Numbers Test', function () {
    describe('Normal cases', function () {
        it('should return 6 for [1, 2, 3]', function () {
            expect(sum([1, 2, 3])).to.be.equal(6);
        });
    });

    describe('Special cases', function () {
        it('should return 10 for [10]', function () {
            expect(sum([10])).to.be.equal(10);
        });

        it('should return 7.5 for [1.5, 2.5, 3.5]', function () {
            expect(sum([1.5, 2.5, 3.5])).to.be.equal(1.5 + 2.5 + 3.5);
        });

        it('should return 0 for []', function () {
            expect(sum([])).to.be.equal(0);
        });
    });
});