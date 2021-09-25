//Available characters
var lowercase = 'abcdefghijklmnopqrstuvwxyz'
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
var number = '0123456789'
var symbol = "!@#$%^&*()_-+"
var generateBtn = document.querySelector("#generate");
var returnPassword = document.querySelector('#password')


function generatePassword() {
  passwordCharSet = "";
  
  var characters = "";
//how many characters?
  var length = prompt("How many characters should the password contain?  Please choose between 8-128");
  if (length < 8 === true || length > 128 === true) {
    alert("Please choose between 8-128 characters");
  }
  
  //use else statement to wrap around the other conditions so user does not have to refresh 
  
//Upper case?  If yes, include uppercase
  var isUppercase = confirm("Do you want to use uppercase letters?");
  if (isUppercase === true) {
    characters += uppercase;
  };
//lowercase?  If yes, include lowercase
  var isLowercase = confirm("Do you want to use lowercases letters?");
  if (isLowercase === true) {
    characters += lowercase;
  };
//numbers?  If yes, include numbers
  var isNumbers = confirm("Do you want to use numbers?");
  if (isNumbers === true) {
    characters += number;
  };
//symbols?  If yes, include symbols
  var isSymbols = confirm("Do you want to use symbols?");
  if (isSymbols === true) {
    characters += symbol;
  };

  console.log(characters);

  var password = "";
  for (let i = 0; i < length; i++) {
    password += characters[Math.floor(Math.random() * characters.length)]
  }
  console.log(password);
  returnPassword.innerText = password;
  return password;

}



// Add event listener to generate button
 generateBtn.addEventListener("click", generatePassword);


