"use client";

// import * as prepo from "@/repos/projects";
import Project from "@/components/project";
import { useState, useEffect, useRef } from "react";
import { SquarePlus } from "lucide-react";

export default function Home() {
  // const projects = await prepo.get();
  const [projects, setProjects] = useState([]);
  const [stale, setStale] = useState(true);
  const projectTitle = useRef();

  useEffect(() => {
    if (stale) {
      fetch("/api")
        .then((res) => res.json())
        .then((data) => setProjects(data));
      setStale(false);
    }
    return () => {}; //cleanup
  }, [stale]);

  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api", {
      method: "POST",
      body: JSON.stringify({ title: projectTitle.current.value }),
    });

    if (response.ok) {
      projectTitle.current.value = "";
      setStale(true);
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
      <form className="flex justify-between" onSubmit={handleSubmit}>
        <input ref={projectTitle} className="border rounded-lg" type="text" />
        <button title="Create project">
          <SquarePlus />
        </button>
      </form>
    </main>
  );
}
