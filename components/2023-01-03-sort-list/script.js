"use strict";
const list = document.querySelectorAll(".list-item");

let current = null;
let item_count = 0;
list.forEach((item) => {
  item.draggable = true;
  item.dataset.position = 0;
  item_count += 1;

  item.addEventListener("dragstart", () => {
    // console.log("drag enter");
    current = item;
    list.forEach((it) => {
      if (it != current) it.classList.add("hint");
    });
  });

  item.addEventListener("dragenter", () => {
    // console.log("drag enter");
    if (item != current) item.classList.add("active");
  });

  item.addEventListener("dragleave", () => {
    // console.log("drag leave");
    item.classList.remove("active");
  });

  item.addEventListener("dragend", () => {
    // console.log("drag end");
    list.forEach((it) => {
      it.classList.remove("hint");
      it.classList.remove("active");
    });
  });

  item.addEventListener("dragover", (e) => {
    // console.log("drag over");
    e.preventDefault(); // to make drop possible
  });

  item.addEventListener("drop", (e) => {
    // console.log("drag drop");
    // e.preventDefault();
    if (item != current) {
      let currentpos = 0,
        droppedpos = 0;
      document.querySelectorAll(".list-item").forEach((l, i) => {
        if (current == l) currentpos = i;
        if (item == l) droppedpos = i;
      });

      if (currentpos < droppedpos) {
        item.parentElement.insertBefore(current, item.nextSibling);
      } else {
        item.parentElement.insertBefore(current, item);
      }
    }
  });
});
