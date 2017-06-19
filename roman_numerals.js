function to_roman (num) {
  // your implementation code here
  roman=[]
  if(num <3000){
    while(num > 0){
      if (num>0 && num <4) {
        roman.push('I')//ubah satuan
        num --
      } else if(num == 4 ){ //ubah empat
        roman.push('IV')
        num -=4
      } else if (num >=5 && num <9) {// ubah lima
        roman.push('V')
        num -=5
      } else if (num >=9 && num <10) { //ubah sembilan
        roman.push('IX')
        num -=9
      }  else if (num> 9 && num <40 ) {//ubah puluhan
        roman.push('X')
        num -=10
      } else if (num >=40 && num <50) {//ubah empatpuluhan
        roman.push('XL')
        num -=40
      } else if (num > 49 && num <90) {//ubah limapuluhan
        roman.push('L')
         num -= 50;
      } else if (num >=90 && num<100) { //ubah sembilanPuluhan
          roman.push('xc')
         num -= 90;
      } else if (num >=100 && num <400) {//ubah ratusan
        roman.push('C')
        num -=100
      } else if ( num >= 400 && num <500) {//ubah empatRatusan
        roman.push('CD')
        num-=400
      } else if (num >= 500 && num < 900) {//ubah limaRatusan
        roman.push('D')
        num -= 500
      }else if (num >=900 && num <1000) {//ubah sembilanRatussan
        roman.push('DM')
        num-=900;
      }
      else if (num >=1000) {//ubah ribuan
        roman.push('M')
        num -= 1000
      }
    }
  }
  return roman.join('');

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
