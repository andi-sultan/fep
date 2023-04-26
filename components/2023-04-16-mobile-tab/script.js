const page = (() => {
  let pageItems = null;
  const start = (elemId) => {
    const page = document.getElementById(elemId);

    pageItems = page.querySelectorAll(".page-item");
    pageItems[0].classList.add("show");
  };

  const setPage = (pageNum) => {
    if (pageItems) {
      pageItems.forEach((pageItem) => {
        pageItem.classList.remove("show");
        if (pageItem.dataset.id == pageNum) {
          pageItem.classList.add("show");
        }
      });
    }
  };

  return { start, setPage };
})();

const tab = (() => {
  const start = (elemId) => {
    const tabMenu = document.getElementById(elemId);
    const tabLinks = tabMenu.querySelectorAll(".tab-link");
    tabLinks.forEach((tabLink) => {
      tabLink.addEventListener("click", (e) => {
        e.preventDefault();
        const dataId = e.target.closest(".tab-link").dataset.id;
        page.setPage(dataId);
      });
    });
  };

  return { start };
})();

page.start("page");
tab.start("tab");
