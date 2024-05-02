"use client";
import { SquareCheckBig } from "lucide-react";
// import { useState, useEffect } from "react";
import { Square } from "lucide-react";

export default function Project({ project, callback }) {
  // const [color, setColor] = useState();

  // useEffect(() => {
  //   setColor(Math.random());
  //   return () => {};
  // }, []);

  async function handleToggle(event) {
    event.preventDefault();
    const response = await fetch(`/api/${project.id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: !project.completed }),
    });

    if (response.ok) {
      callback();
    }
  }

  return (
    <div className="flex justify-between">
      <h2>{project.title}</h2>
      <div>
        <button title="Toggle completed" onClick={handleToggle}>
          {project.completed ? <SquareCheckBig /> : <Square />}
        </button>
      </div>
    </div>
  );
}
