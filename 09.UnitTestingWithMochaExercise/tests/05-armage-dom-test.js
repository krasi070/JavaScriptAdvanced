let nuke = require('../05-armage-dom/armage-dom').nuke;
let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
$ = require('jquery');

describe('ArmageDOM Test', function () {
    beforeEach(function () {
        document.body.innerHTML = '<div id="target">' +
        '<div class="nested target">' +
            '<p>This is some text</p>' +
        '</div>' +
        '<div class="target">' +
            '<p>Empty div</p>' +
        '</div>' +
        '<div class="inside">' +
            '<span class="nested">Some more text</span>' +
            '<span class="target">Some more text</span>' +
        '</div>' +
    '</div>';
    });

    describe('Normal cases', function () {
        it('should remove .target.nested for nuke(".target", ".nested")', function () {
            nuke(".target", ".nested");
            expect($('.target.nested').toArray().length).to.be.equal(0);
        });

        it('should remove .target.nested for nuke("div", ".inside")', function () {
            nuke("div", ".inside");
            expect($('div .inside').toArray().length).to.be.equal(0);
        });

        it('shouldnt remove anything for nuke(".target", ".inside")', function () {
            let previous = $('.target').toArray().length;
            nuke(".target", ".inside");
            expect($('.target').toArray().length).to.be.equal(previous);
        });
    });

    describe('Special cases', function () {
        it('shouldnt remove anything for nuke(".target", ".target")', function () {
            let previousLength = $('.target').toArray().length;
            nuke(".target", ".target");
            expect($('.target').toArray().length).to.be.equal(previousLength);
        });

        it('shouldnt remove anything for nuke(".target", "nested")', function () {
            let previousLength = $('.target').toArray().length;
            nuke(".target", "nested");
            expect($('.target').toArray().length).to.be.equal(previousLength);
        });

        it('shouldnt remove anything for nuke(".target", 1)', function () {
            let previousLength = $('.target').toArray().length;
            nuke(".target", 1);
            expect($('.target').toArray().length).to.be.equal(previousLength);
        });

        it('shouldnt remove anything for nuke(".target")', function () {
            let previousLength = $('.target').toArray().length;
            nuke(".target");
            expect($('.target').toArray().length).to.be.equal(previousLength);
        });

        it('shouldnt remove anything for nuke()', function () {
            let previousHtml = document.body.innerHTML + document.head.innerHTML;
            nuke();
            expect(document.body.innerHTML + document.head.innerHTML).to.be.equal(previousHtml);
        });
    });
});