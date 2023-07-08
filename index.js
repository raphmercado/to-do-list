const inputNewTask = document.querySelector("#inputNewTask");
const addNewTask = document.querySelector("#addNewTask");

inputNewTask.addEventListener("click", removeDefaultValue);
inputNewTask.addEventListener("focusout", returnDefaultValue);
addNewTask.addEventListener("click", getNewTask);

function removeDefaultValue(e) {
  console.log("Removing default value...");
  inputNewTask.setAttribute("value", "");
}

function returnDefaultValue(e) {
  console.log("Returning default value...");
  inputNewTask.setAttribute("value", "Add a new task");

}

function getNewTask(e) {
  console.log("Adding new task...");
}
