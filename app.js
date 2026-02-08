let input = document.querySelector("input");
let btn = document.querySelector("button");
let container = document.querySelector(".container");
let taksContainer = document.querySelector(".tasks-container");
let p = document.querySelector("p");
let arr = [];
let count = 0;
localStorage.clear()

let createObject = function createObject(id, title) {
  let taskObject = {
    id: Number(id),
    title: title,
    completed: false,
  };
  return taskObject;
};

function addTaskObjectToArray(taskObject) {
  arr.push(taskObject);
}

let taskDiv = function createTaskElement(taskObject) {
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
  return taskDiv;
};

function deleteTask(id, element) {
  arr = arr.filter((e) => e.id != id);
  p.textContent = `${numTotalTask()} tasks(s)`;
  element.remove();
  // ?window.localStorage.setItem("taskStorage", JSON.stringify(arr));
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
  let taskObject = createObject((count += 1), title);
  addTaskObjectToArray(taskObject);
  taskDiv(taskObject);
}

function clearInput() {
  input.value = "";
  input.focus();
}

let numTotalTask = function countTask() {
  return arr.length;
};

function loadTasksFromLocalStorage() {
  if (window.localStorage.getItem("taskStorage")) {
    arr = JSON.parse(localStorage.getItem("taskStorage"));
    p.textContent = `${numTotalTask()} tasks(s)`;
    for (let i = 0; i < arr.length; i++) {
      taskDiv(arr[i]);
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
    p.textContent = `${numTotalTask()} tasks(s)`;
    updateLocalStorage();
  }
};
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value != "") {
    handleAdd();
    clearInput();
    p.textContent = `${numTotalTask()} tasks(s)`;
    updateLocalStorage();
  }
});
