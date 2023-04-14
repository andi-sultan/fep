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
  };

  return { start };
})();

dropMenu.start("menu1");
dropMenu.start("menu2");
