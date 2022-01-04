## Homework 02
### Javascript password generator

The goal of this project is to take the given webpage, stylesheet and script and build upon it to finish the password generator.

I first started by laying out some comments in the script file to guide my scripting.
My vision was to create arrays of lowercase, uppercase, numbers and special characters and adding the arrays together based on the user's selected options. In a for loop of user's desired password length, using Math.random() to get a random number to use to select a character from the array and add it to a password variable. 
Based on some google searches, I needed a constant for each option that I'll be prompting the user with (length, lowercase, uppercase, numbers and special characters.) I also need a variable to fill with the selected ranges of characters in other constants. before generating a new password, I need to make sure that the password and selected character range are cleared out to avoid any errors. Once I go into a loop, I need to select a random character from the selected character range using a random number. I then add that character to the password variable. The loop goes until we reach the desired length. The password is then returned into the text box.