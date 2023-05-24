var assert = require('chai').assert;
var numbers = [1, 2, 3, 4, 5];

describe('practice tests ', function () {

    before('before all the test only once', function(){
        console.log('hi..')
    })

    beforeEach('beforeeverytestcase' , function(){
        console.log('hello..')
    })

    after('after the all test', function(){
        console.log('bye..')
    })
    it('arrayCheck', function () {
        assert.isArray(numbers, 'is array of numbers');
        assert.include(numbers, 2, 'array contains 2');
        assert.lengthOf(numbers, 5, 'array contains 5 numbers');
    })

    it('string check', function(){
        var mystmt = "my name is nitesh";
       var check=  mystmt.toString().includes('mahesh');
       /*console.log(check);
        assert.isTrue(check)*/
        var stsmtLength= mystmt.length;
        console.log(stsmtLength);
        assert.equal(stsmtLength, 17);
    })

})


