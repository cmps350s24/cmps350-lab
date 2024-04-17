"use client";

import { toggle as toggleAction } from "@/app/actions";

export default function Task({ task, callback }) {
  // async function toggle(event) {
  //   const toggleWithId = toggleAction.bind(null, task.id);
  //   await toggleWithId();
  //   callback();
  // }

  async function toggle(event) {
    const res = await fetch(`/api/${task.id}`, {
      method: "PATCH",
      body: JSON.stringify({ completed: !task.completed }),
    });
    callback();
  }

  return (
    <div className="flex gap-x-2">
      <div>{task.title}</div>
      <button onClick={toggle}>{task.completed ? "True" : "False"}</button>
    </div>
  );
}
