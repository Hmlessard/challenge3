
//series of prompt variables for password criteria

const answerEl= document.getElementById("answer")
var characters= prompt("How many characters do you want your password to contain? Please choose 8-128 characters")

var upperCase= prompt("Do you want the password to contain uppercase letters?")
var lowerCase= prompt("Do you want the password to contain lower case letters?")
var numbers= prompt("Do you want the password to contain numbers?")
var symbols= prompt("Do you want the passoword to contain symbols?")
var generateEl= document.getElementById("generate")

//setting password length
var characters= prompt("How many characters do you want your password to contain? Please choose 8-128 characters")
if (characters > 7 && characters <129){
  var length = parseInt(characters, 10)
  console.log("length: ") + length)
  return=length
}
else{
  var length=false
  window.alert("Invalid password length, please try again");
}

//function to generate random number
var randomNum = function( ){
  var value = Math.floor(Math.random() *10);
  return value;
}

//function to generate random upperCase
var


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




//select criteria to include in the password

//length >8,<128 characters

//password is either displayed in alert or written to page

// alert("testing")
// console.log("testing 123")

// var a= 1
// var b= 2
// var c= "right"
// var d= "Heather"
// var e
// console.log(a+b)
// function addition(num1, num2){
  


 
//   if (c === true ){
//    e= num1 + num2
//   }
//   else if(c==="right"){
//     e= num1 * num2
//   }
//   else {
//     e= num2-num1
//   }
  
// }
// addition(a,b)
// console.log(e+d)

// if (time < 10) {
//   greeting = “Good morning”;
//  } else if (time < 20) {
//   greeting = “Good day”;
//  } else {
//   greeting = “Good evening”;
//  }

// var array=[1,2,3,4,5]
// console.log(array[2])
// for (let index = 0; index < array.length; index++) {
//   console.log(array[index]);
  
// }
 