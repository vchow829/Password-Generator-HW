// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var generatePassword = function() {
  
}

// Vince starting over for now

//generate random password
function generate() {

  var length = document.getElementById("generate").value;
  
  //possible characters for password
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  var password = "";

  //for loop to choose characters
  for(var i =0; i <= length; i++); {
    password = password + characters.charAt(Math.floor(Math.random() * Math.floor(value.length - 1)));
  }
}

