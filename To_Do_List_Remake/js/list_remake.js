let userInput = document.getElementById("user-input");
let addButton = document.getElementById("add");
let taskList = []; //I am creating a new array here to make sure that the list gets created.
let filterList = [];
let mode = "all";
let detailBox = document.getElementById("detail");

// ========= INTERACTION USING BUTTONS ============
// <<<<<<< ADD BUTTON >>>>>>>
addButton.addEventListener("click", add);

// =========== FUNCTION DETAIL ===========
// <<<<<<< IDENTIFICATION RANDOM GENERATE >>>>>>>>>>
function randomIDGenerate() {
  return `_` + Math.random().toString(36).substring(2, 9);
}
// <<<<<<< CORRESPONDING TO ADD >>>>>>>>>
function add() {
  let task = {
    id: randomIDGenerate(),
    taskContent: userInput.value,
    isComplete: false,
  };
  taskList.push(task);
  console.log(taskList);
  render();
}
// <<<<<<<<<<< CORRESPONDING TO TOGGLE BUTTON >>>>>>>>>>
function toggleComplete(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
  console.log("id:", `${id}`);
}

// <<<<<<< CORRESPONDING TO DELETE >>>>>>>>>
function deleteTask(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id == id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

// <<<<<<<< CORRESPONDING TO FILTER >>>>>>>>
let tabs = document.querySelectorAll(".task-tabs div");
for (let i = 1; i < tabs.length; i++) {
  tabs[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function filter(event) {
  mode = event.target.id;
  filterList = [];

  document.getElementById("under-line").style.width =
    event.target.offsetWidth + "px";
  document.getElementById("under-line").style.top =
    event.target.offsetTop + event.target.offsetHeight + "px";
  document.getElementById("under-line").style.left =
    event.target.offsetLeft + "px";

  console.log("filter clicked", event.target.id);
  if (mode == "all") {
    render();
  } else if (mode == "in-progress") {
    for (let i = 0; i < taskList.length; i++) {
      if (!taskList[i].isComplete) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode == "completed") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete) {
        filterList.push(taskList[i]);
      }
      detailBox.style.backgroundColor = "grey";
    }
    render();
  }
}

// <<<<<<<<< CORRESPONDING TO DISPLAY ON THE SCREEN >>>>>>>>>
function render() {
  let detailBox = document.getElementById("detail");
  let list = [];
  if (mode == "all") {
    list = taskList;
  } else if (mode == "in-progress" || mode == "completed") {
    list = filterList;
  }
  let resultHTML = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete == true) {
      resultHTML += `  <div class="task">
      <div class="task-detail" id="detail">${list[i].taskContent}</div>
      <button class="check" onclick="toggleComplete('${list[i].id}')"></button>
      <button class="trash" onclick="deleteTask('${list[i].id}')"></button>
      </div>`;
      detailBox.style.backgroundColor = "grey";
    } else {
      resultHTML += `  <div class="task">
      <div class="task-detail">${list[i].taskContent}</div>
      <button class="check" onclick="toggleComplete('${list[i].id}')"></button>
      <button class="trash" onclick="deleteTask('${list[i].id}')"></button>
      </div>`;
    }
  }
  document.getElementById("task").innerHTML = resultHTML;
}
