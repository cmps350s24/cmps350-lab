"use client";

import Task from "@/components/task";
import { SquareCheckBig, Square, SquareX } from "lucide-react";

export default function Project({ project, callback }) {
  return (
    <>
      <div>
        <div className="flex justify-between">
          <h2>{project.title}</h2>
          <div>
            <button title="Toggle">
              <Square />
            </button>
            <button title="Delete">
              <SquareX />
            </button>
          </div>
        </div>
      </div>
      <div>
        {project.tasks.map((task) => (
          <Task key={task.id} task={task} callback={callback} />
        ))}
      </div>
    </>
  );
}
