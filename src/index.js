import "./style.sass";
import { v4 as uuidv4 } from "uuid";

const todos = [];

class Todo {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.done = false;
  }
  getName() {
    return this.name;
  }
}

const addTodo = (todo) => {
  todos.push(todo);
};

const createTodo = (todo, id) => {
  return new Todo(todo, id);
};

const renderTodos = (todos) => {
  const listParent = document.getElementById("todoList");
  listParent.innerHTML = "";
  todos.forEach((todo) => {
    const listItem = document.createElement("li");
    const element = document.createElement("div");
    element.classList.add("ui", "card");
    element.innerHTML = `
    <div class="content">
        <div class="description">
            <div class="ui checkbox">
                <input id=${`checkbox-${todo.id}`} type="checkbox">
                <label for=${`checkbox-${todo.id}`}>${todo.getName()}</label>
            </div>
        </div>
    </div>
    `;
    listItem.appendChild(element);
    listParent.appendChild(listItem);
  });
};

const resetTodoForm = () => {
  document.getElementById("todoInputSimple").value = "";
};

const newTodoController = (todo) => {
  const newTodo = createTodo(todo, uuidv4());
  addTodo(newTodo);
  renderTodos(todos);
  resetTodoForm();
};

const simpleFormListener = (() => {
  const todoFormSimple = document.getElementById("todoFormSimple");
  todoFormSimple.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = document.getElementById("todoInputSimple").value;
    if (todo.length > 0) {
      newTodoController(todo);
    }
  });
})();
