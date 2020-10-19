// Special characters for the function created
const symbolContainer = "!@#$%^&*(),?~/+-.><_'`=][{}])(|\  ";
// activating password creation feature 
const generateButton = document.getElementById('generate');
// when generate button is clicked will call writePassword function
generateButton.addEventListener('click', passwordCreator);

// Write password to the #password input
function passwordCreator() {
  //storing generated Password to password variable
  var password = inventPassword();
  // storing generated password to 
  var pwdTxt = document.querySelector("#password");

  pwdTxt.value = password;

}

// Prompts that come up after you click generate password
inventPassword = function () {
  var retrievePwdLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var inputLowerCases = confirm("Do you want lowercases in your password?");

  var inputUpperCases = confirm("Do you want uppercases in your password?");

  var inputSpecial = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var offSetCount = 0;

  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters


  var lowerCaseContainer = "";
  var upperCaseContainer = "";
  var specialCharsContainer = "";
  var numberContainer = "";
  var randPwdGen = "";
  // Generator functions**
  var objArray = {
    getNumbers: function () {
      // GetNumber object function pulls numbers stored from Char code library and passes it on to the next function
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function () {
      // GetLower Pulls numbers stored lowercases from fromCharcode library and passes it on to the next function
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function () {
      // Pulls numbers stored upper case unicode characters passes it on to the next function
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function () {
      return symbolContainer[Math.floor(Math.random() * symbolContainer.length)]
    }

  };

  // Checks to make sure user selected ok for all and uses empty minimums from above
  do {
    if (numbers && retrievePwdLength != randPwdGen.length) {
      //pulls numbers from functionArray getNumbers obj.
      numberContainer += objArray.getNumbers();
      randPwdGen += numberContainer;
      offSetCount++;
     }
     
  
     

    if (inputLowerCases && retrievePwdLength != randPwdGen.length) {
      lowerCaseContainer += objArray.getLowerCases();
      randPwdGen += lowerCaseContainer;
      offSetCount++;
      

    }
  

    if (inputUpperCases && retrievePwdLength != randPwdGen.length) {
      upperCaseContainer += objArray.getUpperCases();
      randPwdGen += upperCaseContainer;

      offSetCount++;
      
    }
   

    if (inputSpecial && retrievePwdLength != randPwdGen.length) {
      specialCharsContainer += objArray.getSpecialCharacters();
      randPwdGen += specialCharsContainer;
      offSetCount++;
      

    }
   
   
   
 } while (randPwdGen.length != retrievePwdLength);

 return  randPwdGen;
  

}