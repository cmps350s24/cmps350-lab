document.addEventListener("DOMContentLoaded", async function () {
  let tasks = [];
  const res = await fetch("/api/tasks");
  if (res.ok) {
    tasks = await res.json();
  }

  //   function renderTasks() {
  //       return tasks
  //         .map(
  //           (task) =>
  //             `<div class="task ${task.complete ? "complete" : ""}">
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
  //         )
  //         .join("");
  //     }
  //   }

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
    const completeImage = document.createElement("img");
    completeImage.src = `icons/${task.complete ? "check-" : ""}square.svg`;
    completeImage.alt = "un/complete task";
    completeButton.appendChild(completeImage);
    completeButton.addEventListener("click", function () {
      completeTask(task.title);
    });

    // const completeCheck = document.createElement("input");
    // completeCheck.type = "checkbox";
    // completeCheck.checked = task.complete;
    // completeCheck.addEventListener("click", function () {
    //   completeTask(task.title);
    // });

    const deleteButton = document.createElement("button");
    deleteButton.disabled = !task.complete;
    const deleteImage = document.createElement("img");
    deleteImage.src = `icons/x-circle.svg`;
    deleteImage.alt = "delete task";
    deleteButton.appendChild(deleteImage);
    deleteButton.addEventListener("click", function () {
      deleteTask(task.title);
    });

    taskDiv.appendChild(titleDiv);
    taskDiv.appendChild(completeButton);
    // taskDiv.appendChild(completeCheck);
    taskDiv.appendChild(deleteButton);
    return taskDiv;
  }

  async function renderTasks() {
    const container = document.querySelector("#tasks");
    // container.innerHTML = null;
    container.replaceChildren();
    tasks.forEach((task) => container.appendChild(renderTask(task)));

    if (tasks.length) {
      document.querySelector("#task-reset").classList.remove("hidden");
    } else {
      document.querySelector("#task-reset").classList.add("hidden");
    }

    // localStorage.setItem("tasks", JSON.stringify(tasks));
    // await tasks.map(async (task) => {
    //   const res1 = await fetch(`/api/tasks/${task.id}`);
    //   if (res1.ok && res1.status !== 404) {
    //     return;
    //   }

    //   const res2 = await fetch("/api/tasks", {
    //     method: "POST",
    //     body: JSON.stringify(task),
    //   });

    //   let data;
    //   if (res2.ok) {
    //     data = await res2.json();
    //   }
    // });
  }

  async function addTask() {
    const titleInput = document.querySelector("#new-task-title");
    const title = titleInput.value.trim();
    if (title && !tasks.find((task) => task.title === title)) {
      tasks.push({
        title,
        complete: false,
      });

      const res = await fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify({
          title,
          complete: false,
        }),
      });

      let data;
      if (res.ok) {
        data = await res.json();
      }

      titleInput.value = "";
      renderTasks();
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
    // const index = tasks.findIndex((task) => task.title === title);
    // tasks.splice(index, 1);
    tasks = tasks.filter((task) => task.title !== title);
    renderTasks();
  }

  document.querySelector("#add-task").addEventListener("click", addTask);
  document.querySelector("#clear-tasks").addEventListener("click", clearTasks);

  renderTasks();
});
