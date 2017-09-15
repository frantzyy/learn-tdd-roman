'use strict';

var _chai = require('chai');

var chai = _interopRequireWildcard(_chai);

var _roman = require('../src/roman');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

describe('confirm setup', function () {

    it('should have assert available for tdd', function () {
        var arr = [];

        assert.equal(arr.length, 0);
    });

    it('should have expect available for bdd', function () {
        var arr = [];

        expect(arr.length).to.equal(0);
    });

    it('should have should available for bdd', function () {
        var arr = [];

        arr.should.have.lengthOf(0);
    });
});

describe('confirm file', function () {
    it('should have a name', function () {
        assert.equal(_roman.name, "chris");
    });
});