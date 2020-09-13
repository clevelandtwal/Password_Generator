var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];
// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];
// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

function getPasswordOpt() {

  // Prompts a password between 8 - 128 characters
  var length = Number(prompt("Welcome to Trevor's Secure Password Generator tool! To get started, please choose a password length between 8-128 characters."));
  while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Again, you need to choose a password that has between 8-128 characters. TRY AGAIN!"))

  // Confirm each of the character types: lowercase, uppercase, numerical and/or special characters
  var lowercase = confirm("Should we use lowercase letters for your password?");
  var uppercase = confirm("Should we use uppercase letters for your password?");
  var numerical = confirm("Should we use numbers for your password?");
  var special = confirm("Should we use special characters for your password?");

  // At least 1 of the character types should be selected, so here I created a while-loop to ensure that one is selected and if not to run through the options again.
  while (!lowercase && !uppercase && !numerical && !special) {
    alert("You have to select at least one character type!");
    var lowercase = confirm("Should we use lowercase letters for your password?");
    var uppercase = confirm("Should we use uppercase letters for your password?");
    var numerical = confirm("Should we use numbers for your password?");
    var special = confirm("Should we use special characters for your password?");
  }

  var user = {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numerical: numerical,
    special: special,
  }

  return user;
};


function generatePassword() {
  var options = getPasswordOpt();
  // console.log('password', options);

  var result = [];
  //array to store the TYPES OF CHARACTERS to inclide 
  var possibleChar = [];



  if (options.lowercase) {
    possibleChar = possibleChar.concat(lowerCasedCharacters);

  }

  if (options.uppercase) {
    possibleChar = possibleChar.concat(upperCasedCharacters);

  }

  if (options.numerical) {
    possibleChar = possibleChar.concat(numericCharacters);

  }

  if (options.special) {
    possibleChar = possibleChar.concat(specialCharacters);

  }
  console.log("possible", possibleChar);



  for (let i = 0; i < options.length; i++) {
    result.push(random(possibleChar));

  }
  console.log('res', result.join(""))

  return result.join("");



};

function random(arr) {
  var index = Math.floor(Math.random() * arr.length);
  var random = arr[index];
  return random;
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword, false);
