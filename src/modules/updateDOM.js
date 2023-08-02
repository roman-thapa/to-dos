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

const showEntryBox = function() {
    entryToDoForm.appendChild(entryForm())
  mainContainer.appendChild(entryToDoForm)
  const submitForm = document.querySelector('.addTask');
  submitForm.addEventListener('click', submit);
}

const submit = function(event) {
  event.preventDefault();
  updateFormData(enteredForm);
  entryToDoForm.removeChild(entryToDoForm.firstChild)
} 

mainContainer.appendChild(title);
mainContainer.appendChild(newEntryButton);