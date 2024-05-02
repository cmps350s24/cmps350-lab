"use client";

import { useState, useEffect, useRef } from "react";
import Project from "@/components/project";
import { SquarePlus } from "lucide-react";

export default function Home() {
  const [projects, setProjects] = useState([]);
  const projectTitle = useRef();
  const [stale, setStale] = useState(true);

  useEffect(() => {
    if (stale) {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
        })
        .catch(() => {})
        .finally(() => {});
      setStale(false);
    }

    return () => {};
  }, [stale]);

  async function handleCreate(event) {
    event.preventDefault();
    const title = projectTitle.current.value.trim();

    if (title) {
      const response = await fetch("/api", {
        method: "POST",
        body: JSON.stringify({ title }),
      });

      if (response.ok) {
        projectTitle.current.value = "";
        setStale(true);
      }
    }
  }

  function callback() {
    setStale(true);
  }

  return (
    <main>
      {projects.map((project) => (
        <Project key={project.id} project={project} callback={callback} />
      ))}
      <form className="flex justify-between" onSubmit={handleCreate}>
        <input ref={projectTitle} className="border rounded-lg" type="text" />
        <button type="submit">
          <SquarePlus />
        </button>
      </form>
    </main>
  );
}
