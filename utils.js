//this will be where the functions are defined

const { type } = require("os");

/*
//----------------------String Testing-----------------------
//username testing: the username needs to have at least 10 characters, letters, numbers, and special characters. (there will be exceptions later on)
function isValidUsername(username) {
  //check if username is a string
  if(typeof username !== 'string') return false;
  //check length (10 characters minimum)
  if(username.length < 10) return false;
  //Check for:
    //Uppercase
    const hasUppercase = /[A-Z]/.test(username);
    //Lowercase
    const hasLowercase = /[a-z]/.test(username);
    //Numbers
    const hasNumber = /[0-9]/.test(username);
    //Special Characters(with the exceptions here)
    const hasSymbol = /[!@#$%&]/.test(username);
    const hasSpecialChar = /^[A-Za-z0-9#@!$%&]+$/.test(username);
    //return true if all conditions are met
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar && hasSymbol;
}
module.exports = { isValidUsername };

//--------------Number Testing-------------------------
//Card Testing: Check to see if a card is a visa, mastercard, or amex
//DISCLAIMER: NO REAL CARD NUMBERS ARE USED IN THE TESTS OR THE FUNCTIONS BELOW
function getCardType(cardNumber) {
  //check to see if the input is a number
  if(typeof cardNumber !== 'string') return 'Invalid';
  //when you input a card number into a website, it auto-generates the spaces/dashes so we know its a card.
  //remove spaces and dashes(if any)
  const sanitizedNum = cardNumber.replace(/[ -]/g, ""); //We need to make sure its clean by using the 'sanitize' method
  //Card Type Check
    //Visa (4)(16):
      if(/^4/.test(sanitizedNum) && sanitizedNum.length === 16) return 'Visa';
    //Mastercard (5 or 2)(16):
      if(/^(5[1-5]|2[2-7])/.test(sanitizedNum) && sanitizedNum.length === 16) return 'Mastercard';
    //Amex (34 or 37)(15):
      if(/^(34|37)/.test(sanitizedNum) && sanitizedNum.length === 15) return 'Amex';
    //If none of the above, return invalid
    return 'Invalid';

}
module.exports.getCardType = getCardType;
*/
//----------------------Raffle Numbers (purgeDuplicates)---------------------------

// function dupNumRaff(arr) {
//   if (!Array.isArray(arr)) return null;

//   const uniqueArray = []; // This will store unique values manually

//   // Loop through each element in the array
//   for (let i = 0; i < arr.length; i++) {
//     const currentValue = arr[i];

//     // Check if this value already exists in uniqueArray
//     let alreadyExists = false;

//     for (let j = 0; j < uniqueArray.length; j++) {
//       if (uniqueArray[j] === currentValue) {
//         alreadyExists = true;
//         break; // No need to keep checking further
//       }
//     }

//     // If value was not found, add it to the unique array
//     if (!alreadyExists) {
//       uniqueArray.push(currentValue);
//     }
//   }

//   return uniqueArray;
// }

//Shorthand
function dupNumRaff(arr) {
  if(!Array.isArray(arr)) return null;
  return[...new Set(arr)];
}
module.exports = {dupNumRaff};

//--------------------Best Sales Day (findMax)------------------------
function bestSalesDay(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}
module.exports.bestSalesDay = bestSalesDay;

//------------------word pronunciation (for dyslexia) (countVowels)------------------------
function easyWrd(word) {
  if (typeof word !== 'string') return null;

  const vowels = word.match(/[aeiouAEIOU]/gi);
  return vowels ? vowels.length : 0;
}
module.exports.easyWrd = easyWrd;

//------------------incorrect capitals (capitalizeWords)------------------------
function nameCap(name){
  if (typeof name !== 'string') return null;
  return name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}
module.exports.nameCap = nameCap;