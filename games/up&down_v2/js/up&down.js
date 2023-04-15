// ================== TO DO LIST ===============
//
// 1. Make sure to check that you can type in the input area.
//
// <<<<<< WHEN CLICKED "GO BUTTON" >>>>>>>>>>
// 1. Check if the player has input the number between 1 and 100
// 2. Check if the player has input the whole number, not a decimal
//
// <<<<<< GUESS CONDITIONS FOR HIGHER NUMBER >>>>>>>>
// 3. If the player has guessed the number that is higher than the generated number, inform the player to try again with lower number
// 3.1 Repeat this process until... a) the player has guessed the correct number or b) the player has used all 5 chances
//
// <<<<<< GUESS CONDITIONS FOR LOWER NUMBER >>>>>>>>>>
// 4. If the player has guess the number that is lower than the generated number, inform the player to try again with higher number
// 4.1 Repeat the process until... a) the player has guessed the correct number or b) the player has used all 5 chances
//
// <<<<<< GUESS CONDITIONS FOR EQUAL NUMBER >>>>>>>>>
// 5. If the player makes a correct guess, the system should say "you've got it!"

// =================== ATTEMPT 1 NOT SUCCESSFUL ===================

// <<<<<< BASIC FIELDS THAT EXIST FOR THE GAME >>>>>>>>>>
let chanceArea = document.getElementById("chance-area"); // this shows how many chances they got leftover from 5.
let userInput = document.getElementById("user-input"); // this indicates what number the player has guessed
let resultArea = document.getElementById("result-area"); // this shows whether the user needs to guess a higher number or a lower number
// <<<<<< NEEDED DURING PLAY >>>>>>>>
let go = document.getElementById("go"); // this allows the users to guess any number
let reset = document.getElementById("reset"); // this resets the generated number by the computer and the number of chances that each user can have
// <<<<<< INFO FOR THE COMPUTER GENERATED ONLY >>>>>>>>>>>
let computerNum = Math.floor(Math.random() * 100); // this generates a random number by the computer between 0 and 100.

let chances = 5;
let gameOver = false; // unless the user has guessed the incorrect number for 5 times, the game is not over
let history = []; // the computer should remember what numbers have been guessed in the previous attempts

// <<<<<<< ADDITIONAL UI DECORATION FOR UP, DOWN, AND CORRECT >>>>>>>>>>>
// const gifImage = document.getElementById("gif-image");

userInput.addEventListener("focus", function () {
  // this function is created to understand what number each user tries
  userInput.value = "";
});

go.addEventListener("click", play);
resetButton.addEventListener("click", reset);

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    console.log("Please try a number between 1 and 100.");
    return; // this return needs to be located inside this "if" function because otherwise it will stop the javascript to function
  }

  if (userValue % 1 != 0) {
    document.getElementById("userInput").style.borderColor = "red";
    console.log("please input an integer, not a decimal");
    return; // this should check if the user has input an integer or a decimal and display an error box if it is not an integer
  }

  if (history.includes(userValue)) {
    resultArea.textContent =
      "You've already tried this number. Please try another number.";
    return; // this reminds the users that they cannot re-try the tried number.
  }

  // <<<<<< Function about leftover chances >>>>>>
  chances--;
  chanceArea.textContent = `You have ${chances} left.`;
  console.log("chance", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "UP!";
    // resultArea.appendChild(gifImage); // question: is it possible to decorate the message with an image or with a gif picture too?
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!";
  } else {
    resultArea.textContent = "YOU GOT IT!!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = true;
  }
  //   if (gameOver == true) {
  //     go.disabled = true;
  //   }
}

function reset() {
  userInput.value = "";
  pickRandomNum();

  resultArea.textContent = "Here is the outcome:";
}

pickRandomNum();
