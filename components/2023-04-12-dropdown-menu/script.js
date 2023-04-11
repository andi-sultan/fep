const drop = document.querySelector(".menu-btn-drop");
drop.addEventListener("click", () => {
  const submenu = drop.nextElementSibling;
  submenu.classList.toggle("show");
});
// todo: make it reusable
