// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log ("Hey you did it")
 
  // User will be prompted for password criteria
  var Uppercase = confirm("Would you like to use uppercase letters?");
  var Lowercase = confirm("Would you like to use lowercase letters?");
  var numbers = confirm("Would you like to include numbers?");
  var specialChar = confirm("Would you like to include special characters?");
  var characterLength = confirm("How long would you like the password to be?");

  //User asked for character types to include in password
  var letters = "abcdefghijklmnop";
  var Uppercase = letters.toUpperCase();
  var Lowercase = letters.toLowerCase();
  var numbers = "0123456789";
  var specialChar = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var characterLength = 128;


  if (Uppercase) {
    // Use Uppercase letters
    console.log('Uppercase')
  }

  if (Lowercase) {
    // Use Lowercase letters
    console.log('Lowercase')
  }

  if (numbers) {
    // Use numbers letters
    console.log('numbers')
  }

  if (specialChar) {
    // Use specialChar letters
    console.log('specialChar')
  }
  
for (var i = 0; i <= 128; i++) {
  console.log ("This is the current value of i: " + i + ".");

}


//User prompted for length of password
function prompts() {
  characterLength = prompt ("How many characters would you like your password to include?");
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


