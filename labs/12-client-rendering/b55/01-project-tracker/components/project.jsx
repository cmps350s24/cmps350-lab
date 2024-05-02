import Task from "@/components/task";
import { Square, SquareCheckBigIcon, SquareX } from "lucide-react";

export default function Project({ project, callback }) {
  async function handleToggle(event) {
    const response = await fetch(`/api/${project.id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: !project.completed }),
    });

    if (response.ok) {
      callback();
    }
  }

  return (
    <>
      <div className="flex justify-between">
        <h2>{project.title}</h2>
        <div className="flex gap-1">
          <button title="Toggle completed" onClick={handleToggle}>
            {project.completed ? <SquareCheckBigIcon /> : <Square />}
          </button>
          <button title="Remove">
            <SquareX />
          </button>
        </div>
      </div>
      <div>
        {project.tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </>
  );
}
