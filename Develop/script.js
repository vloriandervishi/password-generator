// Special characters for the function created
const specialCharacters = "!@#$%^&*(),?~/+-.><_'`=][{}])(|\  ";
// activating password creation feature 
const generateButton = document.getElementById('generate');
// when generate button is clicked will call writePassword function
generateButton.addEventListener('click', passwordCreator);

// Write password to the #password input
function passwordCreator() {
  //storing generated Password to password variable
  var password = inventPassword();
  // storing generated password to 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Prompts that come up after you click generate password
inventPassword = function () {
  var passwordLength = prompt("Please enter the number of characters you want for you new password.  It must be more than 12 but less than 128.");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");

  var special = confirm("Do you want special characters in your password?");

  // this is a minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;

  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters


  var minimumLowerCases = "";
  var minimumUpperCases = "";
  var minimumSpecialCharacters = "";
  var minimumNumbers = "";

  // Generator functions**
  var objArray = {
    getNumbers: function () {
      // GetNumber object function ulls numbers stored from Char code library and passes it on to the next function
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    },

    getLowerCases: function () {
      // GetLower Pulls numbers stored lowercases from fromCharcode library and passes it on to the next function
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    },

    getUpperCases: function () {
      // Pulls numbers stored 
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    },

    getSpecialCharacters: function () {
      return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
    }

  };

  // Checks to make sure user selected ok for all and uses empty minimums from above
  do {
    if (numbers === true) {
      //pulls numbers from functionArray getNumbers obj.
      minimumNumbers += objArray.getNumbers();
      minimumCount++;

    }


    if (lowerCases === true) {
      minimumLowerCases += objArray.getLowerCases();
      minimumCount++;

    }

    if (upperCases === true) {
      minimumUpperCases += objArray.getUpperCases();
      minimumCount++;

    }

    if (special === true) {
      minimumSpecialCharacters += objArray.getSpecialCharacters();
      minimumCount++;

    }


    // empty string variable for the for loop below
    var randomPasswordGenerated = "";

    // loop getting random characters

    // to make sure characters are added to the password
    randomPasswordGenerated += minimumNumbers;
    randomPasswordGenerated += minimumLowerCases;
    randomPasswordGenerated += minimumUpperCases;
    randomPasswordGenerated += minimumSpecialCharacters;
  } while (0 < (parseInt(passwordLength) - minimumCount))

  return randomPasswordGenerated;

}