let expect = require('chai').expect;

describe('Add Delete in List Tests', function () {
    let list;
    beforeEach(function () {
        list = (function(){
            let data = [];
            return {
                add: function(item) {
                    data.push(item);
                },
                delete: function(index) {
                    if (Number.isInteger(index) && index >= 0 && index < data.length) {
                        return data.splice(index, 1)[0];
                    } else {
                        return undefined;
                    }
                },
                toString: function() {
                    return data.join(", ");
                }
            };
        })();
    });

    describe('Normal cases', function () {
        it('should have add function', function () {
            expect(list).to.have.property('add');
        });

        it('should have delete function', function () {
            expect(list).to.have.property('delete');
        });

        it('should have toString function', function () {
            expect(list).to.have.property('toString');
        });

        it('should have 2 elements after 2 adds', function () {
            list.add(1);
            list.add(2);
            expect(list.toString()).to.be.equal('1, 2');
        });

        it('should have added many elements after many adds', function () {
            let result = '';
            for (let i = 0; i < 100; i++) {
                list.add(i);
                result += `${i}`;
                if (i < 99) {
                    result += ', ';
                }
            }

            expect(list.toString()).to.be.equal(result);
        });

        it('should delete correct element', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.delete(1)).to.be.equal(2);
        });

        it('should delete all elements', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.delete(1)).to.be.equal(2);
            expect(list.delete(1)).to.be.equal(3);
            expect(list.delete(0)).to.be.equal(1);
        });

        it('should return "0, 2, 3" when toString is called', function () {
            list.add(0);
            list.add(2);
            list.add(3);
            expect(list.toString()).to.be.equal('0, 2, 3');
        });

        it('should return "0, 3" when toString is called', function () {
            list.add(0);
            list.add(2);
            list.add(3);
            list.delete(1);
            expect(list.toString()).to.be.equal('0, 3');
        });
    });

    describe('Special cases', function () {
        it('should return "" when toString is called with no elements', function () {
            expect(list.toString()).to.be.equal('');
        });

        it('should be able to add non number elements', function () {
            list.add("1");
            list.add({});
            let date = new Date();
            list.add(date);
            expect(list.toString()).to.be.equal('1, [object Object], ' + date);
        });

        it('should return undefined when given non integer for delete', function () {
            list.add(1);
            list.add(1);
            list.add(1);
            expect(list.delete(1.01)).to.be.equal(undefined);
        });

        it('should return undefined when given negative number for delete', function () {
            list.add(1);
            list.add(1);
            list.add(1);
            expect(list.delete(-2)).to.be.equal(undefined);
        });

        it('should return undefined when given number bigger than list length for delete', function () {
            list.add(1);
            list.add(1);
            list.add(1);
            expect(list.delete(5)).to.be.equal(undefined);
        });

        it('should return undefined when given non number for delete', function () {
            list.add(1);
            list.add(1);
            list.add(1);
            expect(list.delete("1")).to.be.equal(undefined);
        });
    });
});