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
toDoList.className = "todo--list"

const showEntryBox = function() {
  newEntryButton.disabled = true;
  entryToDoForm.appendChild(entryForm())
  newEntryButton.insertAdjacentElement("afterend", entryToDoForm)
  const submitForm = document.querySelector('.addTask');
  submitForm.addEventListener('click', submit);
  
}

const submit = function(event) {
  event.preventDefault();
  const gotToDos = updateFormData(enteredForm);
  if (gotToDos) {
    entryToDoForm.removeChild(entryToDoForm.firstChild); 
    toDoList.appendChild(appendLastTaskToDiv(enteredForm));
    newEntryButton.disabled = false;
  } else {
    alert("Fill Every Field ")
  }
} 

const appendLastTaskToDiv = (tasksData) => {
  const lastTaskIndex = Object.keys(tasksData).length - 1;
  const lastTaskData = tasksData[lastTaskIndex];

  const taskDiv = document.createElement('div');
  taskDiv.classList.add('box');
  taskDiv.id = lastTaskIndex;

  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.classList.add('close-btn');

  const titleElement = document.createElement('h2');
  titleElement.textContent = 'Title: ' + lastTaskData.title;

  const descriptionElement = document.createElement('p');
  descriptionElement.textContent = 'Description: ' + lastTaskData.description;

  const dueDateElement = document.createElement('p');
  dueDateElement.textContent = 'Due Date: ' + lastTaskData.dueDate;

  const taskPriorityElement = document.createElement('p');
  taskPriorityElement.textContent = 'Priority: ' + lastTaskData.taskPriority;

  taskDiv.appendChild(closeButton); 
  taskDiv.appendChild(titleElement);
  taskDiv.appendChild(descriptionElement);
  taskDiv.appendChild(dueDateElement);
  taskDiv.appendChild(taskPriorityElement);

  closeButton.addEventListener("click", function () {
    const taskId = closeButton.closest(".box").id;
    const taskDiv = document.getElementById(taskId);
    if (taskDiv) {
      taskDiv.remove();
    }
  });


  return taskDiv;
}


mainContainer.appendChild(title);
mainContainer.appendChild(newEntryButton);
mainContainer.appendChild(toDoList);