document.querySelectorAll(".action-menu").forEach((actionMenu) => {
  const actionMenuBtn = actionMenu.querySelector(".action-menu__btn");
  const menuOption = actionMenu.querySelector(".action-menu__option");

  menuOption.classList.add("active");
  const optWidth = menuOption.offsetWidth;
  const optHeight = menuOption.offsetHeight;
  menuOption.classList.remove("active");

  actionMenuBtn.addEventListener("click", (e) => {
    const actionMenuProp = actionMenu.getBoundingClientRect();
    const isOverX = actionMenuProp.left + optWidth > window.innerWidth;
    const isOverY = actionMenuProp.bottom + optHeight > window.innerHeight;

    if (isOverX) {
      menuOption.style.right = "1px";
    }
    if (isOverY) {
      menuOption.style.bottom = e.target.offsetHeight + 2 + `px`;
    }

    menuOption.classList.toggle("active");
  });
});
