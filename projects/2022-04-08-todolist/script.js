class todolist {
  constructor() {
    this.todos = [];
    this.todoList = document.querySelector('.todo-list');
    this.todoInput = document.querySelector('.todo-input');
    this.todoButton = document.querySelector('.todo-button');
    this.todoButton.addEventListener('click', this.addTodo.bind(this));
    this.todoList.addEventListener('click', this.deleteTodo.bind(this));
  }

  addTodo(event) {
    event.preventDefault();
    if (this.todoInput.value !== '') {
      this.todos.push(this.todoInput.value);
      this.todoInput.value = '';
      this.render();
    }
  }

  deleteTodo(event) {
    const element = event.target;
    if (element.classList.contains('delete-button')) {
      const todoIndex = element.parentNode.getAttribute('data-index');
      this.todos.splice(todoIndex, 1);
      this.render();
    }
  }

  render() {
    this.todoList.innerHTML = '';
    this.todos.forEach((todo, index) => {
      const todoElement = document.createElement('li');
      todoElement.classList.add('todo');
      todoElement.setAttribute('data-index', index);
      todoElement.innerHTML = `
        <span>${todo}</span>
        <button class="delete-button">Delete</button>
      `;
      this.todoList.appendChild(todoElement);
    });
  }
}