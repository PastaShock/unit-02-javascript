// Assignment Code
var generateBtn = document.querySelector("#generate");

//declare global variables

//arrays of options for generating a password
const arrayLower = "abcdefghijklmnopqrstuvwxyz";
const arrayUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const arrayNum = "1234567890";
const arraySpec = "!@#$%^&*()_-";
//variable for filling with user-approved/valid characters
var arrayValid = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //ask the user for the password's criteria
  var length = prompt("what is the minimum length of password?","type a number between 8-128")
  //parse the user's input to make sure a valid number was entered.
  // if (!(parseInt(length) > 8 && parseInt(length) < 128)) {
  //   length = prompt("Please enter a valid number","type a number between 8-128")
  // };
  var lowercase = confirm("does your password need to include lowercase?");
  var capitals = confirm("does your password need to include capitals?");
  var numbers = confirm("does your password need to include numbers?");
  var special = confirm("does your password need to include special characters?");
  
  // log in the console all the values from the user for debugging
  console.log(password, length, lowercase, capitals, numbers, special)

  // fill the variable arrayValid with the user's criteria
  if (lowercase == true) {
  arrayValid += arrayLower;
  }
  if (capitals == true) {
    arrayValid += arrayLower;
  }
  if (numbers == true) {
    arrayValid += arrayNum;
  }
  if (special == true) {
    arrayValid += arraySpec;
  }
 //log the approved characters in the console
 console.log(arrayValid);

 //zero out the password variable
 password = "";
  //create a routine that takes the pass length, approved string and creates a password
  //using a for loop, for each position in password length create a string from characters in the arrayValid string 
  for (var i = 0; i < length; i++) {
    //create a random number based on the length of arrayValid, to select a random character in the string
    //var random is a random number between 0 and the length of arrayValid
    var random = Math.floor(Math.random() * arrayValid.length);
    // add selected characters to the password variable
    password += arrayValid.substring(random, random + 1);
  }
console.log(password)
  //return generated password
  return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
