/*

This function contains a palindrome checker. 

The function will check any possible combination of letters and return true if it is a palindrome.

To do this, the function will ignore lowercase and uppercase and will filter out any possible non-alpha-numeric characters. 

*/

function palindrome(str) {

    let regex = /[\W_]/g;
    
    let lowerCaseString = str.replace(regex, '').toLowerCase();
    
    let reverseString = lowerCaseString.split('').reverse().join('');
    
    if (lowerCaseString === reverseString) {
      return true
    } else {
      return false
    }
    }

    // palindrome("A man, a plan, a canal. Panama"); returns true
    console.log(palindrome("A man, a plan, a canal. Panama"));
    // palindrome("1 eye for of 1 eye."); returns false
    console.log(palindrome("1 eye for of 1 eye."));
    // palindrome("My age is 0, 0 si ega ym."); returns true
    console.log(palindrome("My age is 0, 0 si ega ym."))
    // palindrome("0_0 (: /-\ :) 0-0"); returns true
    console.log(palindrome("0_0 (: /-\ :) 0-0"))
