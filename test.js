const { expect } = require('chai');


// Testing FRAMEWORK
function expectToBe(actualValue, expectedValue) {
  if (actualValue === expectedValue) {
    return 'passed: ' + actualValue + ' is equal to ' + expectedValue;
  } else {
    return 'failed: expected ' + actualValue + ' to be ' + expectedValue;
  }
}

// IMPLEMENTATIOns
var index = require('./index');
var convertNumberToEnglishString = index.convertNumberToEnglishString;

// Test CASES

var fiftyFiveString = convertNumberToEnglishString(55);
console.log(expectToBe(fiftyFiveString, 'fiftyfive'));

describe('BottleOfBeer', function () {
  it('it should return fiftyfive when the value 55 is passed', function (){
    expect(convertNumberToEnglishString(55)).to.equal('fiftyfive')
  })
  it('it should return thirty when the value 30 is passed', function (){
    expect(convertNumberToEnglishString(30)).to.equal('thirty')
  })
  it('it should return no when the value 0 is passed', function (){
    expect(convertNumberToEnglishString(0)).to.equal('no')
  })
it('it should return seven when the value 7 is passed', function (){
  expect(convertNumberToEnglishString(7)).to.equal('seven')
})
it('it should return twelve when the value 12 is passed', function (){
  expect(convertNumberToEnglishString(12)).to.equal('twelve')
})
it('it should return nineteen when the value 19 is passed', function (){
  expect(convertNumberToEnglishString(19)).to.equal('nineteen')
})
it('it should return ten when the value 10 is passed', function (){
  expect(convertNumberToEnglishString(10)).to.equal('ten')
})
it('it should return twenty when the value 20 is passed', function (){
  expect(convertNumberToEnglishString(20)).to.equal('twenty')
})
it('it should return ninetynine when the value 99 is passed', function (){
  expect(convertNumberToEnglishString(99)).to.equal('ninetynine')
})
});
