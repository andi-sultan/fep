const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

const pgc = document.getElementsByClassName("page-content");
pageContents = Array.from(pgc);

home.addEventListener("click", () => {
  pageContents.forEach((content) => {
    if (content.dataset.id == "home") {
      content.classList.remove("hide");
    } else {
      content.classList.add("hide");
    }
  });
});

menu.addEventListener("click", () => {
  pageContents.forEach((content) => {
    if (content.dataset.id == "menu") {
      content.classList.remove("hide");
    } else {
      content.classList.add("hide");
    }
  });
});

contact.addEventListener("click", () => {
  pageContents.forEach((content) => {
    if (content.dataset.id == "contact") {
      content.classList.remove("hide");
    } else {
      content.classList.add("hide");
    }
  });
});
