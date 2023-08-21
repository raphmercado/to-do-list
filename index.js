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
  taskList.push(newTaskInput.value);
  const task = document.createElement("li");
  const span = document.createElement("span");
  const edit = document.createElement("a");
  const del = document.createElement("a");
  span.setAttribute("id", "checkbox");
  edit.className = "edit";
  del.className = "delete";
  span.textContent = newTaskInput.value;
  edit.textContent = "Edit";
  del.textContent = "Delete";
  task.appendChild(span);
  task.appendChild(edit);
  task.appendChild(del);
  taskListContainer.appendChild(task);
  addNewTaskBtn.setAttribute("disabled", "");
  newTaskInput.value = "";
  console.log(taskList.length);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  task.addEventListener("click", toggleChecked);
  edit.addEventListener("click", editTask);
  del.addEventListener("click", deleteTask);
  main();
}

function editTask(e) {
  console.log("Editing task...");
  console.log(e.target.parentElement.firstChild.textContent);
  const editedTask = prompt("Edit task");
  const oldTask = taskList.indexOf(e.target.parentElement.firstChild.textContent);
  taskList.splice(oldTask, 1, editedTask);
  localStorage.setItem("tasks", JSON.stringify(taskList));
  console.log(taskList);
  location.reload();
}

function deleteTask(e) {
  const response = confirm("Are you sure you want to delete this task?");
  if (response === true) {
    console.log("Deleting task...");
    console.log(e.target.parentElement.firstChild.textContent);
    for (let i = 0; i < JSON.parse(localStorage.getItem("tasks")).length; i++) {
      if (e.target.parentElement.firstChild.textContent === JSON.parse(localStorage.getItem("tasks"))[i]) {
        taskList.splice(i, 1);
        console.log("Task Deleted.");
      }
    }
    localStorage.setItem("tasks", JSON.stringify(taskList))
    console.log(taskList);
    location.reload();
  }
  else {
    return;
  }
  
}

function toggleChecked(e) {
  if (e.target.id !== "checkbox") {
    return;
  } 
  else {
    e.target.classList.toggle("checked");
  }
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
        const span = document.createElement("span");
        const edit = document.createElement("a");
        const del = document.createElement("a");
        span.setAttribute("id", "checkbox");
        edit.className = "edit";
        del.className = "delete";
        span.textContent = JSON.parse(localStorage.getItem("tasks"))[i];
        edit.textContent = "Edit";
        del.textContent = "Delete";
        task.appendChild(span);
        task.appendChild(edit);
        task.appendChild(del);
        taskListContainer.appendChild(task);
        task.addEventListener("click", toggleChecked);
        edit.addEventListener("click", editTask);
        del.addEventListener("click", deleteTask);
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