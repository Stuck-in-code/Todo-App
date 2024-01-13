let addTaskInput = document.querySelector("#add-task-input");
let addTaskBtn = document.querySelector(".add-task-btn");
let displayTask = document.getElementsByClassName("display-task")[0];

//          Delete Task

//        check Task

addTaskBtn.addEventListener("click", () => {
  if (addTaskInput.value !== "") {
    let taskList = document.createElement("div");
    // taskList.setAttribute("class", "task-list");
    taskList.classList.add("task-list");
    displayTask.appendChild(taskList);

    let taskCheckbox = document.createElement("input");
    taskCheckbox.setAttribute("type", "checkbox");
    taskCheckbox.classList.add("task-checked");
    taskList.appendChild(taskCheckbox);

    let taskTitle = document.createElement("span");
    taskTitle.textContent = addTaskInput.value;
    taskTitle.classList.add("title-span");
    taskList.appendChild(taskTitle);

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "del";
    //deleteBtn.setAttribute("class", "delete-todo-btn");
    deleteBtn.classList.add("delete-todo-btn");
    taskList.appendChild(deleteBtn);

    addTaskInput.value = "";
    setTaskFn();

    let newDelBtn = displayTask.querySelectorAll(".delete-todo-btn");
    for (var i = 0; i < newDelBtn.length; i++) {
      newDelBtn[i].addEventListener("click", deleteTaskFn);
    }

    // check task as completed
    let checkBox = displayTask.querySelectorAll(".task-checked");
    for (var i = 0; i < checkBox.length; i++) {
      checkBox[i].addEventListener("change", checkTaskFn);
    }
  } else {
    alert("please enter a task to do");
  }
});

//        Delete Task

const deleteTaskFn = (event) => {
  event.target.parentElement.remove();
  setTaskFn();
};

function checkTaskFn(e) {
  let actualCheckBox = e.target;
  let taskRow = actualCheckBox.parentElement;
  let titleText = taskRow.querySelector(".title-span");

  if (actualCheckBox.checked) {
    titleText.style.textDecoration = "line-through";
    taskRow.style.backgroundColor = "aqua";
  } else {
    titleText.style.textDecoration = "none";
    taskRow.style.backgroundColor = "bisque";
  }
}

function setTaskFn() {
  if (displayTask.hasChildNodes()) {
    document.getElementById("list-header").innerHTML = "task list";
  } else {
    document.getElementById("list-header").innerHTML = "no task";
  }
}
setTaskFn();
