import * as tasks from "@/repos/tasks";

export default async function Home() {
  // let tasks = [];
  // const res = await fetch("/api");
  // if (res.ok) {
  //   tasks = await res.json();
  // }
  const ts = await tasks.get();
  return ts.map((task) => <div key={task.id}>{task.title}</div>);
}
