const {
  expect
} = require('chai');


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

describe('BottleOfBeer', function() {
  it('it should return no when the value 0 is passed', function() {
    expect(convertNumberToEnglishString(0)).to.equal('no')
  })
  it('it should return ten when the value 10 is passed', function() {
    expect(convertNumberToEnglishString(10)).to.equal('ten')
  })
  it('it should return twelve when the value 12 is passed', function() {
    expect(convertNumberToEnglishString(12)).to.equal('twelve')
  })
  it('it should return twenty when the value 20 is passed', function() {
    expect(convertNumberToEnglishString(20)).to.equal('twenty')
  })
  it('it should return ninetynine when the value 99 is passed', function() {
    expect(convertNumberToEnglishString(99)).to.equal('ninety nine')
  })
  it('it should return nine hundred ninety-nine when the value 999 is passed', function() {
    expect(convertNumberToEnglishString(999)).to.equal('nine hundred ninety nine')
  })
  it('it should return four hundred and twenty when the value 420 is passed', function() {
    expect(convertNumberToEnglishString(420)).to.equal('four hundred twenty')
  })
  it('it should return one hundred when the value 100 is passed', function() {
    expect(convertNumberToEnglishString(100)).to.equal('one hundred')
  })
  it('it should return nine thousand nine hundred ninty nine when the value 9999 is passed', function() {
    expect(convertNumberToEnglishString(9999)).to.equal('nine thousand nine hundred ninety nine')
  })
  it('it should return nine thousand nine hundred ninty nine when the value 9999 is passed', function() {
    expect(convertNumberToEnglishString(9999)).to.equal('nine thousand nine hundred ninety nine')
  })
  it('it should return five thousand five hundered fifty five is passed', function() {
    expect(convertNumberToEnglishString(5555)).to.equal('five thousand five hundred fifty five')
  })
  it('it should return two thousand is passed', function() {
    expect(convertNumberToEnglishString(2000)).to.equal('two thousand')
  })
});
