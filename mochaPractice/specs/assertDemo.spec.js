const expect= require('chai').expect;
// begin a test suite of one or more tests
describe('#sum()', function() {

    // add a test hook
    beforeEach(function() {
      // ...some logic before each test is run
    })
  
    // test a functionality
    it.only('should add numbers', function() {
      // add an assertion
      expect(sum(1, 2)).to.equal(12);
    })
  
    // ...some more tests
  
  })

  function sum(arg1,arg2)
  {
    return arg1+arg2;

  }