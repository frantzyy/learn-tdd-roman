import { assert } from 'chai';
import { name } from '../src/roman';


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


        assert.equal(name, "chris");
    });

});