// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {

  var getLength = prompt("How many characters?");
  if (getLength > 7 && getLength < 129) {
    var hasUpper = confirm("Include uppercase?");
    var hasLower = confirm("Include lowercase?");
    var hasNumeric = confirm("Include numbers?");
    var hasSpecial = confirm("Include special characters?");

    if (hasUpper || hasLower || hasNumeric || hasSpecial) {
      var allowedCharacters = []
      if (hasUpper) {
        allowedCharacters.push("Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M")
      }
      ;
      if (hasLower) {
        allowedCharacters.push("q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "a", "s", "d", "f", "g", "h", "j", "k", "l", "z", "x", "c", "v", "b", "n", "m")
      };

      if (hasNumeric) {
        allowedCharacters.push("1", "2", "3", "4", "5", "6", "7", "8", "9", "0")
      };

      if (hasSpecial) {
        allowedCharacters.push("!", "@", "#", "$", "%", "^", "&", "*", "-", "_", "=", "+", "(", ")", "~", "<", ">", ".", "?")
      };

      var passArray = [];

      passArray.length = getLength;

      var i = 0;

      while (i < getLength) {
        var randomCharacter = allowedCharacters[Math.trunc(Math.random() * allowedCharacters.length)];
        passArray[i] = randomCharacter;
        console.log(passArray);
        i++;
      };

      return passArray.join("")

    } else {
      alert("Password must have 1 valid character type")
      return;
    };



  } else {
    alert("Password must be 8-128 characters");
    return;
  };
};




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
