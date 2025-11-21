// ===============================
//  ALL PROJECT FUNCTIONS DEFINED
//  Long Versions (commented)
//  Short Versions (active)
// ===============================



// -----------------------------------------------------
// 1. USERNAME CHECKER (string validation)
// -----------------------------------------------------

/*
// Long Version
function isValidUsername(username) {
  if (typeof username !== 'string') return false;
  if (username.length < 10) return false;

  const hasUppercase = /[A-Z]/.test(username);
  const hasLowercase = /[a-z]/.test(username);
  const hasNumber = /[0-9]/.test(username);
  const hasSymbol = /[!@#$%&]/.test(username);
  const hasOnlyValidChars = /^[A-Za-z0-9!@#$%&]+$/.test(username);

  return (
    hasUppercase &&
    hasLowercase &&
    hasNumber &&
    hasSymbol &&
    hasOnlyValidChars
  );
}
*/

// Short Version (ACTIVE)
function isValidUsername(username) {
  if (typeof username !== "string") return false;
  if (username.length < 10) return false;

  return (
    /[A-Z]/.test(username) &&
    /[a-z]/.test(username) &&
    /[0-9]/.test(username) &&
    /[!@#$%&]/.test(username) &&
    /^[A-Za-z0-9!@#$%&]+$/.test(username)
  );
}



// -----------------------------------------------------
// 2. CREDIT CARD TYPE CHECKER
// -----------------------------------------------------

/*
// Long Version
function getCardType(cardNumber) {
  if (typeof cardNumber !== 'string') return 'Invalid';

  const sanitizedNum = cardNumber.replace(/[ -]/g, '');

  if (/^4/.test(sanitizedNum) && sanitizedNum.length === 16) return 'Visa';
  if (/^(5[1-5]|2[2-7])/.test(sanitizedNum) && sanitizedNum.length === 16) return 'Mastercard';
  if (/^(34|37)/.test(sanitizedNum) && sanitizedNum.length === 15) return 'Amex';

  return 'Invalid';
}
*/

// Short Version (ACTIVE)
function getCardType(cardNumber) {
  if (typeof cardNumber !== "string") return "Invalid";

  const sanitized = cardNumber.replace(/[ -]/g, "");

  if (/^4/.test(sanitized) && sanitized.length === 16) return "Visa";
  if (/^(5[1-5]|2[2-7])/.test(sanitized) && sanitized.length === 16)
    return "Mastercard";
  if (/^(34|37)/.test(sanitized) && sanitized.length === 15) return "Amex";

  return "Invalid";
}



// -----------------------------------------------------
// 3. DUPLICATE RAFFLE NUMBER REMOVER (purgeDuplicates)
// -----------------------------------------------------

/*
// Long Version
function dupNumRaff(arr) {
  if (!Array.isArray(arr)) return null;

  const uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let exists = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (arr[i] === uniqueArray[j]) {
        exists = true;
        break;
      }
    }

    if (!exists) uniqueArray.push(arr[i]);
  }

  return uniqueArray;
}
*/

// Short Version (ACTIVE)
function dupNumRaff(arr) {
  if (!Array.isArray(arr)) return null;
  return [...new Set(arr)];
}



// -----------------------------------------------------
// 4. BEST SALES DAY (findMax)
// -----------------------------------------------------

/*
// Long Version
function bestSalesDay(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;

  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
*/

// Short Version (ACTIVE)
function bestSalesDay(arr) {
  if (!Array.isArray(arr) || arr.length === 0) return null;
  return Math.max(...arr);
}



// -----------------------------------------------------
// 5. WORD PRONUNCIATION VOWEL CHECKER (countVowels)
// -----------------------------------------------------

/*
// Long Version
function easyWrd(word) {
  if (typeof word !== 'string') return null;

  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      count++;
    }
  }

  return count;
}
*/

// Short Version (ACTIVE)
function easyWrd(word) {
  if (typeof word !== "string") return null;

  const vowels = word.match(/[aeiou]/gi);
  return vowels ? vowels.length : 0;
}



// -----------------------------------------------------
// 6. STUDENT NAME CAPITALIZATION (capitalizeWords)
// -----------------------------------------------------

/*
// Long Version
function nameCap(name) {
  if (typeof name !== 'string') return null;

  const parts = name.split(" ");
  const fixed = [];

  for (let i = 0; i < parts.length; i++) {
    let w = parts[i];
    if (w.length === 0) continue;

    let first = w[0].toUpperCase();
    let rest = w.slice(1).toLowerCase();

    fixed.push(first + rest);
  }

  return fixed.join(" ");
}
*/

// Short Version (ACTIVE)
function nameCap(name) {
  if (typeof name !== "string") return null;

  return name
    .split(" ")
    .map(
      (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    )
    .join(" ");
}



// -----------------------------------------------------
// EXPORT ALL FUNCTIONS
// -----------------------------------------------------

module.exports = {
  isValidUsername,
  getCardType,
  dupNumRaff,
  bestSalesDay,
  easyWrd,
  nameCap
};
