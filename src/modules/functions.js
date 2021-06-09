// update the completed value
const updateCompleted = (todos, id, value) => {
  const todo = todos.find((todo) => (todo.id = id));
  todo.completed = value;
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

export { renderChecklistItem };
