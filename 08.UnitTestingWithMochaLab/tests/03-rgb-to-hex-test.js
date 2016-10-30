let rgbToHexColor = require('../03-rgb-to-hex').rgbToHexColor;
let expect = require('chai').expect;

describe('RGB to Hex Color Test', function () {
    describe('Normal cases', function () {
        it('should return #ACFF14 for 172, 255, 20', function () {
            expect(rgbToHexColor(172, 255, 20)).to.be.equal('#ACFF14');
        });

        it('should return #000000 for 0, 0, 0', function () {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal('#000000');
        });

        it('should return #0A141E for 10, 20, 30', function () {
            expect(rgbToHexColor(10, 20, 30)).to.be.equal('#0A141E');
        });
    });

    describe('Special cases', function () {
        it('should return undefined for -10, 20, 30', function () {
            expect(rgbToHexColor(-10, 20, 30)).to.be.equal(undefined);
        });

        it('should return undefined for 10, -20, 30', function () {
            expect(rgbToHexColor(10, -20, 30)).to.be.equal(undefined);
        });

        it('should return undefined for 10, 20, -30', function () {
            expect(rgbToHexColor(10, 20, -30)).to.be.equal(undefined);
        });

        it('should return undefined for -10, -20, -30', function () {
            expect(rgbToHexColor(-10, -20, -30)).to.be.equal(undefined);
        });

        it('should return undefined for 1000, -20, 1', function () {
            expect(rgbToHexColor(1000, -20, 1)).to.be.equal(undefined);
        });

        it('should return undefined for 256, 256, 256', function () {
            expect(rgbToHexColor(256, 256, 256)).to.be.equal(undefined);
        });

        it('should return undefined for 100, 200, 212.2', function () {
            expect(rgbToHexColor(100, 200, 212.2)).to.be.equal(undefined);
        });

        it('should return undefined for 100.5, 200, 212', function () {
            expect(rgbToHexColor(100.5, 200, 212)).to.be.equal(undefined);
        });

        it('should return undefined for "12", 13, 14', function () {
            expect(rgbToHexColor("12", 13, 14)).to.be.equal(undefined);
        });
    });
});