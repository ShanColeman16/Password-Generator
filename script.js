// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  var numbers = "0123456789";
  var letters = "abcdefghijklmnop";
  var Uppercase = letters.toUpperCase();
  var characterLength = 128;
  var chooseFrom = "";

  // YOUR CODE GOES HERE
  var passwordlength = prompt("How many characters would you like your password to include?");
  var isUppercase = confirm("Would you like to use uppercase?");
  var isLowercase = confirm("Would you like to use uppercase?");
  var isSpecial = confirm("Would you like to use a special character?");
  var isNumber = confirm("Would you like to use number?");
  var computerChoice = Math.floor(Math.random() * characterLength);


  if (isUppercase) {
    // Use Uppercase letters
    console.log('Uppercase')
    chooseFrom += Uppercase;
  }

  if (isLowercase) {
    // Use Lowercase letters
    console.log('lowercase')
    chooseFrom += lowercase;
  }

  if (isSpecial) {
    // Use Special characters
    console.log('special')
    chooseFrom += special;
  }

  if (isNumber) {
    // Use Numbers
    console.log('numbers')
    chooseFrom += numbers;

  }
  chooseFrom += Uppercase;
  chooseFrom += lowercase;
  chooseFrom += special;
  chooseFrom += numbers;

  //Grab Ramdon Letters
  console.log (chooseFrom);

  return "";

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

