// from theodinproject
// https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/etch-a-sketch-project
let grid = document.querySelector("#grid");
let cell = document.createElement("div");
cell.className = "cell";

for (let i = 0; i < 16; i++) {
  grid.appendChild(cell.cloneNode(true));
}

// todo:
// vars&elems:
// btn clear
// btn rgb
// btn darker

// elem grid
// grid size
// elem cell
// cell fill color


// functions:
// set cell fill color
