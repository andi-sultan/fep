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
  return playerWin ? "win" : "lose";
}

function isInputValid(input) {
  const valid = selections.find((selection) => {
    return input.toLowerCase() == selection.toLowerCase();
  });
  return valid ? true : false;
}

function playRound(playerSelection, computerSelection) {
  console.log(`player   choose = ${playerSelection.toLowerCase()}`);
  console.log(`computer choose = ${computerSelection.toLowerCase()}`);
  if (isInputValid(playerSelection)) {
    return concludeWinner(
      playerSelection.toLowerCase(),
      computerSelection.toLowerCase()
    );
  }
  return "invalid input";
}

function computerPlay() {
  return selections[Math.floor(Math.random() * selections.length)];
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log(`iteration #${i + 1}`);
    const playerInput = prompt(
      "input your selection between rock, paper and scissors:"
    );
    const computerInput = computerPlay();
    console.log(playRound(playerInput, computerInput));
  }
}

game();
