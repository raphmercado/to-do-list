const inputNewTask = document.querySelector("#inputNewTask");
const addNewTask = document.querySelector("#addNewTask");

inputNewTask.addEventListener("click", removeDefaultValue);
addNewTask.addEventListener("click", getNewTask);

function removeDefaultValue(e) {
  console.log("Removing default value...");
  inputNewTask.setAttribute("value", "");
}

function getNewTask(e) {
  console.log("Adding new task...");
}
