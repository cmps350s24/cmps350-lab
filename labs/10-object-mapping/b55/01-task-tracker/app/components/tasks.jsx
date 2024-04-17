"use client";

import Task from "@/app/components/task";
import { useState, useEffect } from "react";
import { get } from "@/app/actions";

export default function Tasks({ tasks: _tasks }) {
  const [tasks, setTasks] = useState([]);
  // const [stale, setStale] = useState(false);

  useEffect(() => {
    setTasks(_tasks);
    // return () => {};
  }, [_tasks]);

  // useEffect(() => {
  //   if (stale) {
  //     get()
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setTasks(data);
  //         setStale(false);
  //       });
  //   }
  //   // return () => {};
  // }, [stale]);

  // useEffect(() => {
  //   callback().then();
  //   // return () => {};
  // }, []);

  async function callback() {
    // setStale(true);
    // setTasks(await get());
    const res = await fetch("/api");
    if (res.ok) {
      setTasks(await res.json());
    }
  }

  return (
    <main>
      <button
        onClick={async () => {
          await fetch("/api", {
            method: "POST",
            body: JSON.stringify({ title: Math.random().toString() }),
          });
          callback();
        }}
      >
        Add
      </button>
      {tasks.map((task) => (
        <Task key={task.id} task={task} callback={callback} />
      ))}
    </main>
  );
}
