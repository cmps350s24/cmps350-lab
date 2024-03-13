document.addEventListener("DOMContentLoaded", () => {
  // const tasks = [
  //   { title: "Task 1", complete: false },
  //   { title: "Task 2", complete: true },
  //   { title: "Task 3", complete: false },
  //   { title: "Task 4", complete: true },
  // ];

  https://restcountries.com/v3.1/all

  const tasks = JSON.parse(localStorage.getItem("tasks") ?? "[]");

  const clearButton = document.querySelector("#task-reset");

  const addTask = () => {
    const titleInput = document.querySelector("#new-task-title");
    const title = titleInput.value.trim();

    if (title && !tasks.find((task) => task.title === title)) {
      tasks.push({ title, complete: false });
      renderTasks();
      titleInput.value = "";
    }
  };

  const clearTasks = () => {
    // tasks.length = 0;
    tasks.splice(0);

    renderTasks();
  };

  const completeTask = (title) => {
    const task = tasks.find((task) => task.title === title);
    task.complete = !task.complete;

    renderTasks();
  };

  const deleteTask = (title) => {
    const index = tasks.findIndex((task) => task.title === title);
    // if (index !== -1) {
    tasks.splice(index, 1);
    // }

    renderTasks();
  };

  const renderTask2 = (task) => {
    return `<div class="task${task.complete ? " complete" : ""}">
  <div class="task-title">${task.title}</div>
  <button>
    <img src="icons/${
      task.complete ? "check-" : ""
    }square.svg" alt="un/complete task" />
  </button>
  <button${!task.complete ? " disabled" : ""}>
    <img src="icons/x-circle.svg" alt="delete task" />
  </button>
</div>`;
  };

  const renderTasks2 = () => {
    return tasks.map((task) => renderTask(task)).join("");
  };

  const renderTask = (task) => {
    const taskDiv = document.createElement("div");
    taskDiv.classList.add("task");
    if (task.complete) {
      taskDiv.classList.add("complete");
    }

    const taskTitle = document.createElement("div");
    taskTitle.classList.add("task-title");
    taskTitle.textContent = task.title;

    const completeButton = document.createElement("button");
    const completeImg = document.createElement("img");
    completeImg.src = `icons/${task.complete ? "check-" : ""}square.svg`;
    completeImg.alt = "un/complete task";
    completeButton.appendChild(completeImg);

    const deleteButton = document.createElement("button");
    deleteButton.disabled = !task.complete;
    const deleteImg = document.createElement("img");
    deleteImg.src = "icons/x-circle.svg";
    deleteImg.alt = "delete task";
    deleteButton.appendChild(deleteImg);

    taskDiv.appendChild(taskTitle);
    taskDiv.appendChild(completeButton);
    taskDiv.appendChild(deleteButton);

    completeButton.addEventListener("click", () => completeTask(task.title));
    deleteButton.addEventListener("click", () => deleteTask(task.title));

    return taskDiv;
  };

  const renderTasks = () => {
    const tasksDiv = document.querySelector("#tasks");
    // tasksDiv.innerHTML = null;
    tasksDiv.replaceChildren();
    tasks.forEach((task) => tasksDiv.appendChild(renderTask(task)));

    if (tasks.length) {
      clearButton.classList.remove("hidden");
    } else {
      clearButton.classList.add("hidden");
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  // console.log(tasks.map(task => `- ${task.title} [${task.complete ? "complete" : "not complete"}]`).join("\n"));
  // console.log(renderTasks());
  // document.querySelector("#tasks").innerHTML = renderTasks();
  // console.log(tasks);

  document.querySelector("#add-task").addEventListener("click", addTask);
  clearButton.addEventListener("click", clearTasks);

  renderTasks();
});
