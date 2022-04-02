const Game = (() => {
  let player = "X";
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

  const startGame = () => {
    isGameActive = true;
  };

  const isActive = () => isGameActive;

  const changePlayer = () => {
    if (player === "X") player = "O";
    else if (player === "O") player = "X";
  };

  const getPlayerName = () => player;

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

    if (!board.includes("")) {
      winner = "TIE";
    }
    changePlayer();
    if (winner) Board.announceWinner(winner);
  };

  return {
    startGame,
    isActive,
    changePlayer,
    getPlayerName,
    handleResultValidation,
  };
})();

const Board = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const tiles = Array.from(document.querySelectorAll(".ttt-box"));
  const winnerLabel = document.querySelector("#ttt-winner");

  const updateBoard = (board, tile, index) => {
    const playerName = Game.getPlayerName();

    if (isEmptyTile(tile) && Game.isActive()) {
      render(tile, playerName);
      board[index] = playerName;
      Game.handleResultValidation(board);
    }
  };

  const isEmptyTile = (tile) => {
    if (tile.innerText === "X" || tile.innerText === "O") {
      return false;
    }
    return true;
  };

  const render = (tile, playerName) => {
    tile.innerText = playerName;
  };

  tiles.forEach((tile, index) => {
    tile.addEventListener("click", () => updateBoard(board, tile, index));
  });

  const announceWinner = (winner) => {
    winnerLabel.textContent = `The winner is ${winner}`;
  };

  return { announceWinner };
})();

Game.startGame();
