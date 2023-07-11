const taskListContainer = document.querySelector(".taskListContainer");
const newTaskInput = document.querySelector("#newTaskInput");
const addNewTaskBtn = document.querySelector("#addNewTaskBtn");
const taskCount = document.createElement("para");
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
  console.log("Adding new task...");
  const newLine = document.createElement("br");
  const taskCheckbox = document.createElement("input");
  const newTask = document.createElement("label");
  taskCheckbox.setAttribute("type", "checkbox");
  newTask.setAttribute("for", "taskCheckbox");
  newTask.textContent = newTaskInput.value;
  taskListContainer.appendChild(newLine);
  taskListContainer.appendChild(taskCheckbox);
  taskListContainer.appendChild(newTask);
  taskList.push(newTaskInput.value);
  console.log(taskList);
  main();
}

function checkTaskCount() {
  if (taskList.length === 0) {
    taskCount.textContent = "You have no task."
    taskListContainer.appendChild(taskCount);
  } else {
    if (taskList.length === 1) {
      taskCount.textContent = `You have ${taskList.length} task.`;
    } else {
      taskCount.textContent = `You have ${taskList.length} task/s.`;
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