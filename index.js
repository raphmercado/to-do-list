const taskListContainer = document.querySelector(".taskListContainer");
const newTaskInput = document.querySelector("#newTaskInput");
const addNewTaskBtn = document.querySelector("#addNewTaskBtn");
const taskCount = document.createElement("para");
let taskCounter = 0;
const taskList = [];

function removeDefaultValue(e) {
  console.log("Removing default value...");
  newTaskInput.setAttribute("value", "");
}

function returnDefaultValue(e) {
  console.log("Returning default value...");
  newTaskInput.setAttribute("value", "Add a new task");

}

function enableButton(e) {
  addNewTaskBtn.removeAttribute("disabled");
}

function disableButton() {
  addNewTaskBtn.setAttribute("disabled", "");
}

function addNewTask(e) {
  taskCounter++;
  console.log("Adding new task...");
  const newLine = document.createElement("br");
  const taskCheckbox = document.createElement("input");
  const newTask = document.createElement("para");
  const deleteTaskButton = document.createElement("button");
  const taskContainer = document.createElement("div");
  deleteTaskButton.className = "deleteTaskButton";
  taskContainer.className = "taskContainer";
  taskContainer.setAttribute("id", `task${taskCounter}`);
  taskCheckbox.setAttribute("type", "checkbox");
  newTask.setAttribute("for", "taskCheckbox");
  newTask.textContent = newTaskInput.value;
  deleteTaskButton.textContent = "Delete";
  taskContainer.appendChild(taskCheckbox);
  taskContainer.appendChild(newTask);
  taskContainer.appendChild(deleteTaskButton);
  taskListContainer.appendChild(taskContainer);
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
  newTaskInput.addEventListener("click", removeDefaultValue);
  newTaskInput.addEventListener("keyup", enableButton);
  newTaskInput.addEventListener("focusout", returnDefaultValue);
  addNewTaskBtn.addEventListener("click", addNewTask);
}

main();