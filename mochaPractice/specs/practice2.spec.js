const cube = require('../src/practice2.js').Cube;

const expect= require('chai').expect;

describe('cubes test suite', function(){

    it('check length of cube', function(){
        let cubeObj = new cube(4);
        let len = cubeObj.getSideLength();
        expect(len).to.be.equal(4);
        
    });

    it('cubes surface area check', function(){
        let cubeObj2= new cube(2);
        let actualSurfaceArea= cubeObj2.getSurfaceArea();
        expect(actualSurfaceArea).to.be.equal(24);
    })


})