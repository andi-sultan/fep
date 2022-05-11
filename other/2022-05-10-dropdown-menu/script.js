document.querySelectorAll(".trigger").forEach(function (trigger) {
  trigger.addEventListener("click", function (e) {
    e.target.classList.toggle("active");
  });
});
