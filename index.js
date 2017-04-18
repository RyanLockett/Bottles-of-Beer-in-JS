function main() {
  var bottle = 'bottles';

  for (var i = 99; i > 0; i--) {
    console.log(convertNumberToEnglishString(i), bottle, 'of beer on the wall,');
    console.log(convertNumberToEnglishString(i), bottle, 'of beer. You take one down, pass it around,');
    if (i - 1 === 1) {
      bottle = 'bottle'
    } else {
      bottle = 'bottles'
      console.log(convertNumberToEnglishString(i - 1), bottle, 'of beer on the wall.')
    }
  }
}

function convertNumberToEnglishString(n) {
  const ones = n % 10;
  const tens = (n-ones) / 10;

  if (!tens && !ones) {
    return 'no';
  } else if (!tens) {
   return switchStatementForOnes(ones);
 } else if (tens === 1) {
    return switchStatementForTeens(ones);
  } else if (tens > 1) {
    return switchStatementForTens(tens) + switchStatementForOnes(ones);
  }
}

function switchStatementForTens(tens) {
  switch (tens) {
    case 2:
      return 'twenty';
    case 3:
      return 'thirty';
    case 4:
      return 'fourty';
    case 5:
      return 'fifty';
    case 6:
      return 'sixty';
    case 7:
      return 'seventy';
    case 8:
      return 'eighty';
    case 9:
      return 'ninety';
  }

  return '';
}

function switchStatementForOnes(ones) {
  switch (ones) {
    case 1:
      return 'one';
    case 2:
      return 'two';
    case 3:
      return 'three';
    case 4:
      return 'four';
    case 5:
      return 'five';
    case 6:
      return 'six';
    case 7:
      return 'seven';
    case 8:
      return 'eight';
    case 9:
      return 'nine';
  }

  return '';
}

function switchStatementForTeens(ones) {
  var word;

  switch (ones) {
    case 0:
      return 'ten';
      break;
    case 1:
      return 'eleven';
      break;
    case 2:
      return 'twelve';
      break;
    case 3:
      word = 'thir';
      break;
    case 4:
      word = 'four';
      break;
    case 5:
      word = 'fif';
      break;
    case 6:
      word = 'six';
      break;
    case 7:
      word = 'seven';
      break;
    case 8:
      word = 'eight';
      break;
    case 9:
      word = 'nine';
      break;
  }
  return word + 'teen';
}
main();
module.exports = {
convertNumberToEnglishString: convertNumberToEnglishString
}
