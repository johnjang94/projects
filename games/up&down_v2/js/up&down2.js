// ================== TO DO LIST ===============
//
// 1. Make sure to check that the computer generates a random number on the console.log ✅
// 2. Make sure to check that the player can input the number in the input box. ✅
//
// 3. Make sure that the computer understands the number condition either for "Up", "Down" or "Equal" ✅
// <<<<<< GUESS CONDITIONS FOR HIGHER NUMBER >>>>>>>>
// // If the player has guessed the number that is higher than the generated number, inform the player to try again with lower number
// // Repeat this process until... a) the player has guessed the correct number or b) the player has used all 5 chances
//
// <<<<<< GUESS CONDITIONS FOR LOWER NUMBER >>>>>>>>>>
// // If the player has guess the number that is lower than the generated number, inform the player to try again with higher number
// // Repeat the process until... a) the player has guessed the correct number or b) the player has used all 5 chances
//
// <<<<<< GUESS CONDITIONS FOR EQUAL NUMBER >>>>>>>>>
// // If the player makes a correct guess, the system should say "you've got it!"
//
// ------ ADDITIONAL CONDITION FOR "GO BUTTON" -------
// A. Check if the player has input the number between 1 and 100 (and colour the alert with red) ✅
// B. Check if the player has input the whole number, not a decimal ✅
//
// 4. Make sure each player gets only 5 chances.
// // The system does not deduct the chance for repeat.

// <<<<<< BASIC FIELDS THAT EXIST FOR THE GAME >>>>>>>>>>
let chanceArea = document.getElementById("chance-area"); // this shows how many chances they got leftover from 5.
let userInput = document.getElementById("user-input"); // this indicates what number the player has guessed
let resultArea = document.getElementById("result-area"); // this shows whether the user needs to guess a higher number or a lower number
// <<<<<< NEEDED DURING PLAY >>>>>>>>
let myButton = document.getElementById("my-button"); // this allows the users to guess any number
let resetButton = document.getElementById("reset"); // this resets the generated number by the computer and the number of chances that each user can have
// <<<<<< INFO FOR THE COMPUTER GENERATED ONLY >>>>>>>>>>>
let computerNum = Math.floor(Math.random() * 100) + 1; // this generates a random number by the computer between 0 and 100.
let chances = 5;

// THINKING ABOUT THE HISTORY
let gameOver = false;
let history = [];

myButton.addEventListener("click", play);
resetButton.addEventListener("click", function () {
  location.reload();
});

function play() {
  let userValue = userInput.value;

  if (userValue < computerNum) {
    resultArea.textContent = "Higher number!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "Lower number!";
  } else {
    resultArea.textContent = "You got it!!";
    chanceArea.style.display = "none";
    gameOver = true;
  }

  if (userValue < 1 || userValue > 100) {
    (resultArea.textContent = "Please try a number between 1 and 100"),
      (resultArea.style.color = "red");
    document.getElementById("user-input").style.borderColor = "red";
    return;
  }

  if (history.includes(userValue)) {
    (resultArea.textContent =
      "You've already tried this number. Please try another number."),
      (resultArea.style.color = "green");
    return;
  } else {
    history.push(userValue);
  }

  chances--;

  if (chances < 1) {
    (chanceArea.textContent = `GAME OVER`),
      (chanceArea.style.color = "#8b0000");
    resultArea.style.display = "none";
  } else if (chances < 3 && chances > 1) {
    (chanceArea.textContent = `You have: ${chances} chances left`),
      (chanceArea.style.color = "violet");
  } else {
    (chanceArea.textContent = `You have: ${chances} chances left`),
      (chanceArea.style.color = "blue");
  }
  console.log("chance", chances);

  if (chances == 1) {
    (chanceArea.textContent = `This is your LAST CHANCE!`),
      (chanceArea.style.color = "red");
  }
  console.log(chances);

  if (userValue % 1 != 0) {
    (resultArea.textContent = "Please try an integer, not a decimal"),
      (resultArea.style.color = "red");
    document.getElementById("user-input").style.borderColor = "red";
  } else {
    resultArea.style.color = "black";
    document.getElementById("user-input").style.borderColor = "black";
    return; // this should check if the user has input an integer or a decimal and display an error box if it is not an integer
  }

  if (chances < 1) {
    gameOver = "true";
    document.getElementById("myButton").disabled = true;
  }
  console.log(chances);
}

function pickRandomNum() {
  console.log("Correct", computerNum);
}

pickRandomNum(); // the reason I could not see the number on the console.log earlier is that I did not call this function.
