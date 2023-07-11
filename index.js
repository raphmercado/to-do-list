const taskList = document.querySelector(".taskList");
const newTaskInput = document.querySelector("#newTaskInput");
const addNewTaskBtn = document.querySelector("#addNewTaskBtn");
const para = document.createElement("para");
const toDoList = [];

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
  taskList.appendChild(newLine);
  taskList.appendChild(taskCheckbox);
  taskList.appendChild(newTask);
  toDoList.push(newTaskInput.value);
  console.log(toDoList);
  main();
}

function checkTaskList() {
  if (taskList.childNodes.length === 0) {
    para.textContent = "You have no task."
    taskList.appendChild(para);
  } else {
    para.textContent = `You have task/s.`;
  }
}

function main() {
  checkTaskList();
  newTaskInput.addEventListener("click", removeDefaultValue);
  newTaskInput.addEventListener("keyup", enableButton);
  newTaskInput.addEventListener("focusout", returnDefaultValue);
  addNewTaskBtn.addEventListener("click", addNewTask);
}

main();