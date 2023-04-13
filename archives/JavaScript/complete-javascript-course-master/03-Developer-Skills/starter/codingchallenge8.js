const secretNumber = Math.trunc(Math.number() * 20) + 1;
let score = 20;
document.querySelector(".number").textContent = secretNumber;

/*
document.querySelector(".again").textContent = "Try again";
*/

document.querySelector(".check").addEventListener("click", function () {
  const guess = document.querySelector(".guess").value;
  console.log(guess, typeof guess);
});

/* real answer:

document.querySelector(".again").addEventListener("click", function() {
    let score = 20;
    const secretNumber = Math.trunc(Math.number() * 20) + 1;

    document.querySelector(".message").textContent = "Start guessing...";
    document.querySelector(".score").textContent = "score";
    document.querySelector("number").textContent = ?;
    document.querySelector(".guess").value = '';
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector("number").style.width = "15rem";
})
*/

// when there is no input
if (!guess) {
  document.querySelector(".message").textContent = "No number!";

  // when the player wins
} else if (guess === secretNumber) {
  document.querySelector(".message").textContent = "Correct Number!";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector("number").style.width = "15rem";

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
