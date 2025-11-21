//this will be where the functions are defined

//----------------------------------------------------------------
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
    const hasSpecialChar = /^[A-Za-z0-9#@!$%&]+$/.test(username);

    //return true if all conditions are met
    return hasUppercase && hasLowercase && hasNumber && hasSpecialChar;
}
module.exports = { isValidUsername };