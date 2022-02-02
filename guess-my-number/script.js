"use strict";

let number = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

const displayMessage = (message) => {
  document.querySelector(".message").textContent = message;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = +document.querySelector(".guess").value;
  if (!guess) {
    displayMessage("⛔ No number!");
  } else if (guess === number) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else {
    displayMessage(guess > number ? "📈 Too high!" : "📉 Too low!");
    if (score > 0) {
      score--;
      document.querySelector(".score").textContent = score;
    }
    if (score === 0) displayMessage("😭 You lost the game!");
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  displayMessage("Start guessing...");
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
});
