const panels = document.querySelectorAll(".expc-panel");
panels.forEach((panel) => {
  panel.addEventListener("click", (e) => {
    panels.forEach((panel) => {
      panel.classList.remove("active");
    });
    e.target.classList.add("active");
  });
});
