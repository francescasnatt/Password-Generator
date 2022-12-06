// Array of special characters to be included in password
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

var characterArray = [];

// Function to prompt user for password options - responsible for taking input of user
  function getPasswordOptions() {
    let includeSpecial = confirm("Click ok to confirm including special characters.");
    if (includeSpecial == true){
    characterArray = characterArray.concat(specialCharacters); //use objects instead?
    };
    let includeNumeric = confirm("Click ok to confirm including numeric characters.");
    if (includeNumeric == true){
    characterArray = characterArray.concat(numericCharacters);
    };
    let includeLowercase = confirm("Click ok to confirm including lowercase characters.");
    if (includeLowercase == true){
    characterArray = characterArray.concat(lowerCasedCharacters);
    };
    let includeUppercase = confirm("Click ok to confirm including uppercase characters.");
    if (includeUppercase == true){
    characterArray = characterArray.concat(upperCasedCharacters);
    };

    if (characterArray.length===0){
    alert("You must choose at least one character type. Press button to retry.");
    }
    return characterArray;
  }


// Function for getting a random element from an array
  function getRandom() {
    let randomIndexNo = Math.floor(Math.random() * characterArray.length);
    randomCharacter = characterArray[randomIndexNo];
    return randomCharacter;
  }

// Function to generate password with user input
  function generatePassword() {
    let passwordLength = prompt("How many characters would you like your password to contain?");
      if (passwordLength < 10 || passwordLength > 64){
        alert("Error: password must be between 10 and 64 characters.")
        return;
      }
    var characterArray = getPasswordOptions();
    var passwordOutput = "";
    for (var i=0; i<passwordLength; i++){
      var randomCharacter = getRandom();
      passwordOutput = passwordOutput.concat(randomCharacter);
    }
    return passwordOutput;
  }

// Get references to the #generate element
  var generateBtn = document.querySelector('#generate');

// Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
  }

// Add event listener to generate button
  generateBtn.addEventListener('click', writePassword);






// PROMPTS
// how many characters would i like my password to contain?
// click ok to confirm including special characters
// click ok to confirm including numeric characters
// click ok to confirm including lowercase characters
// click ok to confirm including uppercase characters
// let options = getPasswordOptions();