const boardSize = 8;
const chessboard = Array(boardSize) // chessboard
  .fill()
  .map(() => Array(boardSize).fill(false));

function getKnightMoves(row, col) {
  const moves = [
    { row: 2, col: 1 },
    { row: 2, col: -1 },
    { row: -2, col: 1 },
    { row: -2, col: -1 },
    { row: 1, col: 2 },
    { row: 1, col: -2 },
    { row: -1, col: 2 },
    { row: -1, col: -2 },
  ];

  const validMoves = [];

  for (const move of moves) {
    const newRow = row + move.row;
    const newCol = col + move.col;

    if (
      newRow >= 0 &&
      newRow < boardSize &&
      newCol >= 0 &&
      newCol < boardSize
    ) {
      validMoves.push({ row: newRow, col: newCol });
    }
  }
  // console.log('validMoves')
  // console.table(validMoves)
  return validMoves;
}
// getKnightMoves(0, 4);

function knightMoves(startRow, startCol, targetRow, targetCol) {
  // debugger
  const queue = [{ row: startRow, col: startCol, path: [] }];
  chessboard[startRow][startCol] = true;

  while (queue.length > 0) {
    const { row, col, path } = queue.shift();
    // console.log('queue after shift')
    // console.table(queue);

    if (row === targetRow && col === targetCol) {
      // return [...path, { row, col }];
      const moves = path.length;
      const formattedPath = path
        .map(({ row, col }) => `[${row},${col}]`)
        .join("\n");
      return `You made it in ${moves} move${
        moves !== 1 ? "s" : ""
      }!  Here's your path:\n${formattedPath}\n[${targetRow},${targetCol}]`;
    }

    let moves = getKnightMoves(row, col);
    for (const move of moves) {
      const { row: newRow, col: newCol } = move;
      // console.log("move", row, col);

      if (!chessboard[newRow][newCol]) {
        chessboard[newRow][newCol] = true;
        // new row and col inserted with previous path
        queue.push({ row: newRow, col: newCol, path: [...path, { row, col }] });
      }
    }
    // break;
  }
  // if no path found
  // return [];
  return "No valid path found.";
}

const startRow = 0;
const startCol = 0;
const targetRow = 2;
const targetCol = 0;

const shortestPath = knightMoves(startRow, startCol, targetRow, targetCol);
// console.log('shortestPath');
console.log(shortestPath);
