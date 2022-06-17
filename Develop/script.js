// Assignment code here
// Our variables below. first four are for our characters and we will use those in our function. the characters var is what we are using to add what user wants below.
var upCase = "QWERTYUIOPASDFGHJKLZXCVBNM";
var lowCase ="qwertyuiopasdfghjklzxcvbnm";
var numbers = "1234567890";
var special = "!#$%&'()*+,-./:;<=>?@^_`{|}~";
let characters = "";

// our function here gives the user a promot and 4 confirms to determine the parameters of the password. 
function generatePassword () {
  let passLength = prompt ("Please choose your password length between 8 and 128 characters.");
    if (passLength < 8 || passLength > 128) {
      alert("Password length must be between 8 and 128 characters."); 
      generatePassword();
    } else {
      let upperCaseConfirm = confirm ("Should your password contain uppercase characters?")
      if (upperCaseConfirm) {
        characters += upCase;
      };
      let lowerCaseConfirm = confirm ("Should your password contain lowercase characters?")
      if (lowerCaseConfirm) {
        characters += lowCase;
      };
      let numbersConfirm = confirm ("Should your password contain numbers?")
      if(numbersConfirm) {
        characters += numbers;
      };
      let specialConfirm = confirm ("Should your password contain special characters?")
      if (specialConfirm) {
        characters += numbers;
      };
      // if user doesnt chose at least one character type
      if (upperCaseConfirm === false && lowerCaseConfirm === false && numbersConfirm === false && specialConfirm === false) {
        alert ("Password must include one type of character type");
       generatePassword();
      } 
      //takes pass length and the chosen types and makes password
    } var pass = ""; 
      for (var i=0; i<passLength; i++) {
      pass += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return pass;
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
