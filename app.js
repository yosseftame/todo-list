let input = document.querySelector("input");
let btn = document.querySelector("button");
let container = document.querySelector(".container");
let taksContainer = document.querySelector(".tasks-container");
let p=document.querySelector("p")
let arr = [];
let count = 0;



let createObject =function createObject(id, title) {
  let taskObject = {
    id: id,
    title: title,
    completed:false,
  };
  return taskObject;
}


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




// document.body.addEventListener("click",()=>{
//   taksCompleted();
// })
// function taksCompleted(createObject) {
//   createObject.completed = "true";
//   console.log(createObject);
  
// }









function deleteTask(id, element) {
  arr = arr.filter((e) => e.id != id);
  p.textContent = `${numTotalTask()} tasks(s)`;
  element.remove();
  
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
  console.log(taskObject);
}

function clearInput() {
  input.value = "";
  input.focus();
}

let numTotalTask=function countTask() {
  return arr.length
}

btn.onclick = function () {
  if (input.value != "") {
    handleAdd();
    clearInput();
    p.textContent = `${numTotalTask()} tasks(s)`;

    
  }
};
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && input.value != "") {
    handleAdd();
    clearInput();
    p.textContent = `${numTotalTask()} tasks(s)`;
    
  }
});
// ???????????????????????????????????????????????

// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let container = document.querySelector(".container");
// let taksContainer = document.querySelector(".tasks-container");
// let p=document.querySelector("p")
// let arr = [];
// let count = 0;



// function createObject(id, title) {
//   let taskObject = {
//     id: id,
//     title: title,
//     completed:false,
//   };
//   return taskObject;
// }


// function addTaskObjectToArray(taskObject) {
//   arr.push(taskObject);
// }

// let taskDiv = function createTaskElement(taskObject) {
//   let taskDiv = document.createElement("div");
//   taskDiv.classList.add("task");
//   taksContainer.appendChild(taskDiv);
//   taskDiv.dataset.id = taskObject.id;
//   taskDiv.dataset.title = taskObject.title;

//   let taskDivInputAndLabel = document.createElement("div");
//   taskDivInputAndLabel.classList.add("task-inp-label");
//   let checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   let label = document.createElement("label");
//   label.textContent = `${taskObject.title}`;

//   taskDivInputAndLabel.appendChild(checkBox);
//   taskDivInputAndLabel.appendChild(label);
//   taskDiv.appendChild(taskDivInputAndLabel);

//   let iconDiv = document.createElement("div");
//   let icon = document.createElement("i");
//   icon.classList.add("fa-solid");
//   icon.classList.add("fa-trash");
//   iconDiv.appendChild(icon);
//   taskDiv.appendChild(iconDiv);
//   setTimeout(() => {
//     taskDiv.classList.add("show");
//   }, 10);
//   return taskDiv;
// };





// function taksCompleted(taskObject){
//  taskObject.completed="true"
// }









// function deleteTask(id, element) {
//   arr = arr.filter((e) => e.id != id);
//   p.textContent = `${numTotalTask()} tasks(s)`;
//   element.remove();
  
// }

// document.body.addEventListener("click", (e) => {
//   if (e.target.classList[0] == "fa-solid") {
//     deleteTask(
//       e.target.parentElement.parentElement.dataset.id,
//       e.target.parentElement.parentElement,
//     );
    
    
//   }
// });


// function handleAdd() {
//   let title = input.value;
//   let taskObject = createObject((count += 1), title);
//   addTaskObjectToArray(taskObject);
//   taskDiv(taskObject);
//   console.log(taskObject);
// }

// function clearInput() {
//   input.value = "";
//   input.focus();
// }

// let numTotalTask=function countTask() {
//   return arr.length
// }

// btn.onclick = function () {
//   if (input.value != "") {
//     handleAdd();
//     clearInput();
//     p.textContent = `${numTotalTask()} tasks(s)`;

    
//   }
// };
// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" && input.value != "") {
//     handleAdd();
//     clearInput();
//     p.textContent = `${numTotalTask()} tasks(s)`;
    
//   }
// });










































































//******* */
















// // create task object
// function createTaskObject(id, title) {
//   let taskObject = {
//     id: id,
//     title: title,
//     completed: false,
//   };
//   return taskObject

// }
// //
// function addTaskToArray(taskobject) {
//   arr.push(taskobject);
//   console.log(arr);

// }
// //
// function deleteTask(id) {}
// //
// function createTaskElement() {
//   let taskDiv = document.createElement("div");
//   taskDiv.classList.add("task");
//   taksContainer.appendChild(taskDiv);
//   taskDiv.dataset.id = count += 1;
//   //

//   let taskDivInputAndLabel = document.createElement("div");
//   taskDivInputAndLabel.classList.add("task-inp-label");
//   let checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   let label = document.createElement("label");
//   label.textContent = `${input.value}`;
//   taskDiv.dataset.title = label.textContent;

//   taskDivInputAndLabel.appendChild(checkBox);
//   taskDivInputAndLabel.appendChild(label);
//   taskDiv.appendChild(taskDivInputAndLabel);
//     setTimeout(() => {
//       taskDiv.classList.add("show");
//     }, 10);

//   return taskDiv;
// }
// //

// function handleAddTask() {
//    createTaskElement()
//   createTaskObject(count,input.value)

// //   createTaskElement();

// //   createTaskObject(
// //     createTaskElement().dataset.id,
// //     createTaskElement().dataset.title,
// //   );

// //   addTaskToArray(createTaskObject());
// }
// btn.addEventListener("click",(e)=>{
//     handleAddTask()
//     console.log(e);

// })


// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let container = document.querySelector(".container");
// let taksContainer = document.querySelector(".tasks-container");
// let p = document.querySelector("p");
// // let icon=document.querySelector("i")
// let arr = [];
// let count = 0;

// console.log(p);

// // // create task object
// // function createTaskObject(id, title) {
// //   let taskObject = {
// //     id: id,
// //     title: title,
// //     completed: false,
// //   };
// //   return taskObject

// // }
// // //
// // function addTaskToArray(taskobject) {
// //   arr.push(taskobject);
// //   console.log(arr);

// // }
// // //
// // function deleteTask(id) {}
// // //
// // function createTaskElement() {
// //   let taskDiv = document.createElement("div");
// //   taskDiv.classList.add("task");
// //   taksContainer.appendChild(taskDiv);
// //   taskDiv.dataset.id = count += 1;
// //   //

// //   let taskDivInputAndLabel = document.createElement("div");
// //   taskDivInputAndLabel.classList.add("task-inp-label");
// //   let checkBox = document.createElement("input");
// //   checkBox.type = "checkbox";
// //   let label = document.createElement("label");
// //   label.textContent = `${input.value}`;
// //   taskDiv.dataset.title = label.textContent;

// //   taskDivInputAndLabel.appendChild(checkBox);
// //   taskDivInputAndLabel.appendChild(label);
// //   taskDiv.appendChild(taskDivInputAndLabel);
// //     setTimeout(() => {
// //       taskDiv.classList.add("show");
// //     }, 10);

// //   return taskDiv;
// // }
// // //

// // function handleAddTask() {
// //    createTaskElement()
// //   createTaskObject(count,input.value)

// // //   createTaskElement();

// // //   createTaskObject(
// // //     createTaskElement().dataset.id,
// // //     createTaskElement().dataset.title,
// // //   );

// // //   addTaskToArray(createTaskObject());
// // }
// // btn.addEventListener("click",(e)=>{
// //     handleAddTask()
// //     console.log(e);

// // })

// function createObject(id, title) {
//   let taskObject = {
//     id: id,
//     title: title,
//   };
//   return taskObject;
// }

// function addTaskObjectToArray(taskObject) {
//   arr.push(taskObject);
// }

// let taskDiv = function createTaskElement(taskObject) {
//   let taskDiv = document.createElement("div");
//   taskDiv.classList.add("task");
//   taksContainer.appendChild(taskDiv);
//   taskDiv.dataset.id = taskObject.id;
//   taskDiv.dataset.title = taskObject.title;

//   let taskDivInputAndLabel = document.createElement("div");
//   taskDivInputAndLabel.classList.add("task-inp-label");
//   let checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   let label = document.createElement("label");
//   label.textContent = `${taskObject.title}`;

//   taskDivInputAndLabel.appendChild(checkBox);
//   taskDivInputAndLabel.appendChild(label);
//   taskDiv.appendChild(taskDivInputAndLabel);

//   let iconDiv = document.createElement("div");
//   let icon = document.createElement("i");
//   icon.classList.add("fa-solid");
//   icon.classList.add("fa-trash");
//   iconDiv.appendChild(icon);
//   taskDiv.appendChild(iconDiv);
//   setTimeout(() => {
//     taskDiv.classList.add("show");
//   }, 10);
//   return taskDiv;
// };

// function deleteTask(id, element) {
//   arr = arr.filter((e) => e.id != id);
//   element.remove();
// }

// document.body.addEventListener("click", (e) => {
//   if (e.target.classList[0] == "fa-solid") {
//     deleteTask(
//       e.target.parentElement.parentElement.dataset.id,
//       e.target.parentElement.parentElement,
//     );
//     console.log(arr);
//   }
// });

// // icon.addEventListener("click",()=>{
// //   deleteTask(icon.parentElement.dataset.id)
// // })
// function handleAdd() {
//   let title = input.value;
//   let taskObject = createObject((count += 1), title);
//   addTaskObjectToArray(taskObject);
//   taskDiv(taskObject);
//   console.log(taskObject);
// }

// function clearInput() {
//   input.value = "";
//   input.focus();
// }

// function countTask() {
//   console.log(arr.length);
// }
// btn.onclick = function () {
//   if (input.value != "") {
//     handleAdd();
//     clearInput();
//     countTask();
//   }
// };
// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" && input.value != "") {
//     handleAdd();
//     clearInput();
//     countTask();
//   }
// });

















// ***************

// test.filter((e)=>e.id!==2)

// let input = document.querySelector("input");
// let btn = document.querySelector("button");
// let container = document.querySelector(".container");
// let taksContainer = document.querySelector(".tasks-container");
// // let icon=document.querySelector("i")
// let arr = [];
// let count = 0;

// // // create task object
// // function createTaskObject(id, title) {
// //   let taskObject = {
// //     id: id,
// //     title: title,
// //     completed: false,
// //   };
// //   return taskObject

// // }
// // //
// // function addTaskToArray(taskobject) {
// //   arr.push(taskobject);
// //   console.log(arr);

// // }
// // //
// // function deleteTask(id) {}
// // //
// // function createTaskElement() {
// //   let taskDiv = document.createElement("div");
// //   taskDiv.classList.add("task");
// //   taksContainer.appendChild(taskDiv);
// //   taskDiv.dataset.id = count += 1;
// //   //

// //   let taskDivInputAndLabel = document.createElement("div");
// //   taskDivInputAndLabel.classList.add("task-inp-label");
// //   let checkBox = document.createElement("input");
// //   checkBox.type = "checkbox";
// //   let label = document.createElement("label");
// //   label.textContent = `${input.value}`;
// //   taskDiv.dataset.title = label.textContent;

// //   taskDivInputAndLabel.appendChild(checkBox);
// //   taskDivInputAndLabel.appendChild(label);
// //   taskDiv.appendChild(taskDivInputAndLabel);
// //     setTimeout(() => {
// //       taskDiv.classList.add("show");
// //     }, 10);

// //   return taskDiv;
// // }
// // //

// // function handleAddTask() {
// //    createTaskElement()
// //   createTaskObject(count,input.value)

// // //   createTaskElement();

// // //   createTaskObject(
// // //     createTaskElement().dataset.id,
// // //     createTaskElement().dataset.title,
// // //   );

// // //   addTaskToArray(createTaskObject());
// // }
// // btn.addEventListener("click",(e)=>{
// //     handleAddTask()
// //     console.log(e);

// // })

// function createObject(id, title) {
//   let taskObject = {
//     id: id,
//     title: title,
//   };
//   return taskObject;
// }

// function addTaskObjectToArray(taskObject) {
//   arr.push(taskObject);
// }

// function createTaskElement(taskObject) {
//   let taskDiv = document.createElement("div");
//   taskDiv.classList.add("task");
//   taksContainer.appendChild(taskDiv);
//   taskDiv.dataset.id = taskObject.id;
//   taskDiv.dataset.title = taskObject.title;

//   let taskDivInputAndLabel = document.createElement("div");
//   taskDivInputAndLabel.classList.add("task-inp-label");
//   let checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   let label = document.createElement("label");
//   label.textContent = `${taskObject.title}`;

//   taskDivInputAndLabel.appendChild(checkBox);
//   taskDivInputAndLabel.appendChild(label);
//   taskDiv.appendChild(taskDivInputAndLabel);

//   let iconDiv = document.createElement("div");
//   let icon = document.createElement("i");
//   icon.classList.add("fa-solid");
//   icon.classList.add("fa-trash");
//   iconDiv.appendChild(icon);
//   taskDiv.appendChild(iconDiv);
//   setTimeout(() => {
//     taskDiv.classList.add("show");
//   }, 10);
//   return taskDiv
// }

// function deleteTask(id) {
//   // test.filter((e)=>e.id!==2)
//   arr = arr.filter((e) => e.id != id);
// }
// // icon.addEventListener("click",()=>{
// //   deleteTask(icon.parentElement.dataset.id)
// // })
// function handleAdd() {
//   let title = input.value;
//   let taskObject = createObject((count += 1), title);
//   addTaskObjectToArray(taskObject);
//   createTaskElement(taskObject);
//   console.log(taskObject);
// }

// function clearInput() {
//   input.value = "";
//   input.focus();
// }

// function countTask() {
//   console.log(arr.length);
// }
// btn.onclick = function () {
//   if (input.value != "") {
//     handleAdd();
//     clearInput();
//     countTask();
//   }
// };
// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter" && input.value != "") {
//     handleAdd();
//     clearInput();
//     countTask();
//   }
// });

// // test.filter((e)=>e.id!==2)
