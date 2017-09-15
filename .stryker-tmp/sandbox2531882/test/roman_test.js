import * as chai from 'chai';

let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

import { name } from '../src/roman';


describe('confirm setup', function() {

    it('should have assert available for tdd', function() {
        var arr = [];

        assert.equal(arr.length, 0);
    });

    it('should have expect available for bdd', function() {
        var arr = [];

        expect(arr.length).to.equal(0);
    });

    it('should have should available for bdd', function() {
        var arr = [];

        arr.should.have.lengthOf(0);
    });

});


describe('confirm file', function() {
    it('should have a name', function() {
        assert.equal(name, "chris");
    });

});