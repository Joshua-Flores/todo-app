import "./style.sass";
import { v4 as uuidv4 } from "uuid";

const todos = [];
const categories = ["Personal", "Work"];
const priorities = ["Low", "Medium", "High"];

class Todo {
  constructor(name, id) {
    this.name = name;
    this.id = id;
    this.completed = false;
    this.category = "Personal";
    this.notes = "";
    this.priority = "";
  }
  getName() {
    return this.name;
  }
  getNotes() {
    return this.notes;
  }
}

const addTodoToList = (todo) => {
  todos.push(todo);
};

const createTodo = (todo, id) => {
  return new Todo(todo, id);
};

const resetDOM = () => {
  const dom = document.getElementById("todoList");
  dom.innerHTML = "";
};

const resetTodoForm = () => {
  document.getElementById("todoInputSimple").value = "";
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

const renderTodos = (todos) => {
  resetDOM();
  console.log(todos);
  todos.forEach((todo) => {
    renderChecklistItem(todo);
    renderDetailedForm(todo);
  });
};

const newTodoController = (todo) => {
  const newTodo = createTodo(todo, uuidv4());
  addTodoToList(newTodo);
  renderTodos(todos);
  resetTodoForm();
};

const updateCompleted = (id, value) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = value;
};

const todoUpdateController = (id, name, notes, category, priority, status) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.name = name;
  todo.notes = notes;
  todo.category = category;
  todo.priority = priority;
  todo.completed = status;
  renderTodos(todos);
};

// create the elements of the simplified checklist and append to the DOM
const renderChecklistItem = (todo) => {
  const list = document.getElementById("todoList");
  const element = document.createElement("div");
  element.classList.add("ui", "card");
  element.innerHTML = `
        <div class="content">
            <div class="description form-simple" id="form-${todo.id}">
                <div class="ui checkbox">
                    <input value="55" id=${`checkbox-${todo.id}`} type="checkbox" name=${`checkbox-${todo.id}`} ${
    todo.completed && "checked"
  }>
                    <label for=${`checkbox-${todo.id}`}>${todo.getName()}</label>
                </div>
            </div>
            <button class="ui compact icon button positive basic" id=${`more-button-${todo.id}`}><i class="ellipsis horizontal icon"></i></button>
        </div>
        `;
  list.appendChild(element);
  $(".ui.checkbox").checkbox();

  // add event listener to the checkbox
  document
    .getElementById(`checkbox-${todo.id}`)
    .addEventListener("change", (e) => {
      updateCompleted(todo.id, e.target.checked);
      console.log(todos);
    });
};

// render detailed form and enable logic
const renderDetailedForm = (todo) => {
  const moreButton = document.getElementById(`more-button-${todo.id}`);
  moreButton.addEventListener("click", (e) => {
    const todoForm = document.getElementById(`form-${todo.id}`);
    moreButton.setAttribute("style", "display:none");
    todoForm.innerHTML = `
      <form class="ui form" id="detailed-form-${todo.id}">
        <div class="field">
          <label>Task name</label>
          <input type="text" name="name" placeholder="Todo name" id="name-${
            todo.id
          }" value="${todo.getName()}">
        </div>
        <div class="field">
          <label>Notes</label>
          <textarea rows="2" name="notes-${todo.id}" id="notes-${
      todo.id
    }" value="test">${todo.getNotes()}</textarea>
        </div>
        <div class="field">
          <label>Category</label>
          <div class="ui selection dropdown" id="category-dropdown-${todo.id}">
            <div class="text"></div>
            <i class="dropdown icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Priority</label>
          <div class="ui selection dropdown" id="priority-dropdown-${todo.id}">
            <div class="text"></div>
            <i class="dropdown icon"></i>
          </div>
        </div>
        <div class="field">
          <label>Status</label>
          <div class="ui selection dropdown" id="status-dropdown-${todo.id}">
            <div class="text"></div>
            <i class="dropdown icon"></i>
          </div>
        </div>
        <div class="form-actions">
          <button class="ui button">Cancel</button>
          <button class="ui red button">Delete</button>
          <button class="ui button positive" type="submit">Update</button>
        </div>
      </form>`;

    const renderDropdownValues = (dropdownArray, selectedValue) => {
      const dropdownValues = [];
      dropdownArray.forEach((item) => {
        if (item == selectedValue) {
          dropdownValues.push({
            name: item,
            value: item,
            selected: true,
          });
        } else {
          dropdownValues.push({ name: item, value: item });
        }
      });
      return dropdownValues;
    };
    $(`#category-dropdown-${todo.id}`).dropdown({
      values: renderDropdownValues(categories, todo.category),
    });
    $(`#priority-dropdown-${todo.id}`).dropdown({
      values: renderDropdownValues(priorities, todo.priority),
    });
    $(`#status-dropdown-${todo.id}`).dropdown({
      values: [
        {
          name: "Completed",
          value: "true",
          selected: todo.completed === false ? false : true,
        },
        {
          name: "Not Completed",
          value: "false",
          selected: todo.completed === false ? true : false,
        },
      ],
    });

    //event listener for form submission
    document
      .getElementById(`detailed-form-${todo.id}`)
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById(`name-${todo.id}`).value;
        const notes = document.getElementById(`notes-${todo.id}`).value;
        const category = $(`#category-dropdown-${todo.id}`).dropdown(
          "get value"
        );
        const priority = $(`#priority-dropdown-${todo.id}`).dropdown(
          "get value"
        );
        const status =
          $(`#status-dropdown-${todo.id}`).dropdown("get value") === "true"
            ? true
            : false;
        todoUpdateController(todo.id, name, notes, category, priority, status);
      });
  });
};
