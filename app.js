var input = document.querySelector("input");
var btn = document.querySelector("button");
var container = document.querySelector(".container");
var taksContainer = document.querySelector(".tasks-container");
var p = document.querySelector("p");
var arr = [];
var count = 0;
var taskObject;

function createObject(id, title) {
  taskObject = {
    id: Number(id),
    title: title,
    completed: false,
  };
  return taskObject;
}

function addTaskObjectToArray(taskObject) {
  arr.push(taskObject);
}
function createTaskElement(taskObject) {
  let taskDiv = document.createElement("div");
  taskDiv.classList.add("task");
  taksContainer.appendChild(taskDiv);
  taskDiv.dataset.id = taskObject.id;
  taskDiv.dataset.title = taskObject.title;

  let taskDivInputAndLabel = document.createElement("div");
  taskDivInputAndLabel.classList.add("task-inp-label");
  let checkBox = document.createElement("input");
  checkBox.type = "checkbox";

  if (taskObject.completed) {
    checkBox.checked = true;
  }

  let label = document.createElement("label");
  label.textContent = `${taskObject.title}`;

  taskDivInputAndLabel.appendChild(checkBox);
  taskDivInputAndLabel.appendChild(label);
  taskDiv.appendChild(taskDivInputAndLabel);

  let iconDiv = document.createElement("div");
  let icon = document.createElement("i");
  icon.classList.add("fa-solid");
  icon.classList.add("fa-trash");
  iconDiv.appendChild(icon);
  taskDiv.appendChild(iconDiv);
  setTimeout(() => {
    taskDiv.classList.add("show");
  }, 10);
}

function deleteTask(id, element) {
  arr = arr.filter((e) => e.id != id);
  p.textContent = `${arr.length} tasks(s)`;
  element.remove();
  updateLocalStorage();
}

document.body.addEventListener("click", (e) => {
  if (e.target.classList[0] == "fa-solid") {
    deleteTask(
      e.target.parentElement.parentElement.dataset.id,
      e.target.parentElement.parentElement,
    );
  }
});

function handleAdd() {
  let title = input.value;
  createObject((count += 1), title);
  addTaskObjectToArray(taskObject);
  createTaskElement(taskObject);
}
function clearInput() {
  input.value = "";
  input.focus();
}

function loadTasksFromLocalStorage() {
  if (window.localStorage.getItem("taskStorage")) {
    arr = JSON.parse(localStorage.getItem("taskStorage"));
    p.textContent = `${arr.length} tasks(s)`;
    for (let i = 0; i < arr.length; i++) {
      createTaskElement(arr[i]);
    }
  }
  count = arr.length;
}
loadTasksFromLocalStorage();

function updateLocalStorage() {
  window.localStorage.setItem("taskStorage", JSON.stringify(arr));
}

function taksCompleted(id) {
  let indexOfElementId = arr.findIndex((e) => e.id == id);
  if (arr[indexOfElementId].completed == false) {
    arr[indexOfElementId].completed = true;
    updateLocalStorage();
  } else {
    arr[indexOfElementId].completed = false;
    updateLocalStorage();
  }
}
document.body.addEventListener("click", (e) => {
  if (e.target.value == "on")
    taksCompleted(e.target.parentElement.parentElement.dataset.id);
});

btn.onclick = function () {
  if (input.value != "") {
    handleAdd();
    clearInput();
    p.textContent = `${arr.length} tasks(s)`;
    updateLocalStorage();
  }
};
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value != "") {
    handleAdd();
    clearInput();
    p.textContent = `${arr.length} tasks(s)`;
    updateLocalStorage();
  }
});
