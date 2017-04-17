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

  var ones = n % 10;
  var tens = (n-ones) / 10;
  var word = '';

  if (tens === 0 && ones >= 0) {
    switch (ones) {
      case 0:
        word += 'zero';
        break;
      case 1:
        word += 'one';
        break;
      case 2:
        word += 'two';
        break;
      case 3:
        word += 'three';
        break;
      case 4:
        word += 'four';
        break;
      case 5:
        word += 'five';
        break;
      case 6:
        word += 'six';
        break;
      case 7:
        word += 'seven';
        break;
      case 8:
        word += 'eight';
        break;
      case 9:
        word += 'nine';
        break;
    }
  }

   if (tens === 1 && ones >= 0) {
    let word = '';

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
        break;s
    }

    return word + 'teen';
  }

  if (tens > 1 && ones === 0) {
    switch (tens) {
      case 2:
        word = 'twenty';
        break;
      case 3:
        word = 'thirty';
        break;
      case 4:
        word = 'fourty';
        break;
      case 5:
        word = 'fifty';
        break;
      case 6:
        word = 'sixty';
        break;
      case 7:
        word = 'seventy';
        break;
      case 8:
        word = 'eighty';
        break;
      case 9:
        word = 'ninety';
        break;
    }
  }

  if (tens > 1 && ones > 0) {
  word += convertNumberToEnglishString (tens * 10);
  word +=convertNumberToEnglishString (ones);
  }

  return word;
}
main();

module.exports = {
  convertNumberToEnglishString: convertNumberToEnglishString
}
