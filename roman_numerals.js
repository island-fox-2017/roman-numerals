function to_roman (num) {
  // your implementation code here
  result = [];
    if (num <= 3000) {
      while (num > 0) {
        if (num >=1000) {
          for(i=0; i<Math.floor(num/1000); i++){
            result.push('M');
          }
          num %= 1000;
        }
        else if (num >=100 && num < 400) {
          for(i=0; i<Math.floor(num/100); i++) {
            result.push('C');
          }
          num %= 100;
        }
        else if (num >= 900 && num < 1000) {
          result.push('CM');
          num %= 900;
        }
        else if (num >= 500 && num < 900 ) {
          for(i=0; i<Math.floor(num/500); i++){
            result.push('D');
          }
          num %= 500;
        }
        else if (num >= 400 && num < 500) {
          result.push('CD');
          num %= 400;
        }
        else if (num >= 90 && num < 100) {
          result.push('XC');
          num %=90;
        }
        else if (num >= 50 && num <90) {
          for(i=0; i<Math.floor(num/50); i++) {
            result.push('L');
          }
          num %=50;
        }
        else if (num >= 40 && num <50) {
          result.push('XL');
          num %=40;
        }
        else if (num >= 10 && num <40) {
          for(i=0; i<Math.floor(num/10); i++) {
            result.push('X');
          }
          num %=10;
        }
        else if (num == 9 ) {
          result.push('IX');
          num %=9;
        }
        else if (num >=5 && num<9) {
          for(i=0; i<Math.floor(num/5); i++){
            result.push('V');
          }
          num %=5;
        }
        else if (num == 4) {
          result.push('IV');
          num %=4;
        }
        else {
          for(i=0; i<Math.floor(num/1); i++) {
            result.push('I')
          }
          num %=1;
        }
      }
    }
  return result.join('');
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
