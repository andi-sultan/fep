const addTodo = document.querySelector("#add-todo");

addTodo.addEventListener("click", () => {
  function save() {
    const loading = document.querySelector(".column-loading");
    loading.textContent = "Saving...";
    setTimeout(() => {
      loading.textContent = "All Changes Saved";
    }, 1500);
  }

  const todoList = document.querySelector("#todos");
  const div = document.createElement("div");
  div.classList.add("todo");
  div.innerHTML = `
        <input type="checkbox" class="todo-chk">
        <input type="text" class="todo-title" value="Title">
        <button class="todo-btn todo-btn-delete delete-todo" data-id="1"><i class="fas fa-trash-alt"></i></button>
    `;
  div.querySelector(".todo-chk").addEventListener("change", (e) => {
    if (e.target.checked) {
      e.target.parentNode.classList.add("selected");
    } else {
      e.target.parentNode.classList.remove("selected");
    }
    save();
  });

  div.querySelector(".todo-title").addEventListener("input", () => {
    save();
  });

  div.querySelector(".delete-todo").addEventListener("click", (e) => {
    e.target.parentNode.remove();
    save();
  });

  todoList.appendChild(div);
});
