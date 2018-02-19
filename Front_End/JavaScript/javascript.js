

var name = false;
var age = false;
var height = false;
var pet = false;
var userInput

userInput =  prompt("Enter your first and last Name.");

if((userInput.split(" "))[0].charAt(0) == (userInput.split(" "))[1].charAt(0)) {
   name = true;
}

userInput = prompt("Enter your age.")

if((userInput < 31) || (userInput > 19)) {
  age = true;
}

userInput = prompt("Enter your height in centimeters.")

if(userInput > 169) {
  userInput = true;
}

userInput = prompt("Enter your pets Name.")
if(userInput.charAt(userInput.length - 1) === 'y') {
  pet = true
}

if(name && age && userInput && pet) {
  console.log("Welcome to the spy lair...");
}

/*
  Initially wanted to use a a nested if else but decided
  against it because I wanted all four statements to be asked
  regardless of the answer. After questioning I wanted it
   to be evaluated at the end.
*/
