// Assignment code here
function generatePassword(){
  // prompt to select password length
  var passwordLength = prompt("lenght of password between 8 and 128?");
  passwordLength = parseInt(passwordLength);
   console.log(passwordLength);

   if (passwordLength > 128 || passwordLength < 8){
    alert("select a length between 8 and 128");
    generatePassword();
  }

  // confirm character tyoes included in password
  var passwordLowerCase = confirm("Inclue Lower Case Letters?");
  var passwordUpperCase = confirm("Inclue Upper Case Letters?");
  var passwordNumeric = confirm("Inclue Numbers?");
  var passwordSpecial = confirm("Inclue Special Characters?");
  
  // create arracys for character list 
  var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var upperCase = "abcdefghijklmnopqrstuvwxyz".split("");
  var numberList = "0123456789".split("");
  var specialCharacters = "!@#$%^&*()-=+`,.~?<>][}{/".split("");

  var passwordString = "";

  while (passwordString.length <passwordLength){

    if (passwordLowerCase){passwordString += lowerCase[Math.floor(Math.random() * lowerCase.length)]}
    if (passwordUpperCase){passwordString += upperCase[Math.floor(Math.random() * upperCase.length)]}
    if (passwordNumeric){passwordString += nuberList[Math.floor(Math.random() * numberList.length)]}
    if (passwordSpecial){passwordString += specialCharacters[Math.floor(Math.random() * specialCharacters.length)]}
    
  }

  return passwordString
  
  
};

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
