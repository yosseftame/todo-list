var arr = [];
var count = 1;
var taskObject;
if (window.localStorage.getItem("idCount")) {
  count = parseInt(window.localStorage.getItem("idCount"));
}
//*------------------------------------------------------------
// ! make object from task and add to array
function createObject(title) {
  taskObject = {
    id: +count,
    title: title,
    completed: false,
  };
  count += 1;
  addTaskObjectToArray(taskObject);
}
function addTaskObjectToArray(taskObject) {
  arr.push(taskObject);
}
//! ----------------------------------------------------

//?------------------------------------------------
//? create div and add contnet of tasks in
function createTaskElement(taskObject) {
  let taskDiv = document.createElement("div");
  taskDiv.dataset.id = taskObject.id;
  taskDiv.dataset.title = taskObject.title;
  taskDiv.innerHTML += `
    <div class="task-inp-label">
     <input type="checkbox"  ${taskObject.completed ? "checked" : ""} /><label>${taskObject.title}</label>
    </div>
    <div><i class="fa-solid fa-trash" aria-hidden="true"></i></div>
  `;
  taskDiv.classList.add("task");
  spanVal.textContent = arr.length;
  taksContainer.appendChild(taskDiv);
}
//?---------------------------------------------------

//*------------------------------------------------------
//* handle delete
function deleteTask(id, element) {
  arr = arr.filter((e) => e.id != id);
  spanVal.textContent = `${arr.length} `;
  element.remove();
  updateLocalStorage();
}
document.body.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-trash")) {
    deleteTask(
      e.target.parentElement.parentElement.dataset.id,
      e.target.parentElement.parentElement,
    );
  }
});
//*************************************** */

//!-----------------------------
function handleAdd() {
  createObject(input.value);
  createTaskElement(taskObject);
  updateLocalStorage();
}
function clearInput() {
  input.value = "";
  input.focus();
}

//!------------------------------
function updateLocalStorage() {
  window.localStorage.setItem("taskStorage", JSON.stringify(arr));
  window.localStorage.setItem("idCount", count);
}

function loadTasksFromLocalStorage() {
  if (window.localStorage.getItem("taskStorage")) {
    arr = JSON.parse(localStorage.getItem("taskStorage"));
    spanVal.textContent = `${arr.length} `;
    for (let i = 0; i < arr.length; i++) {
      createTaskElement(arr[i]);
    }
  }
}
loadTasksFromLocalStorage();
//!------------------------------

document.body.addEventListener("click", (e) => {
  if (e.target.type == "checkbox") {
    for (const element of arr) {
      if (element.id == e.target.parentElement.parentElement.dataset.id) {
        element.completed = e.target.checked;
        updateLocalStorage();
      }
    }
  }
});
btn.onclick = function () {
  if (input.value != "") {
    handleRender();
  }
};
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value != "") {
    handleRender();
  }
});
function handleRender() {
  handleAdd();
  clearInput();
  updateLocalStorage();
  console.log(arr);
}
