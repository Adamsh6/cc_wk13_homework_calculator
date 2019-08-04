var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()

  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })
  it('can add', function(){
    calculator.previousTotal = 4
    calculator.add(1)
    assert.equal(5, calculator.runningTotal)
  })
  it('can subtract', function(){
    calculator.previousTotal = 7
    calculator.subtract(4)
    assert.equal(3, calculator.runningTotal)
  })
  it('can multiply', function(){
    calculator.previousTotal = 3
    calculator.multiply(5)
    assert.equal(15, calculator.runningTotal)
  })
  it('can divide', function(){
    calculator.previousTotal = 21
    calculator.divide(7)
    assert.equal(3, calculator.runningTotal)
  })
  it('can concatenate multiple number clicks', function(){
    calculator.numberClick(4)
    calculator.numberClick(1)
    calculator.numberClick(8)
    assert.equal(418, calculator.runningTotal)
  })
  it('can chain multiple operations together', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(8)
    calculator.operatorClick('-')
    calculator.numberClick(5)
    calculator.operatorClick('=')
    assert.equal(35, calculator.runningTotal)
  })
  it('can clear the running total without affecting the calculator', function(){
    calculator.numberClick(4)
    calculator.operatorClick('+')
    calculator.numberClick(1)
    calculator.operatorClick('*')
    calculator.numberClick(8)
    calculator.operatorClick('-')
    calculator.numberClick(5)
    calculator.clearClick()
    calculator.operatorClick('=')
    assert.equal(40, calculator.runningTotal)
  })

});
