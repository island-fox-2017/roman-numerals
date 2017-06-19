// var nums = [1,4]
// var romans = ["I", "IV"]

var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]
var romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]

function to_roman(input) {
  var result = "";

  for(let i=0; i< nums.length; i++) { //
    if(input >= nums[i]) {
      while(input >= nums[i]) {
        result += romans[i];
        input = input - nums[i];
      }

    }
  }
  return result
}


console.log(to_roman(1))
console.log(to_roman(2))
console.log(to_roman(3))
console.log(to_roman(4))
console.log(to_roman(5))
console.log(to_roman(6))
console.log(to_roman(7))
console.log(to_roman(10))
console.log(to_roman(900))
console.log(to_roman(2922))
