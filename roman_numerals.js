

function to_roman(input) {
  var nums = [1000,900,500,400,100,90,50,40,10,9,5,4,1]//variabel angka
  var romans = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]//variabel romawi
  var result = "";//hasil yang menampung

  for(let i=0; i< nums.length; i++) {//pengulangan sepanjang number
    if(input >= nums[i]) {//jika input lebih besar dari sama dengan deret nums, maka
      while(input >= nums[i]) {//lakukan pengulangan while angka masukan yang lebih besar dari sama dengan deret nums
        result += romans[i];//masukan ke variabel yang menampung str romawi
        input = input - nums[i]; //melakukan pengurangan saat pengecekan
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
