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

var seven = convertNumberToEnglishString(7);
console.log(expectToBe(seven, 'seven'));

var twelve = convertNumberToEnglishString(12);
console.log(expectToBe(twelve, 'twelve'));

var nineteen = convertNumberToEnglishString(19);
console.log(expectToBe(nineteen, 'nineteen'));

var zero = convertNumberToEnglishString(0);
console.log(expectToBe(zero, 'zero'));

var ten = convertNumberToEnglishString(10);
console.log(expectToBe(ten, 'ten'));

var thirty = convertNumberToEnglishString(30);
console.log(expectToBe(thirty, 'thirty'));

describe('BottleOfBeer', function () {
  it('it should return fiftyfive when the value 55 is passed', function (){
    expect(convertNumberToEnglishString(55)).to.equal('fiftyfive')
  })
});
