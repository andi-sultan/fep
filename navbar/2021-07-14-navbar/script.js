const navBtn = document.querySelector("#navBtn");
const navList = document.querySelectorAll(".nav-links");
navBtn.addEventListener("click", () => {
    navList[0].classList.toggle("nav-links-show");
});
