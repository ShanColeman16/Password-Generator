// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE
var isUppercase = false;
var isLowercase = false;
var isSpecial = false;
var isNumber = false;

if (isUppercase) {
  // Use Uppercase letters
}

if (isLowercase) {
  // Use Lowercase letters
}

if (isSpecial) {
  // Use Special characters
}

if (isNumber) {
  // Use Numbers
}

return ""
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
