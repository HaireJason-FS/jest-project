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
//----------------------------------------------------------------
//Username Testing
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
  test('If username is not a string, should not pass', () => {
    expect(isValidUsername(1234567890)).toBe(false);
    expect(isValidUsername('!@#$%^&*()')).toBe(false);
  })
  //Test 9: null test
  test('If username is null, should not pass', () => {
    expect(isValidUsername(null)).toBe(false);
  })
})