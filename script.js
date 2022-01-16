var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
// Password values: 

character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
space = [];

var choices;

var toUpper = function (x) {
    return x.toUpperCase();
};

letters = letters.map(toUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    newpassword = generatePassword();
    document.getElementById("password").placeholder = newpassword;
});

// function to generate password
function generatePassword() {
    // Asks user input
    enter = parseInt(prompt("How many characters would you like your password? Choose between 8 and 128"));
  
    if (!enter) {
        alert("This needs a value in order to proceed");
    } else if (enter < 8 || enter > 128) {
      
        enter = parseInt(prompt("You must choose between 8 and 128"));
       

    } else {
        // Continued when validated 
        confirmNumber = confirm("Would you like your password to contain numbers?");
        confirmCharacter = confirm("Would you like your password to contain special characters?");
        confirmUppercase = confirm("Would you like your password to contain Uppercase letters?");
        confirmLowercase = confirm("Would you like your password to contain Lowercase letters?");
    };

    // Else/if
    if (confirmCharacter && !confirmNumber && !confirmUppercase && !confirmLowercase) {
        choices = alert("You must choose at least one criteria!");

    }
    
    else if (!confirmCharacter && confirmNumber && confirmUppercase && confirmLowercase) {

        choices = character.concat(number, letters);
    }
    // Else if for 3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, letters);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, letters);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase) {
        choices = character.concat(letters, letters);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(letters, letters);
    }

    var password = [];

   
    // Random selection of all variables: 
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
  
    var newpassword = password.join("");
    UserInput(newpassword);
    return newpassword;
}
// password into the textbox

function UserInput(newpassword) {
    document.getElementById("password").textContent = newpassword;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
    copyPassword();
});



