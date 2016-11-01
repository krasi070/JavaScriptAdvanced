let isOddOrEven = require('../01-even-or-odd').isOddOrEven;
let expect = require('chai').expect;

describe('Even or Odd Test', function () {
    describe('Normal cases', function () {
        it('should return even for string', function () {
            expect(isOddOrEven('string')).to.be.equal('even');
        });

        it('should return odd for str', function () {
            expect(isOddOrEven('str')).to.be.equal('odd');
        });
    });

    describe('Special cases', function () {
        it('should return even for ""', function () {
            expect(isOddOrEven('')).to.be.equal('even');
        });

        it('should return undefined for 12(number)', function () {
            expect(isOddOrEven(12)).to.be.equal(undefined);
        });
    });
});