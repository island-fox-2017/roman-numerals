

function to_roman(input) {
  var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
  var romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]
  var result = "";

  for(let i=0; i< nums.length; i++) { 
    if(input >= nums[i]) {
      while(input >= nums[i]) {
        result += romans[i];
        input = input - nums[i];
      }

    }
  }
  return result
}

// Drive code
// console.log(to_roman(1245));

console.log('My totally sweet testing script for new roman\n')
console.log('input | expected | actual')
console.log('——————|——————————|———————')
console.log('4     | IV       | ', to_roman(4))
console.log('9     | IX       | ', to_roman(9))
console.log('13    | XIII     | ', to_roman(13))
console.log('1453  | MCDLIII  | ', to_roman(1453))
console.log('1646  | MDCXLVI  | ', to_roman(1646))
