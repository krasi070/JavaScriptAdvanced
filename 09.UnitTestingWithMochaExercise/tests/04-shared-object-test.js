let sharedObject = require('../04-shared-object/shared-object').sharedObject;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
$ = require('jquery');

describe('Shared Object Test', function () {
    let clone;
    beforeEach(function () {
        document.body.innerHTML = '<div id="wrapper"><input type="text" id="name"><input type="text" id="income"></div>';
        clone = Object.create(sharedObject);
    });

    describe('Name Tests', function () {
        describe('Normal cases', function () {
            it('should return null for sharedObject.name', function () {
                expect(clone.name).to.be.equal(null);
            });

            it('should return "dave" for sharedObject.changeName("dave")', function () {
                clone.changeName("dave");
                expect(clone.name).to.be.equal("dave");
                expect($('#name').val()).to.be.equal("dave");
            });

            it('should return "steve" for sharedObject.updateName()', function () {
                $('#name').val('steve');
                clone.updateName();
                expect(clone.name).to.be.equal('steve');
            });
        });

        describe('Special cases', function () {
            it('should return null for sharedObject.changeName("")', function () {
                clone.changeName("");
                expect(clone.name).to.be.equal(null);
                expect($('#name').val()).to.be.equal("");
            });

            it('should return [1, 2, 3] for sharedObject.changeName([1, 2, 3])', function () {
                clone.changeName([1, 2, 3]);
                expect(JSON.stringify(clone.name)).to.be.equal(JSON.stringify([1, 2, 3]));
                expect($('#name').val()).to.be.equal('1,2,3');
            });

            it('should return null for sharedObject.updateName()', function () {
                $('#name').val('');
                clone.updateName();
                expect(clone.name).to.be.equal(null);
            });
        });
    });

    describe('Income Tests', function () {
        describe('Normal cases', function () {
            it('should return null for sharedObject.income', function () {
                expect(clone.income).to.be.equal(null);
            });

            it('should return 1000 for sharedObject.changeIncome(1000)', function () {
                clone.changeIncome(1000);
                expect(clone.income).to.be.equal(1000);
                expect($('#income').val()).to.be.equal('1000');
            });

            it('should return 777 for sharedObject.updateIncome()', function () {
                $('#income').val('777');
                clone.updateIncome();
                expect(clone.income).to.be.equal(777);
            });
        });

        describe('Special cases', function () {
            it('should return null for sharedObject.changeIncome(12.5)', function () {
                clone.changeIncome(12.5);
                expect(clone.income).to.be.equal(null);
                expect($('#income').val()).to.be.equal('');
            });

            it('should return null for sharedObject.changeIncome(-123)', function () {
                clone.changeIncome(-123);
                expect(clone.income).to.be.equal(null);
                expect($('#income').val()).to.be.equal('');
            });

            it('should return null for sharedObject.changeIncome("12")', function () {
                clone.changeIncome("12");
                expect(clone.income).to.be.equal(null);
                expect($('#income').val()).to.be.equal('');
            });

            it('should return null for sharedObject.changeIncome(0)', function () {
                clone.changeIncome(0);
                expect(clone.income).to.be.equal(null);
                expect($('#income').val()).to.be.equal('');
            });

            it('should return null for sharedObject.updateIncome() where income is string', function () {
                $('#income').val('my str');
                clone.updateIncome();
                expect(clone.income).to.be.equal(null);
            });

            it('should return null for sharedObject.updateIncome() where income isnt int', function () {
                $('#income').val('1999.99');
                clone.updateIncome();
                expect(clone.income).to.be.equal(null);
            });

            it('should return null for sharedObject.updateIncome() where income is negative', function () {
                $('#income').val('-1');
                clone.updateIncome();
                expect(clone.income).to.be.equal(null);
            });

            it('should return null for sharedObject.updateIncome() where income is 0', function () {
                $('#income').val('0');
                clone.updateIncome();
                expect(clone.income).to.be.equal(null);
            });
        });
    });
});