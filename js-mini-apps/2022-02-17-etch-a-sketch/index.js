// from theodinproject
// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project

let gridSize = 50;
let cellFillColor = "#000";
let fillColorMode = "default";
let darkerCount = 0;
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
      fillCellColor(e.target.style);
    });
    grid.appendChild(cell);
  }
}

function fillCellColor(element) {
  if (fillColorMode == "rgb") {
    let colorr = Math.floor(Math.random() * 16777215).toString(16);
    let colorrr = `#${colorr}`;
    element.backgroundColor = colorrr;
  } else if (fillColorMode == "darker") {
    let darkerColor = `hsl(0,0%,${100 - darkerCount * 10}%)`;
    darkerCount = darkerCount + 1 > 10 ? 10 : darkerCount + 1;
    element.backgroundColor = darkerColor;
  } else {
    element.backgroundColor = cellFillColor;
  }
}

function setCellFillColor(c) {
  cellFillColor = c;
}

// clear event
btnClear.addEventListener("click", () => {
  fillColorMode = "default";
  darkerCount = 0;
  gridNum = null;
  gridNum = prompt("gridSize?");
  while (isNaN(gridNum) || gridNum > 100 || gridNum < 1) {
    if (gridNum > 100) {
      gridNum = prompt("please enter a number no more than 100! gridSize?");
    } else if (gridNum < 1) {
      gridNum = prompt("please enter a number more than 0! gridSize?");
    } else {
      gridNum = prompt("please enter a number! gridSize?");
    }
  }
  gridSize = !isNaN(gridNum) ? gridNum : 4;
  createCells(gridSize);
});

btnRgb.addEventListener("click", () => {
  fillColorMode = "rgb";
});
// todo: darker event
btnDarker.addEventListener("click", () => {
  fillColorMode = "darker";
  darkerCount = 0;
});

createCells(gridSize);
