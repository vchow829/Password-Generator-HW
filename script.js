// Assignment Code
var generateBtn = document.querySelector("#generate");
var generatePassword = function() {
  var length = prompt("What length does your password need to be?");
  console.log("Password length:", length);

// gives warning if prompt is left blank
  if (!length || !length.includes(length)) {
    console.warn("Must be between 8 and 128 characters", length);
    return;}

  var uCase = confirm("Do you want upper case letters?");
  console.log("Wants upper case?", uCase);
  if (uCase === true); {
    uCase=String.fromCharCode(Math.floor(Math.random()*26)+65);
    console.log(uCase);
  }

  var lCase = confirm("Do you want lower case letters?");
  console.log("Wants lower case?", lCase);
  if (lCase === true); {
    lCase=String.fromCharCode(Math.floor(Math.random()*26)+97);
    console.log(lCase);
  }

  var spCharacter = confirm("Do you want special characters?");
  console.log("Wants special characters?", spCharacter);
  if (spCharacter === true); {
    spCharacter=String.fromCharCode(Math.floor(Math.random()*33)+43);
    console.log(spCharacter);
  }


  var number = confirm("Do you want numbers?");
  console.log("Wants numbers?", number);
  if (number === true) {
    number = Math.floor(Math.random() * 10);
    console.log(number);
  }
}

generateBtn.addEventListener("click", generatePassword);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  generatePassword() 
    if (uCase === true); {
      uCase=String.fromCharCode(Math.floor(Math.random()*26)+65);
      console.log(uCase);
    }
    
    if (lCase === true); {
      lCase=String.fromCharCode(Math.floor(Math.random()*26)+97);
      console.log(lCase);
    }
    if (spCharacter === true); {
      spCharacter=String.fromCharCode(Math.floor(Math.random()*33)+43);
      console.log(spCharacter);
    }

     if (number === true) {
    number = Math.floor(Math.random() * 10);
    console.log(number);
     }
  

passwordText.value = password;

}
