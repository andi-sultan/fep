const selections = ["rock", "paper", "scissors"];

const winresults = [
  ["rock", "scissors"],
  ["paper", "rock"],
  ["scissors", "paper"],
];

function concludeWinner(playerSelection, computerSelection) {
  if (playerSelection == computerSelection) {
    return "same";
  }
  const playerWin = winresults.find((result) => {
    return playerSelection == result[0] && computerSelection == result[1];
  });
  return playerWin;
}

function computerPlay() {
  return selections[Math.floor(Math.random() * selections.length)];
}

const plyr = document.querySelector("#plyr");
const comp = document.querySelector("#comp");
const plyrScoreLabel = document.querySelector("#plyr-score");
const compScoreLabel = document.querySelector("#comp-score");
const winner = document.querySelector("#winner");
let plyrScore = 0;
let compScore = 0;
function game(playerInput, computerInput) {
  const checkWinner = concludeWinner(playerInput, computerInput);
  if (!(plyrScore == 5 || compScore == 5)) {
    if (checkWinner && checkWinner !== "same") {
      plyrScore += 1;
      plyrScoreLabel.textContent = plyrScore;
    } else if (!checkWinner) {
      compScore += 1;
      compScoreLabel.textContent = compScore;
    }

    plyr.textContent = playerInput;
    comp.textContent = computerInput;
    if (plyrScore == 5 || compScore == 5) {
      winner.textContent = plyrScore > compScore ? "player" : "computer";
    }
  }
}

const btn = document.querySelectorAll(".btn");
btn.forEach((b) => {
  b.addEventListener("click", (e) => {
    game(e.target.value, computerPlay());
  });
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", () => {
  plyrScore = 0;
  compScore = 0;
  plyr.textContent = "";
  comp.textContent = "";
  plyrScoreLabel.textContent = "0";
  compScoreLabel.textContent = "0";
  winner.textContent = "";
});
