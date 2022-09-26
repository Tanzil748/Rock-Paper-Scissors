const userEl = document.getElementById("user-choice");
const computerEl = document.getElementById("computer-choice");
const resultEl = document.getElementById("result");
const choiceEl = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let resultPrint;

function generateComputerChoice() {
  const random = Math.floor(Math.random() * choiceEl.length) + 1;
  if (random === 1) {
    computerChoice = "rock";
  } else if (random === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  computerEl.innerHTML = computerChoice;
}

choiceEl.forEach((choice) =>
  choice.addEventListener("click", function (e) {
    userChoice = e.target.id;
    userEl.innerHTML = userChoice;
    generateComputerChoice();
    displayResult();
  })
);

function displayResult() {
  if (userChoice === computerChoice) {
    resultPrint = "Tie";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    resultPrint = "You Lose";
  } else if (userChoice === "rock" && computerChoice === "scissors") {
    resultPrint = "You Win";
  } else if (userChoice === "paper" && computerChoice === "rock") {
    resultPrint = "You Win";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    resultPrint = "You Lose";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    resultPrint = "You Lose";
  } else if (userChoice === "scissors" && computerChoice === "paper") {
    resultPrint = "You Win";
  }
  resultEl.innerHTML = resultPrint;
}
