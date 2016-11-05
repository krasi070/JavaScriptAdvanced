let SortedList = require('../SortedList').SortedList;
let expect = require('chai').expect;

describe('SortedList Tests', function () {
    let sortedList;
    beforeEach(function () {
        sortedList = new SortedList();
    });

    describe('Normal cases', function () {
        it('size should be 0 on init', function () {
            expect(sortedList.size).to.be.equal(0);
        });

        it('should be empty on init', function () {
            expect(JSON.stringify(sortedList.list)).to.be.equal('[]');
        });

        it('should have 5 elements after 5 adds', function () {
            for (let i = 0; i < 5; i++) {
                sortedList.add(i);
            }

            expect(sortedList.size).to.be.equal(5);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[0,1,2,3,4]');
        });

        it('should have 2 elements after 5 adds and 3 removes', function () {
            for (let i = 0; i < 5; i++) {
                sortedList.add(i);
                if (i % 2 == 0) {
                    sortedList.remove(0);
                }
            }

            expect(sortedList.size).to.be.equal(2);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[3,4]');
        });

        it('should be sorted after 3 adds', function () {
            sortedList.add(5);
            sortedList.add(4);
            sortedList.add(-1);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[-1,4,5]');
        });

        it('should be sorted after 5 adds and after 2 removes', function () {
            sortedList.add(25);
            sortedList.add(4);
            sortedList.add(-1);
            sortedList.add(0);
            sortedList.add(15);
            sortedList.remove(0);
            sortedList.remove(2);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[0,4,25]');
        });

        it('should return -100 for get(0)', function () {
            sortedList.add(5);
            sortedList.add(4);
            sortedList.add(-100);
            expect(sortedList.get(0)).to.be.equal(-100);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[-100,4,5]');
        });

        it('should return 23 for get(4)', function () {
            sortedList.add(5);
            sortedList.add(4);
            sortedList.add(-100);
            sortedList.add(23);
            sortedList.add(13);
            expect(sortedList.get(4)).to.be.equal(23);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[-100,4,5,13,23]');
        });

        it('should remove element', function () {
            sortedList.add(100);
            sortedList.remove(0);
            expect(sortedList.size).to.be.equal(0);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[]');
        });

        it('should remove 5 from sortedList', function () {
            sortedList.add(1);
            sortedList.add(2);
            sortedList.add(3);
            sortedList.add(4);
            sortedList.add(5);
            sortedList.remove(4);
            expect(sortedList.list.indexOf(5)).to.be.equal(-1);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[1,2,3,4]');
        });

        it('should return correct size', function () {
            expect(sortedList.size).to.be.equal(0);
            sortedList.add(1);
            expect(sortedList.size).to.be.equal(1);
            sortedList.add(2);
            expect(sortedList.size).to.be.equal(2);
            sortedList.add(3);
            expect(sortedList.size).to.be.equal(3);
            sortedList.remove(1);
            expect(sortedList.size).to.be.equal(2);
            sortedList.add(4);
            expect(sortedList.size).to.be.equal(3);
            sortedList.add(5);
            expect(sortedList.size).to.be.equal(4);
            sortedList.add(6);
            expect(sortedList.size).to.be.equal(5);
            sortedList.remove(4);
            expect(sortedList.size).to.be.equal(4);
        });
    });

    describe('Special cases', function () {
        it('should have add function', function () {
            expect(SortedList.prototype).to.have.property('add');
        });

        it('should have remove function', function () {
            expect(SortedList.prototype).to.have.property('remove');
        });

        it('should have get function', function () {
            expect(SortedList.prototype).to.have.property('get');
        });

        it('should have size getter', function () {
            expect(SortedList.prototype).to.haveOwnProperty('size');
        });

        it('should return collection is empty for remove when size is 0', function () {
            expect(JSON.stringify(sortedList.list)).to.be.equal('[]');
            expect(sortedList.remove.bind(sortedList, 0)).to.throw('Collection is empty.');
        });

        it('should return collection is empty for get when size is 0', function () {
            expect(JSON.stringify(sortedList.list)).to.be.equal('[]');
            expect(sortedList.get.bind(sortedList, 0)).to.throw('Collection is empty.');
        });

        it('should return index out of bounds for remove when given negative index', function () {
            sortedList.add(1);
            sortedList.add(2);
            sortedList.add(3);
            sortedList.add(4);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[1,2,3,4]');
            expect(sortedList.remove.bind(sortedList, -2)).to.throw('Index was outside the bounds of the collection.');
        });

        it('should return index out of bounds for remove when given index equal to size', function () {
            sortedList.add(1);
            sortedList.add(2);
            sortedList.add(3);
            sortedList.add(4);
            sortedList.remove(3);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[1,2,3]');
            expect(sortedList.remove.bind(sortedList, 3)).to.throw('Index was outside the bounds of the collection.');
        });

        it('should return index out of bounds for remove when given index higher than size', function () {
            sortedList.add(1);
            sortedList.add(2);
            sortedList.add(3);
            sortedList.add(4);
            sortedList.remove(3);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[1,2,3]');
            expect(sortedList.remove.bind(sortedList, 100)).to.throw('Index was outside the bounds of the collection.');
        });

        it('should return index out of bounds for get when given negative index', function () {
            sortedList.add(1);
            sortedList.add(2);
            sortedList.add(3);
            sortedList.add(4);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[1,2,3,4]');
            expect(sortedList.get.bind(sortedList, -2)).to.throw('Index was outside the bounds of the collection.');
        });

        it('should return index out of bounds for get when given index equal to size', function () {
            sortedList.add(1);
            sortedList.add(2);
            sortedList.add(3);
            sortedList.add(4);
            sortedList.remove(3);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[1,2,3]');
            expect(sortedList.get.bind(sortedList, 3)).to.throw('Index was outside the bounds of the collection.');
        });

        it('should return index out of bounds for get when given index higher than size', function () {
            sortedList.add(1);
            sortedList.add(2);
            sortedList.add(3);
            sortedList.add(4);
            sortedList.remove(3);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[1,2,3]');
            expect(sortedList.get.bind(sortedList, 12)).to.throw('Index was outside the bounds of the collection.');
        });

        it('add should work with floating-point numbers', function () {
            expect(sortedList.size).to.be.equal(0);
            sortedList.add(1.2);
            expect(sortedList.size).to.be.equal(1);
            sortedList.add(1121.13);
            expect(sortedList.size).to.be.equal(2);
            sortedList.add(181.313114);
            expect(sortedList.size).to.be.equal(3);
            sortedList.add(1.12);
            expect(sortedList.size).to.be.equal(4);
            sortedList.add(862.0009);
            expect(sortedList.size).to.be.equal(5);
            expect(JSON.stringify(sortedList.list)).to.be.equal('[1.12,1.2,181.313114,862.0009,1121.13]');
        });
    });
});