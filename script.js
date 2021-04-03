// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = function() {
  var length = prompt("What length does your password need to be?");
  console.log(length);

  var uCase = confirm("Do you want upper case letters?");
  console.log(uCase);

  var lCase = confirm("Do you want lower case letters?");
  console.log(lCase);

  var spCharacter = confirm("Do you want special characters?");
  console.log(spCharacter);

  var number = confirm("Do you want numbers?");
  console.log(number);
}
generateBtn.addEventListener("click", generatePassword);}

// Write password to the #password input
function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
passwordText.value = password;

}



// Vince starting over for now

//generate random password
function generate() {

  var length = document.getElementById("generate").value;
  
  //possible characters for password
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()";
  var password = "";

  //for loop to choose characters
  for(var i = 0; i <= length; i++); {
    password = password + characters.charAt(Math.floor(Math.random() * Math.floor(characters.length - 1)));
  }

  //password to show in display box
  document.getElementById("password").characters = password;
}
