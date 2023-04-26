const dropMenu = (() => {
  const start = (elemId) => {
    const menuElem = document.getElementById(elemId);

    const dropBtns = menuElem.querySelectorAll(".menu-btn-drop");
    dropBtns.forEach((dropBtn) => {
      dropBtn.addEventListener("click", () => {
        if (window.innerWidth < 720) {
          const submenu = dropBtn.nextElementSibling;
          submenu.classList.toggle("show");
        }
      });
      dropBtn.addEventListener("mouseover", () => {
        if (window.innerWidth >= 720) {
          const submenu = dropBtn.nextElementSibling;
          submenu.classList.add("show");
        }
      });
      dropBtn.addEventListener("mouseleave", (e) => {
        const submenu = dropBtn.nextElementSibling;
        if (window.innerWidth >= 720 && e.target.closest(".menu-submenu")) {
          submenu.classList.remove("show");
        }
      });
    });

    document.body.addEventListener("click", (e) => {
      dropBtns.forEach((dropBtn) => {
        if (e.target !== dropBtn && !e.target.closest(".menu-submenu")) {
          if (window.innerWidth < 720) {
            const submenu = dropBtn.nextElementSibling;
            submenu.classList.remove("show");
          }
        }
      });
    });

    document.body.addEventListener("mouseover", (e) => {
      dropBtns.forEach((dropBtn) => {
        if (e.target !== dropBtn && !e.target.closest(".menu-submenu")) {
          if (window.innerWidth >= 720) {
            const submenu = dropBtn.nextElementSibling;
            submenu.classList.remove("show");
          }
        }
      });
    });
  };

  return { start };
})();

dropMenu.start("menu1");
dropMenu.start("menu2");
