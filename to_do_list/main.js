let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];
let selectedMenu = "tab-all";
let filteredList = [];
let mode = "all";

let tabs = document.querySelectorAll(".task-tabs div");
let taskArea = document.getElementById("task-area");

addButton.addEventListener("mousedown", addTask);
taskInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("add-button").click();
    taskInput.value = "";
  }
});

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  let taskValue = taskInput.value;
  let task = {
    id: randomIDGenerate(),
    Content: taskValue,
    isComplete: false,
  };
  taskList.push(task);
  taskInput.value = "";
  render();
}

function render() {
  let result = "";
  list = [];
  if (selectedMenu === "tab-all") {
    list = taskList;
  } else {
    list = filteredList;
  }

  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete) {
      result += `<div class="task" id="task-area">
        <div class="task-done">${list[i].taskContent}</div>
        <div>
          <button class="refresh" onclick="toggleComplete('${list[i].id}')">&#8635;</button>
          <button class="delete" onclick="deleteTask('${list[i].id}')">&#128465;</button>
        </div>
      </div>`;
    } else {
      result += `<div class="task" id="task-area">
    <div>${list[i].taskContent}</div>
    <div>
      <button class="check" onclick="toggleComplete('${list[i].id}')">✓</button>
      <button class="delete" onclick="deleteTask('${list[i].id}')">&#128465;</button>
    </div>
  </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = result;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  filter();
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList.splice(i, 1);
    }
  }

  filter();
}

function filter(e) {
  if (e) {
    selectedMenu = e.target.id;
    underLine.style.width = e.target.offsetWidth + "px";
    underLine.style.left = e.target.offsetLeft + "px";
    underLine.style.top =
      e.target.offsetTop + (e.target.offsetHeight - 4) + "px";
  }

  filteredList = [];
  if (selectedMenu === "tab-not-done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filteredList.push(taskList[i]);
      }
    }
  } else if (selectedMenu === "tab-done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete) {
        filteredList.push(taskList[i]);
      }
    }
  }
  render();
}

function randomIDGenerate() {
  return `_` + Math.random().toString(36).substring(2, 9);
}
