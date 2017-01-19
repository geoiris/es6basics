"use strict";

var assert = require('assert');

console.log("In ES6 we have Type ! So, for help you this is all the list : symbol, function, boolean, number, string, object and undefined. You have to find the good type for each test. Enjoy it!");

describe('Learn basics types', function () {

    it('Should find the type of true', function () {
        var actual = true;
        assert.equal(typeof actual, 'boolean');
    });

    it('Should find the type of this text : I love ES6', function () {
        var actual = 'I love ES6';
        assert.equal(typeof actual, 'string');
    });

    it('Should find the type of logical expression', function () {
        var actual1 = 6 === 6;
        var actual2 = 0 || (0).toString();
        assert.equal(typeof actual1, 'boolean');
        assert.equal(typeof actual2, 'string');
    });

    it('Should find the type of 2017 and 7.4 (number of people in the world this year)', function () {
        var actual1 = 2016;
        var actual2 = 7.4;
        assert.equal(typeof actual1, 'number');
        assert.equal(typeof actual2, 'number');
    });

    it('Should find the type of ... it\'s a trap !', function () {
        var actual1 = NaN;
        var actual2 = 1 / 0;
        assert.equal(typeof actual1, 'number');
        assert.equal(typeof actual2, 'number');
    });

    it('Should find the type of this var', function () {
        var actual;
        assert.equal(typeof actual, 'undefined');
    });

    it('Should find the type of method', function () {
        function fun() { }
        var actual = function () { };
        assert.equal(typeof fun, 'function');
        assert.equal(typeof actual, 'function');
    });

    it('Should find the type of this person', function () {
        var person = { name: "Geo" };
        assert.equal(typeof person, 'object');
    });

    it('Should find the type of this list', function () {
        var list = ["banana!", "tomato", "turnip"];
        assert.equal(typeof list, 'object');
    });

    it('Could you find the other type ?', function () {

        assert.equal(typeof /Regexp/g, 'object');
        assert.equal(typeof Symbol(), 'symbol');
        assert.equal(typeof null, 'object');
        assert.equal(typeof new Date(), 'object');
        assert.equal(typeof Date, 'function');
    });

    it('Bonus : Could you find the value of result ?', function () {
        var result = Symbol("bonus") === Symbol("bonus");
        assert.equal(result, false);
    });
});
