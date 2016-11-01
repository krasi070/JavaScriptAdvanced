let lookupChar = require('../02-char-lookup').lookupChar;
let expect = require('chai').expect;

describe('Char Lookup Test', function () {
    describe('Normal cases', function () {
        it('should return "a" for "car", 1', function () {
            expect(lookupChar('car', 1)).to.be.equal('a');
        });

        it('should return " " for "Hello my name is BEEEEEEEP.", 8', function () {
            expect(lookupChar('Hello my name is BEEEEEEEP.', 8)).to.be.equal(' ');
        });
    });

    describe('Special cases', function () {
        it('should return undefined for [1, 2, 3], 2', function () {
            expect(lookupChar([1, 2, 3], 1)).to.be.equal(undefined);
        });

        it('should return undefined for "this is a special case", "10"', function () {
            expect(lookupChar("this is a special case", "10")).to.be.equal(undefined);
        });

        it('should return undefined for new Map(), []', function () {
            expect(lookupChar(new Map(), [])).to.be.equal(undefined);
        });

        it('should return undefined for "index", 1.2', function () {
            expect(lookupChar('index', 1.2)).to.be.equal(undefined);
        });

        it('should return "Incorrect index" for "index", 5', function () {
            expect(lookupChar('index', 5)).to.be.equal('Incorrect index');
        });

        it('should return "Incorrect index" for "index", -2', function () {
            expect(lookupChar('index', -2)).to.be.equal('Incorrect index');
        });
    });
});