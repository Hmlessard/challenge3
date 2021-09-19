//Available characters
const available-char = {
  little-letters: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  number: '0123456789',
  symbol: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~",
};

function generatePassword() {
  var characters = "";

  var length = window.prompt("How many characters should the password contain?  Please choose between 8-128");

  var uppercase = window.confirm("Do you want to use uppercase letters?");
  if (uppercase) {
    characters += available-char.uppercase;
  };

  var little-letters = window.confirm("Do you want to use little-letters letters?");
  if (little-letters) {
    characters += available-char.little-letters;
  };

  var numbers = window.confirm("Do you want to use numbers?");
  if (numbers) {
    characters += available-char.number;
  };

  var symbols = window.confirm("Do you want to use symbols?");
  if (symbols) {
    characters += available-char.symbol;
  };

  var password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

 }
  
 
  


// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

console.log(generatePassword());