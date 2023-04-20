// const pages = document.getElementById("page");
const page = (() => {
  const start = (elemId) => {
    const page = document.getElementById(elemId);

    const pageItems = page.querySelectorAll(".page-item");
  };

  return { start };
})();

const tab = (() => {
  const start = (elemId) => {
    const tabMenu = document.getElementById(elemId);
    const tabLinks = tabMenu.querySelectorAll(".tab-link");
    tabLinks.forEach((tabLink) => {
      tabLink.addEventListener("click", (e) => {
        e.preventDefault();
        const dataId = e.target.dataset.id;
        // todo: click link to open page
      });
    });
  };

  return { start };
})();

page.start("page");
tab.start("tab");
