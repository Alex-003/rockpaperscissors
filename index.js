const computerChoiceDisplay = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#user-choice");
const resultDisplay = document.querySelector("#result");
const possibleChoices = document.querySelectorAll(".choice");

let userChoice;
let computerChoice;

possibleChoices.forEach((choice) =>
  choice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.textContent = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "rock";
  }

  if (randomNumber === 2) {
    computerChoice = "scissors";
  }

  if (randomNumber === 3) {
    computerChoice = "paper";
  }

  computerChoiceDisplay.textContent = computerChoice;
}

function getResult() {
  let result;
  if (computerChoice === userChoice) {
    result = "It's a draw!";
    resultDisplay.classList.remove("win", "lose");
    resultDisplay.classList.add("draw");
  } else if (
    (computerChoice === "rock" && userChoice === "paper") ||
    (computerChoice === "paper" && userChoice === "scissors") ||
    (computerChoice === "scissors" && userChoice === "rock")
  ) {
    result = "You Win!";
    resultDisplay.classList.remove("lose", "draw");
    resultDisplay.classList.add("win");
  } else {
    result = "You Lose!";
    resultDisplay.classList.remove("win", "draw");
    resultDisplay.classList.add("lose");
  }

  resultDisplay.textContent = result;
}


/* Things to learn in this mini game

- Query Selector
- InnerHTML
- For each
- Math.floor math.random
- get element by id
- Improve 'conditional states'*/
