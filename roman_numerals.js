function to_roman (num) {
  // your implementation code here
  var romawi=[];
  if(num <3000){
    while(num > 0){
      if (num>0 && num <4) {
        romawi.push('I')
        num --
      } else if(num == 4 ){ 
        romawi.push('IV')
        num -=4
      } else if (num >=5 && num <9) {
        romawi.push('V')
        num -=5
      } else if (num >=9 && num <10) { 
        romawi.push('IX')
        num -=9
      }  else if (num> 9 && num <40 ) {
        romawi.push('X')
        num -=10
      } else if (num >=40 && num <50) {
        romawi.push('XL')
        num -=40
      } else if (num > 49 && num <90) {
        romawi.push('L')
         num -= 50;
      } else if (num >=90 && num<100) { 
          romawi.push('XC')
         num -= 90;
      } else if (num >=100 && num <400) {
        romawi.push('C')
        num -=100
      } else if ( num >= 400 && num <500) {
        romawi.push('CD')
        num-=400
      } else if (num >= 500 && num < 900) {
        romawi.push('D')
        num -= 500
      }else if (num >=900 && num <1000) {
        romawi.push('DM')
        num-=900;
      }
      else if (num >=1000) {
        romawi.push('M')
        num -= 1000
      }
    }
  }
  return romawi.join('');

}

// Drive code
console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('12    | XII      | ', to_roman(12))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
console.log('2646  | MMDCXLVI | ', to_roman(2646))