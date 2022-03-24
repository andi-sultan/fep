const add = document.querySelectorAll(".btn-add")[0];
const modal = document.querySelector("#modal");
const cancel = document.querySelectorAll(".cancel")[0];

add.addEventListener("click", () => {
  modal.classList.add("active");
});

cancel.addEventListener("click", () => {
  modal.classList.remove("active");
});
