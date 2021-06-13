import "./style.sass";
import { v4 as uuidv4 } from "uuid";
import {
  checklistItemTemplate,
  todoFormDetailedTemplate,
} from "./modules/functions";

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
    this.dueDate = "";
  }
  getName() {
    return this.name;
  }
  getNotes() {
    return this.notes;
  }
  getDueDate() {
    return this.dueDate;
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

const addCategory = (category) => {
  categories.push(category);
};

const renderCategories = (() => {
  console.log(categories);
  const categoryList = document.getElementById("categories-list");

  categories.forEach((category) => {
    const element = document.createElement("a");
    const span = document.createElement("span");
    const button = document.createElement("button");
    element.setAttribute("href", `#${category}`);
    element.classList.add("item");
    span.innerText = category;
    button.classList.add("ui", "icon", "grey", "button");
    button.setAttribute("id", `delete-category-button-${category}`);
    button.innerHTML = `<i class="delete icon"></i>`;
    button.onclick = function () {
      console.log(category);
    };
    element.appendChild(span);
    element.appendChild(button);
    categoryList.appendChild(element);
    console.log(element);
  });
})();

const categoryFormListener = (() => {
  const categoryForm = document.getElementById("add-category");
  categoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const category = document.getElementById("add-category-input").value;
    addCategory(category);
    renderCategories();
    document.getElementById("add-category-input").value = "";
  });
})();

window.addEventListener("hashchange", () => {
  if (window.location.hash) {
    const hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    document.getElementById("page-title").innerText = hash;
    // hash found
  } else {
    // No hash found
  }
});

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

const todoUpdateController = (
  id,
  name,
  notes,
  category,
  priority,
  dueDate,
  status
) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.name = name;
  todo.notes = notes;
  todo.category = category;
  todo.priority = priority;
  todo.completed = status;
  todo.dueDate = dueDate;
  renderTodos(todos);
};

// render category form

// create the elements of the simplified checklist and append to the DOM
const renderChecklistItem = (todo) => {
  const list = document.getElementById("todoList");
  const element = document.createElement("div");
  element.classList.add("ui", "card");
  element.innerHTML = checklistItemTemplate(todo);
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
    todoForm.innerHTML = todoFormDetailedTemplate(todo);

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

    document
      .getElementById(`delete-button-${todo.id}`)
      .addEventListener("click", (e) => {
        e.preventDefault();
        const index = todos.findIndex((x) => x.id === todo.id);
        todos.splice(index, 1);
        renderTodos(todos);
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
        const dueDate = document.getElementById(`dueDate-${todo.id}`).value;
        todoUpdateController(
          todo.id,
          name,
          notes,
          category,
          priority,
          dueDate,
          status
        );
      });
  });
};
