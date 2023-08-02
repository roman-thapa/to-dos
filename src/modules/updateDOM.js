import entryForm from "./entryForm";
import updateFormData from "./updateEntry";


const mainContainer = document.querySelector('#app');
const title = document.createElement("h1");
title.innerText = "To do";

const enteredForm = {};

const newEntryButton = document.createElement('button');
newEntryButton.innerText = "+";
newEntryButton.className = "newEntryButton";

const entryToDoForm = document.createElement('div');
newEntryButton.addEventListener('click', () => showEntryBox())

const toDoList = document.createElement('div');

const showEntryBox = function() {
    entryToDoForm.appendChild(entryForm())
  mainContainer.appendChild(entryToDoForm)
  const submitForm = document.querySelector('.addTask');
  submitForm.addEventListener('click', submit);
}

const submit = function(event) {
  event.preventDefault();
  updateFormData(enteredForm);
  entryToDoForm.removeChild(entryToDoForm.firstChild);
  toDoList.appendChild(appendLastTaskToDiv(enteredForm));
} 

function appendLastTaskToDiv(tasksData) {
  const lastTaskIndex = Object.keys(tasksData).length - 1;
  const lastTaskData = tasksData[lastTaskIndex];

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('task');

  const titleElement = document.createElement('h2');
  titleElement.textContent = lastTaskData.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = lastTaskData.description;

  const dueDateElement = document.createElement('p');
  dueDateElement.textContent = 'Due Date: ' + lastTaskData.dueDate;

  const taskPriorityElement = document.createElement('p');
  taskPriorityElement.textContent = 'Priority: ' + lastTaskData.taskPriority;

  taskDiv.appendChild(titleElement);
  taskDiv.appendChild(descriptionElement);
  taskDiv.appendChild(dueDateElement);
  taskDiv.appendChild(taskPriorityElement);

  return taskDiv;
}


mainContainer.appendChild(title);
mainContainer.appendChild(newEntryButton);
mainContainer.appendChild(toDoList);