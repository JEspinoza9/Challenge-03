// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// password criteria options
var specialCharacters = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
var numericCharacters = "0123456789";
var letters = "abcdefghijklmnopqrstuvwxyz";

//  generate password by combining arrays and choosing random
function generatePassword() {
  var length = askForLength(8, 128);
  // if length does not meet requirements
  if (!length) {
    return null;
  }

  var lowercase = confirm("Use lowercase letters?");
  var uppercase = confirm("Use uppercase letters?");
  var numbers = confirm("Use numeric characters?");
  var special = confirm("Use special characters?");

  // if no criteria is selected it should show an error
  if (!(lowercase || uppercase || numbers || special)) {
    window.alert("No criteria selected. please select desired password criteria!");
    return null
  }

  var generatedPassword = passwordGeneration(length, lowercase, uppercase, numbers, special);
  return generatedPassword;
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
