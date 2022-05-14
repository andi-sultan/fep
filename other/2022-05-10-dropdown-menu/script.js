document.querySelectorAll(".d-btn").forEach(function (d) {
  d.addEventListener("click", function (e) {
    e.target.classList.toggle("active");
  });
});
