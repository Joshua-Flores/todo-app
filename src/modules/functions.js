// update the completed value
const updateCompleted = (todos, id, value) => {
  const todo = todos.find((todo) => todo.id === id);
  todo.completed = value;
  updateLocalStorageTodos(todos);
};

// create the elements of the simplified checklist and append to the DOM
const renderChecklistItem = (todos, todo) => {
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
      updateCompleted(todos, todo.id, e.target.checked);
    });
};

const todoFormDetailedTemplate = (todo) => `
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
    <label>Due Date</label>
    <input type="date" name="date" id="dueDate-${
      todo.id
    }" value="${todo.getDueDate()}">
  </div>
  <div class="field">
    <label>Status</label>
    <div class="ui selection dropdown" id="status-dropdown-${todo.id}">
      <div class="text"></div>
      <i class="dropdown icon"></i>
    </div>
  </div>
  <div class="form-actions">
    <button class="ui red button" id="delete-button-${todo.id}">Delete</button>
    <button class="ui button positive" type="submit">Update</button>
  </div>
</form>`;

const renderDropdownValues = (dropdownArray, selectedValue) => {
  const dropdownValues = [];
  dropdownArray.forEach((item) => {
    if (item === selectedValue) {
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

const resetDOM = () => {
  const dom = document.getElementById("todoList");
  dom.innerHTML = "";
};

const updateLocalStorageTodos = (todos) => {
  console.log(todos);
  window.localStorage.setItem("todos", JSON.stringify(todos));
};

const updateLocalStorageCategories = (categories) => {
  window.localStorage.setItem("categories", JSON.stringify(categories));
};

export {
  renderChecklistItem,
  todoFormDetailedTemplate,
  renderDropdownValues,
  resetDOM,
  updateLocalStorageTodos,
  updateLocalStorageCategories,
};
