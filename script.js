// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";
  var letters = "abcdefghijklmnop";
  var Uppercase = letters.toUpperCase();
  var characterLength = 0;
  var chooseFrom = "";
  // YOUR CODE GOES HERE

  var characterLength = prompt("How many characters would you like to include in your password?");
  var isUppercase = confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use uppercase?");
  var isSpecial = confirm("Would you like to use a special character?");
  var isNumber = confirm("Would you like to use number?");
  var random = Math.floor(Math.random() * characterLength);

    //Array
    var collection = ['Uppercase', 'Lowercase', 'Special', 'Number']
    chooseFrom += special (Math.floor(Math.random() * characterLength));

  if (isUppercase) {
    // Use Uppercase letters
    console.log('Uppercase')
  }

  if (isLowercase) {
    // Use Lowercase letters
    console.log('lowercase')
  }

  if (special) {
    // Use Special characters
    console.log('special')
  }

  if (isNumber) {
    // Use Numbers
    console.log('numbers')
const numbers = Number(window.prompt("Type a number", ""));
  }







  return randompassword

}

// Write password to the #password input
//do not have to do anything here
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);