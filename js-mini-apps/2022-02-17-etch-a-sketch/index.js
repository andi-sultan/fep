// from theodinproject
// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project

let gridSize = 50;
let cellFillColor = "#000";
let grid = document.querySelector("#grid");
const btnClear = document.querySelector("#clear");
const btnRgb = document.querySelector("#rgb");
const btnDarker = document.querySelector("#darker");

function createCells(n) {
  grid.innerHTML = "";
  n = n > 100 ? 100 : n;
  totalCells = n ** 2;
  gridCellWidth = `${100 / n}%`;
  for (let i = 0; i < totalCells; i++) {
    const cell = document.createElement("div");
    cell.className = "cell";
    cell.style.flex = ` 0 0 ${gridCellWidth}`;
    cell.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = cellFillColor;
    });
    grid.appendChild(cell);
  }
}

function setCellFillColor(c) {
  cellFillColor = c;
}

// clear event
btnClear.addEventListener("click", () => {
  gridnum = prompt("gridSize?");
  gridSize = 20;
  createCells(gridSize);
});
// // rgb event
// btnRgb.addEventListener();
// // darker event
// btnDarker.addEventListener();

createCells(gridSize);
