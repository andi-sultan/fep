const tagComponents = document.querySelectorAll(".tag");

tagComponents.forEach((tag) => {
  const tagContainer = tag.querySelector(".tag-inner");
  const input = tag.querySelector(".tag-input");

  let tagsData = [];

  function createTag(label) {
    const tagItem = document.createElement("div");
    tagItem.setAttribute("class", "tag-item");
    const span = document.createElement("span");
    span.innerHTML = label;
    const closeBtn = document.createElement("i");
    closeBtn.setAttribute("class", "fas fa-times tag-item-close");
    closeBtn.setAttribute("data-item", label);
    closeBtn.setAttribute("title", "close");

    tagItem.appendChild(span);
    tagItem.appendChild(closeBtn);
    return tagItem;
  }

  function reset() {
    tag.querySelectorAll(".tag-item").forEach(function (tag) {
      tag.parentElement.removeChild(tag);
    });
  }

  function addTags() {
    reset();
    tagsData
      .slice()
      .reverse()
      .forEach((tagData) => {
        const input = createTag(tagData);
        tagContainer.prepend(input);
      });
  }

  input.addEventListener("keyup", (e) => {
    const duplicateFound = tagsData.filter((tagData) => {
      return tagData == input.value;
    }).length;
    if (e.key === "Enter" && input.value && duplicateFound === 0) {
      tagsData.push(input.value);
      addTags();
      input.value = "";
    }
  });

  tag.addEventListener("click", (e) => {
    if (e.target.tagName === "I") {
      const value = e.target.getAttribute("data-item");
      const index = tagsData.indexOf(value);
      tagsData = [...tagsData.slice(0, index), ...tagsData.slice(index + 1)];
      addTags();
    }
  });
});
