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

// Function to prompt user for password options - responsible for taking input of user
  function getPasswordOptions() {
    let characterArray = [];
    
    let includeSpecial = confirm("Click ok to confirm including special characters.");
    characterArray = characterArray.concat(specialCharacters); //use objects instead?
    let includeNumeric = confirm("Click ok to confirm including numeric characters.");
    characterArray = characterArray.concat(numericCharacters);
    let includeLowercase = confirm("Click ok to confirm including lowercase characters.");
    characterArray = characterArray.concat(lowerCasedCharacters);
    let includeUppercase = confirm("Click ok to confirm including uppercase characters.");
    characterArray = characterArray.concat(upperCasedCharacters);
  
    if (characterArray.length===0){
    alert("You must choose at least one character type.");
  }
  return characterArray;
  }

// Function for getting a random element from an array
  function getRandom(characterArray) {
    let randomCharacter = Math.floor(Math.random() * characterArray.length);
    return characterArray[randomCharacter];
  }

// Function to generate password with user input
  function generatePassword() {
    let passwordLength = prompt("How many characters would you like your password to contain?");
      if (passwordLength < 10 || passwordLength > 64){
        alert("Error: password must be between 10 and 64 characters.")
        return;
      }
    var characterArray = getPasswordOptions();
    for (var i=0; i<passwordLength; i++){
    getRandom(characterArray);
    var passwordOutput = passwordOutput.concat(randomCharacter);
    }
    return passwordOutput;
  }
  //if 1st element of array is true - what does that mean? same for each element

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