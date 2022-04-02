const modal = document.querySelector("#ttt-gameModal");
const display = document.getElementById("ttt-display");
const start = document.querySelector("#ttt-start");
const player1Label = document.getElementById("ttt-player1");
const player2Label = document.getElementById("ttt-player2");

start.addEventListener("click", () => {
  const player1Input = document.getElementById("ttt-input-player1").value;
  const player2Input = document.getElementById("ttt-input-player2").value;
  Game.startGame(player1Input, player2Input);
  modal.classList.add("hide");
  display.classList.add("show");
});

const Game = (() => {
  let player;
  let player1 = { label: "X" };
  let player2 = { label: "O" };
  let isGameActive = false;
  /*
    Indexes within the board
    [0] [1] [2]
    [3] [4] [5]
    [6] [7] [8]
  */
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

  const startGame = (p1name, p2name) => {
    isGameActive = true;
    player1.name = p1name ? p1name : "P1";
    player2.name = p2name ? p2name : "P2";
    player = player1;
    player1Label.textContent = `Player 1: ${player1.name} (${player1.label})`;
    player2Label.textContent = `Player 2: ${player2.name} (${player2.label})`;
    Board.renderPlayerTurn(player);
  };

  const isActive = () => isGameActive;

  const changePlayer = () => {
    if (player.label === "X") player = player2;
    else if (player.label === "O") player = player1;
  };

  const getPlayer = () => player;

  const handleResultValidation = (board) => {
    let roundWon = false;
    let winner;
    for (let i = 0; i <= 7; i++) {
      const winCondition = winningConditions[i];
      const a = board[winCondition[0]];
      const b = board[winCondition[1]];
      const c = board[winCondition[2]];
      if (a === "" || b === "" || c === "") {
        continue;
      }
      if (a === b && b === c) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      isGameActive = false;
      winner = player;
    }

    const boardIsFull = !board.includes("");
    if (boardIsFull && isGameActive) {
      winner = "TIE";
    }

    changePlayer();

    if (winner) {
      Board.announceWinner(winner);
    } else {
      Board.renderPlayerTurn(player);
    }
  };

  const reset = () => {
    Board.reset();
    startGame(player1.name, player2.name);
  };

  return {
    startGame,
    isActive,
    changePlayer,
    getPlayer,
    handleResultValidation,
    reset,
  };
})();

const Board = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const tiles = Array.from(document.querySelectorAll(".ttt-box"));
  const winnerLabel = document.querySelector("#ttt-winner");
  const playerTurnLabel = document.querySelector("#ttt-plyr-turn");

  const updateBoard = (board, tile, index) => {
    const player = Game.getPlayer();

    if (isEmptyTile(tile) && Game.isActive()) {
      render(tile, player.label);
      board[index] = player.label;
      Game.handleResultValidation(board);
    }
  };

  const isEmptyTile = (tile) => {
    if (tile.innerText === "X" || tile.innerText === "O") {
      return false;
    }
    return true;
  };

  const render = (tile, playerLabel) => {
    tile.textContent = playerLabel;
  };

  const renderPlayerTurn = (player) => {
    playerTurnLabel.textContent = `${player.name}'s turn (${player.label})...`;
  };

  tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => updateBoard(board, tile, index));
  });

  const announceWinner = (winner) => {
    if (winner === "TIE") {
      winnerLabel.textContent = `It's a ${winner}`;
    } else {
      winnerLabel.textContent = `The winner is ${winner.name} (${winner.label})`;
    }
    playerTurnLabel.textContent = "";
    winnerLabel.classList.remove("hide");
  };

  const reset = () => {
    board = ["", "", "", "", "", "", "", "", ""];
    tiles.forEach((tile) => {
      tile.textContent = "";
    });
    winnerLabel.textContent = "";
    playerTurnLabel.textContent = "";
  };

  return { renderPlayerTurn, announceWinner, reset };
})();

const Controls = (() => {
  const reset = document.querySelector("#ttt-reset");
  reset.addEventListener("click", () => {
    Game.reset();
  });
})();
