// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // YOUR CODE GOES HERE
var isUppercase = confirm('Please use at least one uppercase letter.');
var isLowercase = confirm('Please use at least one lowercase letter.');
var isSpecial = confirm('Please use at least one special character.');
var isNumber = confirm('Please use at least one number.');

if (isUppercase) {
  // Use Uppercase letters
  console.log ('Uppercase')
}

if (isLowercase) {
  // Use Lowercase letters
  console.log ('lowercase')
}

if (isSpecial) {
  // Use Special characters
  console.log ('special')
}

if (isNumber) {
  // Use Numbers
  console.log ('numbers')
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
