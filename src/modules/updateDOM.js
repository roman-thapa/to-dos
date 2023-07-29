import entryForm from "./entryForm";

const mainContainer = document.querySelector('#app')
const title = document.createElement("h1");
title.innerText = "To do";

const newEntryButton = document.createElement('button');
newEntryButton.innerText = "+";
newEntryButton.className = "newEntryButton";

newEntryButton.addEventListener('click', () => showEntryBox())

const showEntryBox = function() {
  mainContainer.appendChild(entryForm())
  const submitForm = document.querySelector('.addTask');
  const submit = function(event) {
    console.log("submitted");
    event.preventDefault(); 
  } 
  submitForm.addEventListener('click', submit);
}

mainContainer.appendChild(title);
mainContainer.appendChild(newEntryButton);