// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log ("Hey you did it")
 
  // User will choose the be asked for password







  return "password";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
