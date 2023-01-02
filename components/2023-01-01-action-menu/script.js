document.querySelectorAll(".action-menu").forEach((actionMenu) => {
  const actionMenuBtn = actionMenu.querySelector(".action-menu__btn");

  actionMenuBtn.addEventListener("click", (e) => {
    const optWidth = 200;
    const optHeight = 96;
    const menuOption = actionMenu.querySelector(".action-menu__option");

    const isOverX =
      actionMenu.getBoundingClientRect().left + optWidth > window.innerWidth;
    const isOverY =
      actionMenu.getBoundingClientRect().bottom + optHeight >
      window.innerHeight;

    if (isOverX) {
      menuOption.style.right = 0;
    }
    if (isOverY) {
      menuOption.style.bottom =
        actionMenuBtn.getBoundingClientRect().height + `px`;
    }

    menuOption.classList.toggle("active");
  });
});
