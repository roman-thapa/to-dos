export default function updateFormData(enteredForm) {
    const titleOfToDo = document.querySelector("#title");
    const descriptionOfToDo = document.querySelector("#description");
    const dueDateOfToDo = document.querySelector("#date");
    const taskPriorityOfToDo = document.querySelector("#task_priority");
    
    let entryNumber = Object.keys(enteredForm).length > 0 ? Math.max(...Object.keys(enteredForm)) : -1;
    entryNumber++;
    if(titleOfToDo.value !== '' && 
        descriptionOfToDo.value !== "" &&
        dueDateOfToDo.value!== "") {
        enteredForm[entryNumber] = {
                title: titleOfToDo.value,
                description: descriptionOfToDo.value,
                dueDate: dueDateOfToDo.value,
                taskPriority: taskPriorityOfToDo.value
        }
        return enteredForm;
    } else {
        return false;
    }
  }

