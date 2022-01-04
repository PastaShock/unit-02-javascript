// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  var length = prompt("what is the minimum length of password?","eg: 8 characters")
    if ( parseInt(length) !>= 8 && parseInt(length) !<= 128) {
      length
    };
    var lowercase = confirm("does your password need to include lowercase?");
    var capitals = confirm("does your password need to include capitals?");
    var numbers = confirm("does your password need to include numbers?");
    var special = confirm("does your password need to include special characters?");
  console.log(password, length, lowercase, capitals, numbers, special)
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
