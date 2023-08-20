 const taskListContainer = document.getElementById("taskListContainer");
const newTaskInput = document.getElementById("newTaskInput");
const addNewTaskBtn = document.getElementById("addNewTaskBtn");
const taskCount = document.createElement("para");
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
  console.log("Adding new task...");
  const task = document.createElement("li");
  task.textContent = newTaskInput.value;
  taskListContainer.appendChild(task);
  taskList.push(newTaskInput.value);
  addNewTaskBtn.setAttribute("disabled", "");
  newTaskInput.value = "";
  console.log(taskList.length);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  task.addEventListener("click", toggleChecked);
  main();
}

function toggleChecked(e) {
  e.target.classList.toggle("checked");
}

function displayTaskCount() {
  if (taskList.length === 0) {
    taskCount.textContent = "You have no task."
  } 
  else if (taskList.length === 1) {
    taskCount.textContent = `You have ${JSON.parse(localStorage.getItem("tasks")).length} task.`
  } 
  else if (taskList.length > 1) {
    taskCount.textContent = `You have ${JSON.parse(localStorage.getItem("tasks")).length} tasks.`
  }
}

function displayTaskList() {
  taskListContainer.appendChild(taskCount);
  if (localStorage.length === 1) {
    if (taskList.length === 0) {
      for (let i = 0; i < JSON.parse(localStorage.getItem("tasks")).length; i++) {
        taskList.push(JSON.parse(localStorage.getItem("tasks"))[i]);
        const task = document.createElement("li");
        task.textContent = JSON.parse(localStorage.getItem("tasks"))[i];
        taskListContainer.appendChild(task);
      }
      console.log(taskList);
    }
  }
}        

function main() {
  displayTaskCount();
  newTaskInput.addEventListener("keyup", enableDisableButton);
  addNewTaskBtn.addEventListener("click", addNewTask);
}

window.onload = displayTaskList();
main();