"use client";

import Project from "@/components/project";
// import * as _projects from "@/repos/projects";
import { useState, useEffect, useRef } from "react";
import { SquarePlus } from "lucide-react";

export default function Home() {
  // const projects = await _projects.get();
  const [projects, setProjects] = useState([]);
  const projectTitle = useRef("");
  const [stale, setStale] = useState(true);

  useEffect(() => {
    if (stale) {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => {
          setProjects(data);
        });
      // .catch((e) => {})
      // .finally(() => {});
      setStale(false);
    }
    return () => {};
  }, [stale]);

  async function handleSubmit(event) {
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

  async function callback() {
    setStale(true);
  }

  return (
    <main>
      {projects.map((project) => (
        <Project key={project.id} project={project} callback={callback} />
      ))}
      <form className="flex justify-between" onSubmit={handleSubmit}>
        <input ref={projectTitle} className="border rounded-lg" type="text" />
        <button type="submit">
          <SquarePlus />
        </button>
      </form>
    </main>
  );
}
