import entryForm from "./entryForm";
import updateFormData from "./updateEntry";
import appendLastTaskToDiv from "./showToDo";
import filterTodo from "./filterToDos";

const mainContainer = document.querySelector('#app');
const title = document.createElement("h1");
title.innerText = "To do";

let enteredForm = {};

document.addEventListener('DOMContentLoaded', () => {
  const storedData = localStorage.getItem('formData');
  if (storedData) {
    enteredForm = JSON.parse(storedData);
    for (const key in enteredForm) {
      toDoList.appendChild(appendLastTaskToDiv(enteredForm, key, true));
    }
  }
});

const newEntryButton = document.createElement('button');
newEntryButton.innerText = "+";
newEntryButton.className = "newEntryButton";

const filterToDosDiv = document.createElement('div');
filterToDosDiv.classList.add('filterToDos');

const todayButton = document.createElement('button');
todayButton.innerText = 'Today';
todayButton.addEventListener('click', () => filterTodo("today", enteredForm));

const tomorrowButton = document.createElement('button');
tomorrowButton.innerText = 'Tomorrow';
tomorrowButton.addEventListener('click', () => filterTodo("tomorrow", enteredForm));

const allButton = document.createElement('button');
allButton.innerText = 'All';
allButton.addEventListener('click', ()=>  filterTodo("all ", enteredForm))

const entryToDoForm = document.createElement('div');  
newEntryButton.addEventListener('click', () => showEntryBox())

const toDoList = document.createElement('div');
toDoList.className = "todo--list";

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

filterToDosDiv.appendChild(todayButton);
filterToDosDiv.appendChild(tomorrowButton);
filterToDosDiv.appendChild(allButton);

mainContainer.appendChild(title);
mainContainer.appendChild(filterToDosDiv);
mainContainer.appendChild(newEntryButton);
mainContainer.appendChild(toDoList);