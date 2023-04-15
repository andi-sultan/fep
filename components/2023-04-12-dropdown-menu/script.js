const dropMenu = (() => {
  const start = (elemId) => {
    const menuElem = document.getElementById(elemId);

    const dropBtns = menuElem.querySelectorAll(".menu-btn-drop");
    dropBtns.forEach((dropBtn) => {
      dropBtn.addEventListener("click", () => {
        const submenu = dropBtn.nextElementSibling;
        submenu.classList.toggle("show");
      });
    });

    document.body.addEventListener("click", (e) => {
      dropBtns.forEach((dropBtn) => {
        if (e.target !== dropBtn && !e.target.closest(".menu-submenu")) {
          const submenu = dropBtn.nextElementSibling;
          submenu.classList.remove("show");
        }
      });
    });
  };

  return { start };
})();

dropMenu.start("menu1");
dropMenu.start("menu2");
