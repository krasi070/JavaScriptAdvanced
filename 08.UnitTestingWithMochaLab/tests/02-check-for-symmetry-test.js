let isSymmetric = require('../02-check-for-symmetry').isSymmetric;
let expect = require('chai').expect;

describe('Is Symmetric Test', function () {
    describe('Normal cases', function () {
        it('should return true for [2, 3, 1, 3, 2]', function () {
            expect(isSymmetric([2, 3, 1, 3, 2])).to.be.equal(true);
        });

        it('should return true for [1, 1]', function () {
            expect(isSymmetric([1, 1])).to.be.equal(true);
        });

        it('should return false for [2, 3, 5]', function () {
            expect(isSymmetric([2, 3, 5])).to.be.equal(false);
        });

        it('should return false for [2, 3, 3, -2]', function () {
            expect(isSymmetric([2, 3, 3, -2])).to.be.equal(false);
        });
    });

    describe('Special cases', function () {
        it('should return true for []', function () {
            expect(isSymmetric([])).to.be.equal(true);
        });

        it('should return true for [1]', function () {
            expect(isSymmetric([1])).to.be.equal(true);
        });

        it('should return false for 1, 2, 3, 4', function () {
            expect(isSymmetric(1, 2, 3, 4)).to.be.equal(false);
        });

        it('should return true for ["str", 2, [], 2, "str"]', function () {
            expect(isSymmetric(["str", 2, [], 2, "str"])).to.be.equal(true);
        });

        it('should return false for ["str", 1]', function () {
            expect(isSymmetric(["str", 1])).to.be.equal(false);
        });

        it('should return true for [[], [], []]', function () {
            expect(isSymmetric([[], [], []])).to.be.equal(true);
        });
    });
});