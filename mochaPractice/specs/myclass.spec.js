var myclass = require("../src/practice1.js") 

var myObj = new myclass();
var chai = require("chai");
var expect = chai.expect;

describe('maths test suite', function(){

    it('test for addition', function(){
       // console.log(myObj.add(23,20));
        var x = myObj.add(23,20);
        expect(x).to.be.equal(43);
    });

    it('test for multiplication', function(){
        let p = 30; let q= 20;
        let r= p*q;
        expect(r).to.be.equal(500);
    });

});