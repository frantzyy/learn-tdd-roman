import { chai } from 'chai';
import { roman } from 'src/roman';

var assert = chai.assert;


describe('confirm setup', function() {
    // Further code for tests goes here

    it('should start empty', function() {
        var arr = [];

        assert.equal(arr.length, 0);
    });

});


describe('confirm file', function() {
    // Further code for tests goes here

    it('should have a name', function() {


        assert.equal(roman.name, "chris");
    });

});