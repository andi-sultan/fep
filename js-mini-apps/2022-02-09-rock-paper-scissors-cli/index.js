const selections = ["rock", "paper", "scissors"];

const winresults = [
  ["rock", "scissors"],
  ["paper", "rock"],
  ["scissors", "paper"],
];

function isInputValid(i) {
  return selections.find((s) => {
    console.log(`s=${s}`);
    console.log(`i=${i}`);
    console.log(`i == s=${i == s}`);
    return i == s;
  });
}

function playRound(playerSelection, computerSelection) {
  return isInputValid(computerSelection);
}

// function game() {
//   for (let i = 0; i < 5; i++) {
//     playRound();
//   }
// }

function computerPlay() {
  return selections[Math.floor(Math.random() * selections.length)];
}

const playerSelection = "scissorsd";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
