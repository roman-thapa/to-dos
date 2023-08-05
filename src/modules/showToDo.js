export default function appendLastTaskToDiv(tasksData) {
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
  