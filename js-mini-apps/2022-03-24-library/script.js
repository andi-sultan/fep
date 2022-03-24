let libId = 0;
let myLibrary = [];

const cardContainer = document.getElementById("cardContainer");
const add = document.getElementById("add");
const modal = document.getElementById("modal");
const cancel = document.getElementById("cancel");
const save = document.getElementById("save");

function Book() {
  // the constructor...
}

const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalNumOfPages = document.getElementById("modalNumOfPages");

function addBookToLibrary() {
  libId += 1;
  myLibrary.push({
    id: libId,
    title: modalTitle.value,
    author: modalAuthor.value,
    numOfPages: modalNumOfPages.value,
  });
  cardContainer.innerHTML = "";
  render();
}

function remove(id) {
  let toRemove = myLibrary.find((lib) => lib.id === id);
  let index = myLibrary.indexOf(toRemove);
  myLibrary.splice(index, 1);
  cardContainer.innerHTML = "";
  render();
}

function renderCard(a) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardTitle = document.createElement("div");
  cardTitle.classList.add("card-title");
  cardTitle.textContent = "Title: " + a.title;

  const cardAuthor = document.createElement("div");
  cardAuthor.classList.add("card-author");
  cardAuthor.textContent = "Author: " + a.author;

  const cardPages = document.createElement("div");
  cardPages.classList.add("card-pages");
  cardPages.textContent = "# of pages: " + a.numOfPages;

  const cardStatus = document.createElement("button");
  cardStatus.classList.add("card-status");
  cardStatus.textContent = "Not Read";
  cardStatus.addEventListener("click", () => {
    if (cardStatus.textContent === "Not Read") {
      cardStatus.textContent = "Read";
    } else if (cardStatus.textContent === "Read") {
      cardStatus.textContent = "Not Read";
    }
  });

  const cardDel = document.createElement("button");
  cardDel.classList.add("card-status");
  cardDel.dataset.id = a.id;
  cardDel.textContent = "Remove";
  cardDel.addEventListener("click", () => remove(a.id));

  card.appendChild(cardTitle);
  card.appendChild(cardAuthor);
  card.appendChild(cardPages);
  card.appendChild(cardStatus);
  card.appendChild(cardDel);
  return card;
}

function render() {
  myLibrary.forEach((lib) => {
    cardContainer.appendChild(renderCard(lib));
  });
  modalTitle.value = "";
  modalAuthor.value = "";
  modalNumOfPages.value = "";
}

add.addEventListener("click", () => {
  modal.classList.add("active");
});

cancel.addEventListener("click", () => {
  modal.classList.remove("active");
});

save.addEventListener("click", () => {
  addBookToLibrary();
  console.table(myLibrary);
  modal.classList.remove("active");
});
