let computerNum = Math.floor(Math.random() * 100);
let playButton = document.getElementById("play-button");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");
let resetButton = document.getElementById("reset-button");

let chances = 5;
let chanceArea = document.getElementById("chance-area");
let gameOver = false;

let history = [];

playButton.addEventListener("click", play);
resetButton.addEventListener("click", reset);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function pickRandomNum() {
  console.log("Correct", computerNum);
}

function play() {
  let userValue = userInput.value;

  if (userValue < 1 || userValue > 100) {
    resultArea.textContent = "1과 100 사이의 숫자를 입력해 주세요.";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent =
      "이미 입력된 숫자 입니다. 다른 숫자를 입력해 주세요.";
    return;
  }

  chances--;
  chanceArea.textContent = `남은 기회: ${chances}번`;
  console.log("chance", chances);

  if (userValue < computerNum) {
    resultArea.textContent = "UP!!!";
  } else if (userValue > computerNum) {
    resultArea.textContent = "DOWN!!!";
  } else {
    resultArea.textContent = "맞추셨습니다!!!";
    gameOver = true;
  }

  history.push(userValue);
  console.log(history);

  if (chances < 1) {
    gameOver = "true";
  }

  if (gameOver == true) {
    playButton.disabled = true;
  }
}

function reset() {
  userInput.value = "";
  pickRandomNum();

  resultArea.textContent = "결과 값이 여기 나옵니다.";
}

pickRandomNum();
