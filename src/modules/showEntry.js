export default function updateFormData(enteredForm) {
    const titleOfToDo = document.querySelector("#title");
    const descriptionOfToDo = document.querySelector("#description");
    const dueDateOfToDo = document.querySelector("#date");
    const taskPriorityOfToDo = document.querySelector("#task_priority");
    const entryNumber = Object.keys(enteredForm).length;
    if(titleOfToDo.value !== '' && 
        descriptionOfToDo.value !== "" &&
        dueDateOfToDo.value!== "") {
        enteredForm[entryNumber] = {
                title: titleOfToDo.value,
                description: descriptionOfToDo.value,
                dueDate: dueDateOfToDo.value,
                taskPriority: taskPriorityOfToDo.value
        }
    }
    return(enteredForm)
  }

