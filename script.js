// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log ("Hey you did it")
 
  // User will be prompted for password criteria
  //User prompted for length of password
  //User asked for character types to include in password

  var special = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numbers = "0123456789";
  var letters = "abcdefghijklmnop";
  var Uppercase = letters.toUpperCase();
  
  
for (var i = 0; i <= 128; i++) {
  console.log ("This is the current value of i: " + i + ".");


}








//User answers all prompts password is generated and displayed


  return "password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


