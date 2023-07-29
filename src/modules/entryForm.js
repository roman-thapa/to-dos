export default function entryForm() {
    const form = document.createElement("form");
    form.className = "entryForm"
    const ul = document.createElement("ul");
    ul.className = "dropdown-content box";
    const li1 = createLiWithInput("input","title", "task_title", "Title", "text", true);
    const li2 = createLiWithInput("textarea", "description", "task_description", "Description", "text", true);
    const li3 = createLiWithInput("input", "date", "task_dueDate", "Due Date", "date", true);
    const li4 = createDropdownLi("task_priority", "Priority", true, [
      { text: "High", value: "high" },
      { text: "Medium", value: "medium" },
      { text: "Low", value: "low" },
    ]);
    const button = document.createElement("button");
    button.className = "addTask";
    button.textContent = "Submit";
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
    ul.appendChild(li4);
    ul.appendChild(button);
    form.appendChild(ul);
    return form;
}


const createLiWithInput = function(inputType, id, name, labelText, type, required) {
    const li = document.createElement("li");
    const label = document.createElement("label");
    label.setAttribute("for", id);
    label.textContent = labelText;
    li.appendChild(label);
    const input = document.createElement(inputType);
    input.id = id;
    input.name = name;
    inputType !== "textarea" ? input.type = type : null;
    input.required = required;
    li.appendChild(input);

    return li;
  }

  const createDropdownLi = function(id, labelText, required, optionsArray) {
  const li = document.createElement("li");
  const label = document.createElement("label");
  label.setAttribute("for", id);
  label.textContent = labelText;
  li.appendChild(label);
  const selectElement = document.createElement("select");
  selectElement.id = id;
  selectElement.required = required;
  optionsArray.forEach((option) => {
    const optionElement = document.createElement("option");
    optionElement.textContent = option.text;
    optionElement.value = option.value;
    selectElement.appendChild(optionElement);
  });
  li.appendChild(selectElement);

  return li;
}