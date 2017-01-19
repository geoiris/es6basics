"use strict";

var assert = require('assert');


describe('Learn about : Let it go var !', function () {
!
    it('To Complete', function () {
        var myVar = 1;
        let myLet = 2;

        if (true) {
            var myVar = 3;
            let myLet = 4;
        }
        assert.equal(myVar, 3);
        assert.equal(myLet, 2);
    });

});
