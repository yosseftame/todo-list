let input = document.querySelector("input");
let btn = document.querySelector("button");
let container = document.querySelector(".container");
let taksContainer = document.createElement("div");
taksContainer.classList.add("tasks-container");
let arr = [];
let count = 0;

// create task object
function createTaskObject(id,title) {
  let taskObject = {
    id: id,
    title: title,
    completed: false,
  };
  return taskObject
}
// 
function addTaskToArray(){
    arr.push(createTaskObject())
}
// 
function deleteTask(id){
  
}





//     btn.addEventListener('click',()=>{
//       let id=count+=1;
//       let title=input.value;

//       let taskObject={
//         id:id,
//         title:title,
//       }
//       console.log(taskObject);
//       console.log("hello");

//     })

// function addTaskArray(){

// }

// function addTask() {
//   let task = document.createElement("div");
//   task.classList.add("task");
//   taksContainer.appendChild(task);
//   task.dataset.id = count += 1;

//   //

//   let taskDivInputAndLabel = document.createElement("div");
//   taskDivInputAndLabel.classList.add("task-inp-label");
//   let checkBox = document.createElement("input");
//   checkBox.type = "checkbox";
//   let label = document.createElement("label");
//   label.textContent = `${input.value}`;
//   //
//   task.dataset.title = label.textContent;

//   taskDivInputAndLabel.appendChild(checkBox);
//   taskDivInputAndLabel.appendChild(label);
//   task.appendChild(taskDivInputAndLabel);
//   //***

//   let iconDiv = document.createElement("div");
//   let icon = document.createElement("i");
//   icon.classList.add("fa-solid");
//   icon.classList.add("fa-trash");
//   iconDiv.appendChild(icon);
//   task.appendChild(iconDiv);
//   //

//   container.appendChild(taksContainer);

//   task.dataset.completed = false;

//   arr.push({
//     id: task.dataset.id,
//     title: task.dataset.title,
//     completed: task.dataset.completed,
//   });
//   setTimeout(() => {
//     task.classList.add("show");
//   }, 10);
//   console.log(arr);
// }

// //* add task by click on the button
// btn.onclick = () => {
//   addTask();
//   // clear the input value after add task
//   input.value = "";
// };

// //! add task by click on Enter
// input.addEventListener("keydown", (e) => {
//   if (e.key === "Enter") {
//     addTask();
//     // clear the input value after add task
//     input.value = "";
//   }
// });
// //* remove task
// // iconDiv.addEventListener("click",()=>{
// //     add().remove()
// // })

// // ? Delete task

// // let arr=[1,2,3]
// // arr.push(4)
// // console.log(arr);
