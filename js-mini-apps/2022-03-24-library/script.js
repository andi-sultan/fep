let libId = 0;
let myLibrary = [];

const form = document.getElementById("form");
const cardContainer = document.getElementById("cardContainer");
const add = document.getElementById("add");
const modal = document.getElementById("modal");
const cancel = document.getElementById("cancel");

const modalTitle = document.getElementById("modalTitle");
const modalAuthor = document.getElementById("modalAuthor");
const modalNumOfPages = document.getElementById("modalNumOfPages");

class Library {
  constructor(
    libId,
    myLibrary,
    cardContainer,
    modalTitle,
    modalAuthor,
    modalNumOfPages
  ) {
    this.libId = libId;
    this.myLibrary = myLibrary;
    this.cardContainer = cardContainer;
    this.modalTitle = modalTitle;
    this.modalAuthor = modalAuthor;
    this.modalNumOfPages = modalNumOfPages;
  }

  addBookToLibrary() {
    this.libId += 1;
    this.myLibrary.push({
      id: this.libId,
      title: this.modalTitle.value,
      author: this.modalAuthor.value,
      numOfPages: this.modalNumOfPages.value,
    });
    this.cardContainer.innerHTML = "";
    this.render();
  }

  remove(id) {
    let toRemove = this.myLibrary.find((lib) => lib.id === id);
    let index = this.myLibrary.indexOf(toRemove);
    this.myLibrary.splice(index, 1);
    this.cardContainer.innerHTML = "";
    this.render();
  }

  renderCard(a) {
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
    cardDel.textContent = "Remove";
    cardDel.addEventListener("click", () => this.remove(a.id));

    card.appendChild(cardTitle);
    card.appendChild(cardAuthor);
    card.appendChild(cardPages);
    card.appendChild(cardStatus);
    card.appendChild(cardDel);
    return card;
  }

  render() {
    this.myLibrary.forEach((lib) => {
      this.cardContainer.appendChild(this.renderCard(lib));
    });
    this.modalTitle.value = "";
    this.modalAuthor.value = "";
    this.modalNumOfPages.value = "";
  }
}

const library = new Library(
  libId,
  myLibrary,
  cardContainer,
  modalTitle,
  modalAuthor,
  modalNumOfPages
);

add.addEventListener("click", () => {
  modal.classList.add("active");
});

cancel.addEventListener("click", () => {
  modal.classList.remove("active");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  library.addBookToLibrary();
  console.table(myLibrary);
  modal.classList.remove("active");
});
