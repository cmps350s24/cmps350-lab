document.addEventListener("DOMContentLoaded", function () {
  // const tasks = [
  //   { title: "Task 1", complete: true },
  //   { title: "Task 2", complete: false },
  //   { title: "Task 3", complete: false },
  // ];
  const tasks = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];

  //127.0.0.1:5500/labs/07-client-scripting/b55/base/01-task-tracker/index.html

  http: function addTask() {
    const title = document.querySelector("#new-task-title").value.trim();

    if (title !== "" && !tasks.find((task) => task.title === title)) {
      tasks.push({ title, complete: false });
      renderTasks();
      document.querySelector("#new-task-title").value = "";
    }
  }

  function clearTasks() {
    // tasks = [];
    tasks.splice(0);

    renderTasks();
  }

  function completeTask(title) {
    const task = tasks.find((task) => task.title === title);
    task.complete = !task.complete;

    renderTasks();
  }

  function deleteTask(title) {
    const index = tasks.findIndex((task) => task.title === title);
    tasks.splice(index, 1);

    renderTasks();
  }

  // function renderTask2(task) {
  //   return `<div class="task${task.complete ? " complete" : ""}">
  //       <div class="task-title">${task.title}</div>
  //       <button>
  //         <img src="icons/${
  //           task.complete ? "check-square.svg" : "square.svg"
  //         }" alt="un/complete task" />
  //       </button>
  //       <button ${!task.complete ? "disabled" : ""}>
  //         <img src="icons/x-circle.svg" alt="delete task" />
  //       </button>
  //     </div>`;
  // }

  function renderTask(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.complete) {
      taskDiv.classList.add("complete");
    }

    const titleDiv = document.createElement("div");
    titleDiv.classList.add("task-title");
    titleDiv.innerHTML = task.title;

    const completeButton = document.createElement("button");
    const completeImg = document.createElement("img");
    completeImg.src = `icons/${
      task.complete ? "check-square.svg" : "square.svg"
    }`;
    completeImg.alt = "un/complete task";
    completeButton.appendChild(completeImg);

    const deleteButton = document.createElement("button");
    deleteButton.disabled = !task.complete;
    const deleteImg = document.createElement("img");
    deleteImg.src = `icons/x-circle.svg`;
    deleteImg.alt = "delete task";
    deleteButton.appendChild(deleteImg);

    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(completeButton);
    taskDiv.appendChild(deleteButton);

    // console.log(taskDiv);
    completeButton.addEventListener("click", function () {
      completeTask(task.title);
    });
    deleteButton.addEventListener("click", function () {
      deleteTask(task.title);
    });
    return taskDiv;
  }

  function renderTasks() {
    // return tasks.map((task) => renderTask(task)).join("\n");

    const container = document.querySelector("#tasks");
    container.replaceChildren();
    // container.innerHTML = null;
    tasks.forEach((task) => container.appendChild(renderTask(task)));

    const clearButton = document.querySelector("#task-reset");
    if (tasks.length) {
      clearButton.classList.remove("hidden");
    } else {
      clearButton.classList.add("hidden");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  document.querySelector("#task-reset").addEventListener("click", clearTasks);
  document.querySelector("#add-task").addEventListener("click", addTask);

  // const container = document.querySelector("#tasks");
  // container.innerHTML = renderTasks();

  renderTasks();
});
