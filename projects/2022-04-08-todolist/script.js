const modalEdit = document.querySelector("#modal-edit");
const modalDelete = document.querySelector("#modal-delete");

const modalBtns = document.querySelectorAll(".modal-btn");
modalBtns.forEach((e) => {
  e.addEventListener("click", () => modalEdit.classList.add("hide"));
  e.addEventListener("click", () => modalDelete.classList.add("hide"));
});

const cardBtns = document.querySelectorAll(".card-btn-edit");
cardBtns.forEach((e) => {
  e.addEventListener("click", () => modalEdit.classList.remove("hide"));
});

const deleteBtns = document.querySelectorAll(".card-btn-delete");
deleteBtns.forEach((e) => {
  e.addEventListener("click", () => modalDelete.classList.remove("hide"));
});
