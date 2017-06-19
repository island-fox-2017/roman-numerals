function to_roman (num) {
  // your implementation code here
  let result = "";
  while (num > 0) {
    if (num >= 1000) {
      result += "M";
      num -= 1000;
    }
    else if (num === 900) {
      result += "CM";
      num -= 900;
    }
    else if (num >= 500) {
      result += "D";
      num -= 500;
    }
    else if (num >= 400) {
      result += "CD";
      num -= 400;
    }
    else if (num >= 100) {
      result += "C";
      num -= 100;
    }
    else if (num >= 90) {
      result += "XC";
      num -= 90;
    }
    else if (num >= 50) {
      result += "L";
      num -= 50;
    }
    else if (num >= 40) {
      result += "XL";
      num -= 40;
    }
    else if (num >= 10) {
      result += "X";
      num -= 10;
    }
    else if (num >= 9) {
      result += "IX";
      num -= 9;
    }
    else if (num >= 5) {
      result += "V";
      num -= 5;
    }
    else if (num === 4) {
      result += "IV";
      num -= 4;
    }
    else {
      result += "I";
      num -= 1;
    }
  }
  return result;
}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
