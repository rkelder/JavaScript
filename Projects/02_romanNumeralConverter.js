/*

This function converts any given number, up to the number 3999, into Roman Numerals.

The limit is 3999, because the ancient Romans themselves rarely counted above this number. 

*/

function convertToRoman(num) {
    const romanNumerals = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    let result = '';
  
    for (let key in romanNumerals) {
      while (num >= romanNumerals[key]) {
        result += key;
        num -= romanNumerals[key];
      }
    }
  
    return result;
  }

console.log(convertToRoman(649)) // should return the string DCXLIX;
console.log(convertToRoman(3999)) // should return the string MMMCMXCIX;
