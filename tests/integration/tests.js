const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
const expect = chai.expect;

describe('calculator functionality', function() {
  beforeEach(function() {
    browser.ignoreSynchronization = true;
    browser.get('http://localhost:3000');
  });

  // write integration tests here in the form of "it should do something..."
  it('should have working number buttons', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number2')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
    element(by.css('#number0')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('20')
    element(by.css('#number1')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('201')
    element(by.css('#number3')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2013')
    element(by.css('#number4')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('20134')
    element(by.css('#number5')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('201345')
    element(by.css('#number6')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2013456')
    element(by.css('#number7')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('20134567')
    element(by.css('#number8')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('201345678')
    element(by.css('#number9')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2013456789')
  })
  it('should update the display with the results of an addition', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('9')
  })
  it('should update the display with the results of an subtraction', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('3')
  })
  it('should update the display with the results of an multiplication', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('18')
  })
  it('should update the display with the results of an division', function(){
    running_total = element(by.css('#running_total'))
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('2')
  })
  it('should be able to chain multiple operations together', function(){
    element(by.css('#number6')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number3')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number8')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_multiply')).click();
    element(by.css('#number5')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('40')
  })
  it('should be able to handle negative outputs', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_subtract')).click();
    element(by.css('#number9')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('-8')
  })
  it('should be able to handle decimal outputs', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('0.5')
  })
  it('should be able to handle very large numbers', function(){
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#number1')).click();
    element(by.css('#operator_add')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#number2')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('333333333333')
  })
  it('should return infinity when dividing by zero', function(){
    element(by.css('#number1')).click();
    element(by.css('#operator_divide')).click();
    element(by.css('#number0')).click();
    element(by.css('#operator_equals')).click();
    expect(running_total.getAttribute('value')).to.eventually.equal('Infinity')
  })


});
