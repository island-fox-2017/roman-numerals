var number = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];

function to_roman(input){
 var result = ""
 for(let i=0; i < number.length ; i++){
    if(input >= number[i]){
      while(input >= number[i]){
        result += roman[i]
        input = input - number[i]
      }
    }
  }
  return result;
}


console.log('My totally sweet testing script\n')
console.log('input | expeted| actual')
console.log('----- | --------| --------')
console.log('4     | IV      |', to_roman(4))
console.log('9     | IX      |', to_roman(9))
console.log('13    | XIII    |', to_roman(13))
console.log('1453  | MCDLIII |', to_roman(1453))
console.log('1646  | MDCXLVI |', to_roman(1646))
