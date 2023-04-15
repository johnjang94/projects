let taskInput = document.getElementById("task-input");
let addButton = document.getElementById("add-button");
let taskList = [];
let filterList = [];
let mode = "all";

let tabs = document.querySelectorAll(".task-tabs div");

addButton.addEventListener("click", addTask);

for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function addTask() {
  let task = {
    id: randomIDGenerate(),
    taskContent: taskInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}

function render() {
  let list = [];
  if (mode == "all") {
    list = taskList;
  } else if (mode == "in-progress" || mode == "completed") {
    list = filterList;
  }
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `<div class="task">
        <div class="task-done">${list[i].taskContent}</div>
        <div>
          <button onclick="toggleComplete('${list[i].id}')">Check</button>
          <button onclick="deleteTask('${list[i].id}')">Delete</button>
        </div>
      </div>`;
    } else {
      resultHTML += `<div class="task">
    <div>${list[i].taskContent}</div>
    <div>
      <button onclick="toggleComplete('${list[i].id}')">Check</button>
      <button onclick="deleteTask('${list[i].id}')">Delete</button>
    </div>
  </div>`;
    }
  }

  document.getElementById("task-board").innerHTML = resultHTML;
}

function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log(taskList);
}

function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

function filter(event) {
  mode = event.target.id;
  filterList = [];

  document.getElementById("underline").style.width =
    event.target.offsetWidth + "px";
  document.getElementById("underline").style.top =
    event.target.offsetTop + event.target.offsetHeight + "px";
  document.getElementById("underline").style.left =
    event.target.offsetLeft + "px";

  console.log("filter clicked", event.target.id);
  if (mode == "all") {
    render();
  } else if (mode == "in-progress") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode == "completed") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete == true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }
}

function randomIDGenerate() {
  return `_` + Math.random().toString(36).substring(2, 9);
}
