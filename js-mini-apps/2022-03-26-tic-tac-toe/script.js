const gameTiles = Array.from(document.querySelectorAll(".ttt-box"));

const Game = (() => {
  let player = "X";
  let isGameActive = false;
  const startGame = (tiles) => {
    Board.setTiles(tiles);
    isGameActive = true;
  };

  const isActive = () => isGameActive;

  const changePlayer = () => {
    if (player === "X") player = "O";
    else if (player === "O") player = "X";
  };

  const getPlayerName = () => player;

  // todo: cek winner, set player name
  return { startGame, isActive, changePlayer, getPlayerName };
})();

const Board = (() => {
  let board = ["", "", "", "", "", "", "", "", ""];
  const updateBoard = (board, tile, index) => {
    const playerName = Game.getPlayerName();
    board[index] = playerName;

    if (isEmptyTile(tile) && Game.isActive()) render(tile, playerName);
    // todo: Game.handleResultValidation()
    Game.changePlayer();
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

  const setTiles = (tiles) => {
    tiles.forEach((tile, index) => {
      tile.addEventListener("click", () => updateBoard(board, tile, index));
    });
  };

  return { setTiles };
})();

Game.startGame(gameTiles);
