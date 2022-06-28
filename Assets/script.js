// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
//your code here

//PseudoCode

// prompt = length
  //let pwdLenght = prompt("How many characters?")
  // console.log(pwdLength)
// confirm - lowercase, uppercase, numeric, special characters
  // let numbers = confirm("Do you want numbers")
  //console.log(numbers);
// create var to hold answer to prompt/confirm

// fuction to validate user answers
// if and equality operators
  //if(numbers) {

  // }

  // List of numbers, special chars, uppercase and lowercase
    // array 
    // combine all arrays in 1 array
    // random choose characters
    //create a string set equal to password var
    // array method to check if something is in array
// generate random password
// return password

//google

  return password;
}