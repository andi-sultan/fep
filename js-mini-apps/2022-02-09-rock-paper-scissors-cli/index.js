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
  console.log(`p=${playerSelection}`);
  console.log(`c=${computerSelection}`);
  const playerWin = winresults.find((result) => {
    return playerSelection == result[0] && computerSelection == result[1];
  });
  return playerWin ? "win" : "lose";
}

function isInputValid(input) {
  const valid = selections.find((selection) => {
    return input.toLowerCase() == selection.toLowerCase();
  });
  return valid ? true : false;
}

function playRound(playerSelection, computerSelection) {
  if (isInputValid(playerSelection)) {
    return concludeWinner(
      playerSelection.toLowerCase(),
      computerSelection.toLowerCase()
    );
  }
  return 'invalid input'
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }
// }

function computerPlay() {
  return selections[Math.floor(Math.random() * selections.length)];
}

const playerSelection = "PAper";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
