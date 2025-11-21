//Here are the main functions we are pulling to test. The functions we have are as follows: 
/*
requirements: 
  You must implement at least four (4) of the functions listed in the table below. Each function is designed to test your understanding of JavaScript concepts, including loops, conditionals, and string/array manipulation.

  Here are the main functions we are pulling to test. The functions we have are as follows:
    sumOfArray(arr)
    reverseString(str)
    isPalindrome(str)
    findMax(arr)
    capitalizeWords(str)
    countVowels(str)
    purgeDuplicates(arr)
  
  To add a bit of a challenge, there's a plot twist for this week's activity. In addition to implementing 4 of the functions we've discussed, you'll also need to write functional tests for each of the 4 functions you've created. This was mentioned at the beginning of the assignment, so keep that in mind.
*/
/*
//----------------------------------------------------------------
//Username Testing
// const { describe } = require('yargs');
const { isValidUsername } = require('./utils');
//group tests for isValidUsername
describe('isValidUsername', () => {
  
  //Test #1: Fully Valid
  test('Username passes all checks', () => {
    expect(isValidUsername('ValidUser1!')).toBe(true);
  });
  //Test 2: all lowercase
  test('If username is all lowercase, should not pass', () => {
    expect(isValidUsername('invaliduser1!')).toBe(false);
  })
  //Test 3: ALL UPPERCASE
  test('If username is all uppercase, should not pass', () => {
    expect(isValidUsername('INVALIDUSER1!')).toBe(false);
  })
  //Test 4: no numbers
  test('If username has no numbers, should not pass', () => {
    expect(isValidUsername('InvalidUser!')).toBe(false);
  })
  //Test 5: no special characters
  test('If username has no special characters, should not pass', () => {
    expect(isValidUsername('InvalidUser1')).toBe(false);
  })
  //Test 6: too short
  test('If username is less than 10 characters, should not pass', () => {
    expect(isValidUsername('InvU1!')).toBe(false);
  })
  //Test 7: invalid special characters (exceptions here are # @ ! $ % &, anything else should not pass)
  test('If username has invalid special characters, should not pass', () => {
    expect(isValidUsername('InvalidUser1*')).toBe(false);
  })
  //Test 8: non-string input
  test('If username contains no letters, should not pass', () => {
    expect(isValidUsername(1234567890)).toBe(false);
    expect(isValidUsername('!@#$%^&*()')).toBe(false);
  })
  //Test 9: null test
  test('If username is null, should not pass', () => {
    expect(isValidUsername(null)).toBe(false);
  })
})
//----------------------------------------------------------------
//Card Type Testing
const { getCardType } = require('./utils');
//group tests for getCardType
describe('getCardType', () => {
  //Visa Tests
    //Correct starting number
    test('Visa card starts with 4', () => {
      expect(getCardType('4111111111111111')).toBe('Visa'); //valid visa
    })
    //Length Test
    test('Visa card length is 16 digits', () => {
      expect(getCardType('411111111111111')).toBe('Invalid'); //15 digits
      expect(getCardType('41111111111111111')).toBe('Invalid'); //17 digits
    })
  //Mastercard Tests
    //Correct starting number
    test('Mastercard starts with 5 or 2', () => {
      expect(getCardType('5111111111111111')).toBe('Mastercard'); //valid mastercard
    });
    //Length Test
    test('Mastercard length is 16 digits', () => {
      expect(getCardType('511111111111111')).toBe('Invalid'); //15 digits
      expect(getCardType('51111111111111111')).toBe('Invalid'); //17 digits
    });
  //Amex Tests
    //Correct starting numbers
    test('Amex starts with 34 or 37', () => {
      expect(getCardType('341111111111111')).toBe('Amex'); //valid amex
      expect(getCardType('371111111111111')).toBe('Amex'); //valid amex
    });
    //Length Test
    test('Amex length is 15 digits', () => {
      expect(getCardType('34111111111111')).toBe('Invalid'); //14 digits
      expect(getCardType('3411111111111111')).toBe('Invalid'); //16 digits
    });
  //Invalid Tests
    test('Invalid card numbers', () => {
      expect(getCardType('6011111111111111')).toBe('Invalid'); //Discover
      expect(getCardType('1234567890123456')).toBe('Invalid'); //Starts with 1
      expect(getCardType('9111111111111111')).toBe('Invalid'); //Starts with 9
    });
    //Non-string input
    test('Non-string input should return Invalid', () => {
      expect(getCardType(4111111111111111)).toBe('Invalid'); //number input
      expect(getCardType(null)).toBe('Invalid'); //null input
    });
});
*/
//---------------purgeDuplicates - Raffle Testing-----------------------------
const { dupNumRaff } = require('./utils');

describe('purgeDuplicates - Raffle System using the name: dupNumRaff(duplicate number raffle)', () => {
  //Test 1: No duplicates
  test('No duplicates in the raffle', () => {
    const entries = [1, 2, 3, 4, 5];
    const result = dupNumRaff(entries);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  })
  //Test 2: Some duplicates
  test('Some duplicates in the system', () => {
    const entries = [22,23,100,100,55,23,64,22];
    const result = dupNumRaff(entries);
    expect(result).toEqual([22,23,100,55,64]);
  })
  //Test 3: All duplicates
  test('Nuthin but dups here', () => {
    const entries = [67,67,67,67,67];
    const result = dupNumRaff(entries);
    expect(result).toEqual([67]);
  })
  //Test 4: Reject invalid inputs
  test('Invalid inputs are returned if theyre not in an array',() => {
    const invalidInput = "33, 40, 100";
    const result = dupNumRaff(invalidInput);
    expect(result).toBeNull();
  })
});

//--------------findMax - Best Sales Day-------------------------
const { bestSalesDay } = require('./utils');

describe('We need to find the best sales day of the week (using findMax)', () => {
  //Test 1: best sales day
  test('Find the best sales day from the week', () => {
    const weeklySales = [65, 52, 200, 80, 67, 389, 150];
    const result = bestSalesDay(weeklySales);
    expect(result).toBe(389);
  });
  //Test 2: Had one too many returns
  test('Find the best sales day with negative numbers included', () => {
    const weeklySales = [-50, -20, -5, -100, -1];
    const result = bestSalesDay(weeklySales);
    expect(result).toBe(-1);
  });
  //Test 3: Invalid input(empty array)
  test('If the array is empty, should return null', () => {
    const weeklySales = [];
    const result = bestSalesDay(weeklySales);
    expect(result).toBeNull();
  })
});

//----------------------countVowels - Easy Words---------------------------
const { easyWrd } = require('./utils');

describe('Making words easier to pronounce for dyslexic users (using easyWrd)', () => {
  //Test 1: normal word
  test('Count vowels in a normal word', () => {
    const word = "education";
    const result = easyWrd(word);
    expect(result).toBe(5);
  });
  //Test 2: word with no vowels
  test('Count vowels in a word with no vowels', () => {
    const word = "rhythm";
    const result = easyWrd(word);
    expect(result).toBe(0);
  });
  //Test 3: one vowel
  test('Count vowels in a word with one vowel', () => {
    const word = "sky";
    const result = easyWrd(word);
    expect(result).toBe(0);
  });
  //Test 4: null
  test('If input is null, should return null', () => {
    const word = null;
    const result = easyWrd(word);
    expect(result).toBeNull();
  });
});

//--------------------capitalizeWords - Name Capitalization------------------------
const { nameCap } = require('./utils');

describe('Correcting incorrect capitalization in names (using nameCap)', () => {
  //Test 1: Normal name
  test('Correctly capitalize a normal name', () => {
    const name = "john doe";
    const result = nameCap(name);
    expect(result).toBe("John Doe");
  });
  //Test 2: All uppercase
  test('Correctly capitalize an all uppercase name', () => {
    const name = "JANE SMITH";
    const result = nameCap(name);
    expect(result).toBe("Jane Smith");
  });
  //Test 3: Mixed capitalization
  test('Correctly capitalize a mixed capitalization name', () => {
    const name = "aLiCe JoHnSoN";
    const result = nameCap(name);
    expect(result).toBe("Alice Johnson");
  });
  //Test 4: null input
  test('If input is null, should return null', () => {
    const name = null;
    const result = nameCap(name);
    expect(result).toBeNull();
  });
});