document.addEventListener("DOMContentLoaded", () => {
  // let tasks = [
  //   { title: "Task 1", complete: false },
  //   { title: "Task 2", complete: true },
  //   { title: "Task 3", complete: false },
  // ];

  const jsonTasks = localStorage.getItem("tasks");
  let tasks = jsonTasks ? JSON.parse(jsonTasks) : [];

  //   function renderTasks() {
  //     return tasks
  //       .map(
  //         (task) =>
  //           `<div class="task ${task.complete ? "complete" : ""}">
  //   <div class="task-title">${task.title}</div>
  //   <button>
  //     <img src="icons/${
  //       task.complete ? "check-" : ""
  //     }square.svg" alt="un/complete task" />
  //   </button>
  //   <button>
  //     <img src="icons/x-circle.svg" alt="delete task" />
  //   </button>
  // </div>`
  //       )
  //       .join("");
  //   }

  //   const container = document.querySelector("#tasks");
  //   container.innerHTML = renderTasks();
  // console.log(container);
  // console.log(render());

  function renderTasks() {
    const container = document.querySelector("#tasks");
    container.replaceChildren();
    tasks.forEach((task) => container.appendChild(renderTask(task)));

    const clearButton = document.querySelector("#task-reset");
    if (tasks.length) {
      clearButton.classList.remove("hidden");
    } else {
      clearButton.classList.add("hidden");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTask(task) {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.complete) {
      taskDiv.classList.add("complete");
    }

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.innerHTML = task.title;

    const completeButton = document.createElement("button");
    const completeImage = document.createElement("img");
    completeImage.src = `icons/${task.complete ? "check-" : ""}square.svg`;
    completeImage.alt = "un/complete task";
    completeButton.appendChild(completeImage);

    const deleteButton = document.createElement("button");
    const deleteImage = document.createElement("img");
    deleteImage.src = `icons/x-circle.svg`;
    deleteImage.alt = "delete task";
    deleteButton.appendChild(deleteImage);

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(completeButton);
    taskDiv.appendChild(deleteButton);

    completeButton.addEventListener("click", (event) => {
      completeTask(task.title);
    });
    deleteButton.addEventListener("click", (event) => {
      deleteTask(task.title);
    });

    return taskDiv;
  }

  function addTask() {
    const titleInput = document.querySelector("#new-task-title");
    const title = titleInput.value.trim();
    if (!tasks.find((task) => task.title === title)) {
      tasks.push({ title, complete: false });
      renderTasks();
      titleInput.value = "";
    }
  }

  function clearTasks() {
    tasks = [];
    renderTasks();
  }

  function completeTask(title) {
    const task = tasks.find((task) => task.title === title);
    task.complete = !task.complete;
    renderTasks();
  }

  function deleteTask(title) {
    tasks = tasks.filter((task) => task.title !== title);
    renderTasks();
  }

  document.querySelector("#add-task").addEventListener("click", addTask);
  document.querySelector("#task-reset").addEventListener("click", clearTasks);

  renderTasks();
});
