var romanMatrix = [
  [1000, 'M'],
  [900, 'CM'],
  [500, 'D'],
  [400, 'CD'],
  [100, 'C'],
  [90, 'XC'],
  [50, 'L'],
  [40, 'XL'],
  [10, 'X'],
  [9, 'IX'],
  [5, 'V'],
  [4, 'IV'],
  [3, 'III'],
  [1, 'I']
];

function to_roman(num){
  var tampung = [];
  for(var i = 0; i < romanMatrix.length; i++)
  {
    if(num >= romanMatrix[i][0])
    {
      tampung.push(romanMatrix[i][1]);
      if(num % romanMatrix != 0)
      {
          num = num % romanMatrix[i][0];
      }
      else
      {
          num = num / romanMatrix[i][0];
      }
    }
  }
  return tampung.join('');
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
