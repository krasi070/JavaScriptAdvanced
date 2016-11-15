let createList = require('../list-add-swap-shift-left-right').createList;
let expect = require('chai').expect;

describe('List tests', function () {
    let list;
    beforeEach(function () {
        list = createList();
    });

    function addElementsToList(l) {
        let result = [];
        for (let i = 0; i < 10; i++) {
            if (i % 2 == 0) {
                l.add(i);
                result.push(i);
            } else if (i == 5) {
                l.add([1, 'two', 3]);
                result.push([1, 'two', 3]);
            } else {
                l.add('' + i);
                result.push('' + i);
            }
        }

        return result;
    }

    describe('Add tests', function () {
        it('should have add function', function () {
            expect(list).to.haveOwnProperty('add');
        });

        it('should add all elements', function () {
            let result = addElementsToList(list);
            expect(list.toString()).to.be.equal(result.join(', '));
        });
    });

    describe('Shift Left tests', function () {
        it('should have shiftLeft function', function () {
            expect(list).to.haveOwnProperty('shiftLeft');
        });

        it('should shift left correctly once', function () {
            let result = addElementsToList(list);
            list.shiftLeft();
            let item = result.shift();
            result.push(item);
            expect(list.toString()).to.be.equal(result.join(', '));
        });

        it('should shift correctly 100 times', function () {
            let result = addElementsToList(list);
            for (let i = 0; i < 100; i++) {
                list.shiftLeft();
                let item = result.shift();
                result.push(item);
                expect(list.toString()).to.be.equal(result.join(', '));
            }
        });

        it('shouldn\'t shift if there is only one element', function () {
            list.add(1);
            list.shiftLeft();
            expect(list.toString()).to.be.equal('1');
        });
    });

    describe('Shift Right tests', function () {
        it('should have shiftRight function', function () {
            expect(list).to.haveOwnProperty('shiftRight');
        });

        it('should shift right correctly once', function () {
            let result = addElementsToList(list);
            list.shiftRight();
            let item = result.pop();
            result.unshift(item);
            expect(list.toString()).to.be.equal(result.join(', '));
        });

        it('should shift correctly 100 times', function () {
            let result = addElementsToList(list);
            for (let i = 0; i < 100; i++) {
                list.shiftRight();
                let item = result.pop();
                result.unshift(item);
                expect(list.toString()).to.be.equal(result.join(', '));
            }
        });

        it('shouldn\'t shift if there is only one element', function () {
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.be.equal('1');
        });
    });

    describe('Swap tests', function () {
        it('should have swap function', function () {
            expect(list).to.haveOwnProperty('swap');
        });

        it('should swap correctly once', function () {
            let result = addElementsToList(list);
            expect(list.swap(6, 9)).to.be.equal(true);
            let temp = result[6];
            result[6] = result[9];
            result[9] = temp;
            expect(list.toString()).to.be.equal(result.join(', '));
        });

        it('should swap correctly multiple times', function () {
            let result = addElementsToList(list);
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (i != j) {
                        expect(list.swap(i, j)).to.be.equal(true);
                        let temp = result[i];
                        result[i] = result[j];
                        result[j] = temp;
                        expect(list.toString()).to.be.equal(result.join(', '));
                    }
                }
            }
        });

        it('should not work when index isn\'t integer', function () {
            let result = addElementsToList(list);
            expect(list.swap(2.0001, 5)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
            expect(list.swap(3, 4.4)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
            expect(list.swap(2.5, 8.9)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
        });

        it('should not work when index is less than 0', function () {
            let result = addElementsToList(list);
            expect(list.swap(-1, 5)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
            expect(list.swap(3, -4)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
            expect(list.swap(-2, -9)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
        });

        it('should not work when index is equal to length', function () {
            let result = addElementsToList(list);
            expect(list.swap(10, 5)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
            expect(list.swap(3, 10)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
            expect(list.swap(10, 10)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
        });

        it('should not work when index is bigger than length', function () {
            let result = addElementsToList(list);
            expect(list.swap(11, 5)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
            expect(list.swap(3, 12)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
            expect(list.swap(10, 14)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
        });

        it('should not work when indexes are equal', function () {
            let result = addElementsToList(list);
            expect(list.swap(2, 2)).to.be.equal(false);
        });

        it('should not work when index isn\'t given', function () {
            let result = addElementsToList(list);
            expect(list.swap(5)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
            expect(list.swap()).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
            expect(list.swap(8.9)).to.be.equal(false);
            expect(list.toString()).to.be.equal(result.join(', '));
        });
    });

    describe('toString tests', function () {
        it('should have toString function', function () {
            expect(list).to.haveOwnProperty('toString');
        });

        it('list should be empty', function () {
            expect(list.toString()).to.be.equal('');
        });
    });
});