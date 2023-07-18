 const taskListContainer = document.getElementById("taskListContainer");
const newTaskInput = document.getElementById("newTaskInput");
const addNewTaskBtn = document.getElementById("addNewTaskBtn");
const taskCount = document.createElement("para");
let taskCounter = 0;
const taskList = [];

function enableDisableButton() {
  if (newTaskInput.value != "") {
    addNewTaskBtn.removeAttribute("disabled");
  }
  else if (newTaskInput.value === "") {
    addNewTaskBtn.setAttribute("disabled", "");
  }
}

function addNewTask() {
  taskCounter++;
  console.log("Adding new task...");
  const task = document.createElement("li");
  task.textContent = newTaskInput.value;
  taskListContainer.appendChild(task);
  taskList.push(newTaskInput.value);
  addNewTaskBtn.setAttribute("disabled", "");
  newTaskInput.value = "";
  console.log(taskList);
  console.log(taskCounter);
  task.addEventListener("click", toggleChecked);
  main();
}

function toggleChecked(e) {
  e.target.classList.toggle("checked");
}

function checkTaskCount() {
  if (taskCounter === 0) {
    taskCount.textContent = "You have no task."
    taskListContainer.appendChild(taskCount);
  } else if (taskCounter === 1) {
    taskCount.textContent = `You have ${taskCounter} task.`;
  } else if (taskCounter > 1) {
    taskCount.textContent = `You have ${taskCounter} task/s.`;
  }
  
  }        

function main() {
  checkTaskCount();
  newTaskInput.addEventListener("keyup", enableDisableButton);
  addNewTaskBtn.addEventListener("click", addNewTask);
}

main();