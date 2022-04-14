let projectIdNum = 0;
let todoId = 0;
let data_project = [];
let data_todo = [];

const modalProject = document.querySelector("#modal-project");
const modalTodo = document.querySelector("#modal-todo");
const modalDelete = document.querySelector("#modal-delete");

const addProject = document.querySelector("#add-project");
const addTodo = document.querySelector("#add-todo");

const projectId = document.querySelector("#p-id");
const projectName = document.querySelector("#p-name");
const todoTitle = document.querySelector("#t-title");
const todoDescription = document.querySelector("#t-description");
const todoDueDate = document.querySelector("#t-due-date");
const todoPriority = document.querySelector("#t-priority");

const saveProject = document.querySelector("#save-project");
const saveTodo = document.querySelector("#save-todo");

const deleteId = document.querySelector("#id-delete");
const deleteBtn = document.querySelector("#delete");

addProject.addEventListener("click", () => {
  modalProject.classList.remove("hide");
});

const renderProject = () => {
  const projectList = document.querySelector("#project-list");
  projectList.innerHTML = "";
  data_project.forEach((project) => {
    const div = document.createElement("div");
    div.innerHTML = `
      <div class="card">
        <span class="card-title">${project.name}</span>
        <button class="card-btn card-btn-edit edit-project" data-id="${project.id}"><i class="fas fa-edit"></i></button>
        <button class="card-btn card-btn-delete delete-project" data-id="${project.id}"><i class="fas fa-trash-alt"></i></button>
      </div>
    `;
    div.querySelector(".edit-project").addEventListener("click", () => {
      modalProject.classList.remove("hide");
      projectName.value = project.name;
    });
    div.querySelector(".delete-project").addEventListener("click", (e) => {
      modalDelete.classList.remove("hide");
      deleteId.value = project.id;
    });

    projectList.appendChild(div);
    console.table(data_project);
  });
};

saveProject.addEventListener("click", () => {
  let pId;
  if (projectName.value === "") {
    alert("Please enter a project name");
    projectName.focus();
    return;
  }
  if (projectId.value) {
    pId = projectId.value;
  } else {
    projectIdNum++;
    pId = projectIdNum;
  }
  const project = {
    id: pId,
    name: projectName.value,
  };
  data_project.push(project);
  modalProject.classList.add("hide");
  projectId.value = "";
  projectName.value = "";
  renderProject();
});

deleteBtn.addEventListener("click", () => {
  const id = deleteId.value;
  const project = data_project.find((project) => project.id == id);
  const index = data_project.indexOf(project);
  data_project.splice(index, 1);
  modalDelete.classList.add("hide");
  renderProject();
});
