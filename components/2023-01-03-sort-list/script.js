"use strict";
const list = document.querySelectorAll(".list-item");

list.forEach((item) => {
  item.draggable = true;
  console.log(this);

  item.addEventListener("dragstart", () => {
    console.log(this);
  });

  item.ondragenter = () => {
    // console.log("drag enter");
  };

  item.ondragleave = () => {
    // console.log("drag leave");
  };

  item.ondragover = (e) => {
    e.preventDefault();
    // console.log("drag over");
  };

  item.ondrop = (e) => {
    // e.preventDefault();
    // console.log("drag drop");
  };
});
