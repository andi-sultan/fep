const modal = document.getElementById("ttt-gameModal");
const display = document.getElementById("ttt-display");
const start = document.getElementById("ttt-start");

const player1Input = document.getElementById("ttt-input-player1");
const player2Input = document.getElementById("ttt-input-player2");

start.addEventListener("click", function () {
  modal.classList.add("hide");
  display.classList.add("show");
});

const Player = (name) => {
  const getName = () => name;
  return { getName };
};

const Game = (() => {
  const gameBoard = ["", "", "", "", "", "", "", "", ""];
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getPlayer = () => {};

  const checkWinner = () => {
    
  };

  const getPlayerTurn = () => {};

  const restart = () => {};

  const start = () => {};

  return { getPlayer, checkWinner, getPlayerTurn, restart, start };
})();

const Display = (() => {
  const getPlayerInput = () => {};

  const render = () => {};

  return { getPlayerInput, render };
})();
