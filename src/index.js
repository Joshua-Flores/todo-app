import "./style.sass";
import { v4 as uuidv4 } from "uuid";
import {
  todoFormDetailedTemplate,
  renderChecklistItem,
  renderDropdownValues,
  resetDOM,
  updateLocalStorageTodos,
  updateLocalStorageCategories,
} from "./modules/functions";

const todos = [];
const categories = ["Personal", "Work"];
const priorities = ["Low", "Medium", "High"];

class Todo {
  constructor(name, id, category, completed, notes, priority, dueDate) {
    this.name = name;
    this.id = id;
    this.category = category;
    this.completed = completed ? true : false;
    this.notes = notes ? notes : "";
    this.priority = priority ? priority : "";
    this.dueDate = dueDate ? dueDate : "";
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

const createTodo = (todo, id, category) => {
  return new Todo(todo, id, category);
};

const resetTodoForm = () => {
  document.getElementById("todoInputSimple").value = "";
};

const addCategory = (category) => {
  categories.push(category);
  updateLocalStorageCategories(categories);
};

const categoryFormListener = (() => {
  const categoryForm = document.getElementById("add-category");
  categoryForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const category = document.getElementById("add-category-input").value.trim();
    if (category.length > 0) {
      addCategory(category);
      renderCategories();
      document.getElementById("add-category-input").value = "";
    }
  });
})();

const renderCategories = () => {
  const categoryList = document.getElementById("categories-list");
  categoryList.innerHTML = "";
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
      deleteCategory(category);
    };
    element.appendChild(span);
    element.appendChild(button);
    categoryList.appendChild(element);
  });
};
renderCategories();

const deleteCategory = (category) => {
  const index = categories.findIndex((x) => x === category);
  categories.splice(index, 1);
  renderCategories();
  updateLocalStorageCategories(categories);
};

window.addEventListener("hashchange", () => {
  if (window.location.hash) {
    const hash = window.location.hash.substring(1); //Puts hash in variable, and removes the # character
    document.getElementById("page-title").innerText = hash;
    renderTodos(todos);
  }
});

const simpleFormListener = (() => {
  const todoFormSimple = document.getElementById("todoFormSimple");
  todoFormSimple.addEventListener("submit", (e) => {
    e.preventDefault();
    const todo = document.getElementById("todoInputSimple").value.trim();
    if (todo.length > 0) {
      newTodoController(todo);
    }
  });
})();

const renderTodos = (todos) => {
  resetDOM();
  // check which category is currently selected and filter
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    const filteredTodos = todos.filter((todo) => todo.category === hash);
    if (filteredTodos.length < 1) {
      const element = document.createElement("p");
      element.innerText = "So much empty! Add a new task below.";
      document.getElementById("todoList").appendChild(element);
    }
    filteredTodos.forEach((todo) => {
      renderChecklistItem(todos, todo);
      renderDetailedForm(todo);
    });
  } else {
    const defaultTodos = todos.filter((todo) => todo.category === "Personal");
    if (defaultTodos.length < 1) {
      const element = document.createElement("p");
      element.innerText = "So much empty! Add a new task below.";
      document.getElementById("todoList").appendChild(element);
    }
    defaultTodos.forEach((todo) => {
      renderChecklistItem(todos, todo);
      renderDetailedForm(todo);
    });
  }
};
renderTodos(todos);

const newTodoController = (todo) => {
  let category = "Personal";
  if (window.location.hash) {
    const hash = window.location.hash.substring(1);
    category = hash;
  }
  const newTodo = createTodo(todo, uuidv4(), category);
  addTodoToList(newTodo);
  renderTodos(todos);
  resetTodoForm();
  console.log(newTodo);
  updateLocalStorageTodos(todos);
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
  updateLocalStorageTodos(todos);
};

// render category form

// render detailed form and enable logic
const renderDetailedForm = (todo) => {
  const moreButton = document.getElementById(`more-button-${todo.id}`);
  moreButton.addEventListener("click", (e) => {
    const todoForm = document.getElementById(`form-${todo.id}`);
    moreButton.setAttribute("style", "display:none");
    todoForm.innerHTML = todoFormDetailedTemplate(todo);

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
        updateLocalStorageTodos(todos);
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

//open menu
document
  .getElementById("sidebar-menu-button")
  .addEventListener("click", (e) => {
    $(".ui.sidebar").sidebar("toggle");
  });

// media query for fixed menu on desktop
const renderDesktopView = () => {
  document.querySelector(".sidebar").classList.add("visible");
  $(".nav").parent().css("display", "none");
};

const mediaQuery = window.matchMedia("(min-width: 992px)");
if (mediaQuery.matches) {
  renderDesktopView();
}

mediaQuery.addEventListener("change", (e) => {
  if (e.matches) {
    renderDesktopView();
  } else {
    $(".sidebar").removeClass("visible");
    $(".nav").parent().css("display", "block");
  }
});

//if a library exists in local storage, add it
if (window.localStorage.getItem("todos")) {
  const localStorageTodos = JSON.parse(window.localStorage.getItem("todos"));
  todos.length = 0;
  localStorageTodos.forEach((todo) => {
    todos.push(
      new Todo(
        todo.name,
        todo.id,
        todo.category,
        todo.completed,
        todo.notes,
        todo.priority,
        todo.dueDate
      )
    );
  });
  console.log(todos);
  renderTodos(todos);
}

if (window.localStorage.getItem("categories")) {
  const localStorageCategories = JSON.parse(
    window.localStorage.getItem("categories")
  );
  categories.length = 0;
  localStorageCategories.forEach((category) => {
    categories.push(category);
  });
  renderCategories();
}
