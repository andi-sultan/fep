const tagContainer = document.querySelector(".tag-container");
const input = document.querySelector(".tag-container input");

let tags = [];

function createTag(label) {
  const div = document.createElement("div");
  div.setAttribute("class", "tag");
  const span = document.createElement("span");
  span.innerHTML = label;
  const closeBtn = document.createElement("i");
  closeBtn.setAttribute("class", "fas fa-times");
  closeBtn.setAttribute("data-item", label);
  closeBtn.setAttribute("title", "close");

  div.appendChild(span);
  div.appendChild(closeBtn);
  return div;
}

function reset() {
  document.querySelectorAll(".tag").forEach(function (tag) {
    tag.parentElement.removeChild(tag);
  });
}

function addTags() {
  reset();
  tags
    .slice()
    .reverse()
    .forEach(function (tag) {
      const input = createTag(tag);
      tagContainer.prepend(input);
    });
}

input.addEventListener("keyup", function (e) {
  if (e.key === "Enter") {
    tags.push(input.value);
    addTags();
    input.value = "";
  }
});

document.addEventListener("click", function (e) {
  if (e.target.tagName === "I") {
    const value = e.target.getAttribute("data-item");
    const index = tags.indexOf(value);
    tags = [...tags.slice(0, index), ...tags.slice(index + 1)];
    addTags();
  }
});
