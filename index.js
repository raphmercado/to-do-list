const taskListContainer = document.getElementById("taskListContainer");
const newTaskInput = document.getElementById("newTaskInput");
const addNewTaskBtn = document.getElementById("addNewTaskBtn");
const taskCount = document.createElement("para");
let taskCounter = 0;
const taskList = [];

function enableButton(e) {
  addNewTaskBtn.removeAttribute("disabled");
}

function disableButton() {
  addNewTaskBtn.setAttribute("disabled", "");
}

function addNewTask(e) {
  taskCounter++;
  console.log("Adding new task...");
  taskList.push(newTaskInput.value);
  console.log(taskList);
  console.log(taskCounter);
  main();
}

function checkTaskCount() {
  if (taskCounter === 0) {
    taskCount.textContent = "You have no task."
    taskListContainer.appendChild(taskCount);
  } else {
    if (taskCounter === 1) {
      taskCount.textContent = `You have ${taskCounter} task.`;
    } else {
      taskCount.textContent = `You have ${taskCounter} task/s.`;
    }
  }
}

function main() {
  checkTaskCount();
  newTaskInput.addEventListener("keyup", enableButton);
  addNewTaskBtn.addEventListener("click", addNewTask);
}

main();