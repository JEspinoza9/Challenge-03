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

//PseudoCode

  //let pwdLenght = prompt("How many characters?")
var  pwdLength = prompt("please enter password length");
//   console.log(pwdLength)

// confirm - lowercase, uppercase, numeric, special characters
var lowCase = confirm("would you like to include lowercase letters?");
// console.log(lowCase);

var upCase = confirm("Would you like to use uppercase numbers?");

// let numbers = confirm("Do you want numbers"
var numbers = confirm("would you like to use numbers");
//console.log(numbers);

var speChar = confirm("Would you like to use special characters?");
// create var to hold answer to prompt/confirm

// fuction to validate user answers
var upperCase = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var num = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
var specCharacters = ['~', '`', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '-', '_', '+', '=', '{', '}', '[', ']', '|', '/', ':', ';', "'", '"', '<', '>', ',', '.', '?'] ;
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