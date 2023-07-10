/*

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

This function takes a ROT13 encoded string as input and returns a decoded string.

*/

function rot13(string) {

  let key = 13
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const keyedAlphabet = alphabet.substring(key) + alphabet.substring(0, key);
  let decipheredString = ""

  for (let i = 0; i < string.length; i++) {
    let currentCharacter = string.charAt(i);
    let currentCharacterIndex = alphabet.indexOf(currentCharacter);

    if (currentCharacterIndex != -1) {
      let decipheredCharacter = keyedAlphabet.charAt(currentCharacterIndex);
      decipheredString += decipheredCharacter
    } else (decipheredString += currentCharacter)
  }
       return decipheredString;
}

console.log(rot13("SERR PBQR PNZC", 13));
console.log(rot13("SERR CVMMN!", 13))
console.log(rot13("SERR YBIR?", 13))
console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.", 13));