// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

/*
document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.guess').value);

    document.querySelector('.message').textContent = 'Correct Number!';
});
*/

/*
const x = function () {
    console.log(23);
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = document.querySelector('.guess').value;
    console.log(guess, typeof guess);
});

if(!guess) {
    document.querySelector('.message').textContent = 'No number!';
}
*/

const secretNumber = Math.trunc(Math.number() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess, typeof guess);
});

// when there is no input
if (!guess) {
  document.querySelector(".message").textContent = "No number!";

  // when the player wins
} else if (guess === secretNumber) {
  document.querySelector(".message").textContent = "Correct Number!";
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector("number").style.width = "30rem";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#60b347";

  // when the guess is too high
} else if (guess > secretNumber) {
  if (score > 1) {
    document.querySelector(".message").textContent = "Too high!";
    score--;
    document.querySelector(".score").textContent = "score";
  } else {
    document.querySelector(".message").textContent = "you lost the game.";
    document.querySelector(".score").textContent = 0;
  }
} else if (guess < secretNumber) {
  if (score > 0) {
    document.querySelector(".message").textContent = "Too low!";
    score--;
    document.querySelector(".score").textContent = "score";
  }
}
