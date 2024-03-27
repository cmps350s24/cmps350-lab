import fs from "fs/promises";
import { nanoid } from "nanoid";

const filepath = "repo/data/tasks.json";

export async function read() {
  return JSON.parse(await fs.readFile(filepath));
}

export async function write(tasks) {
  await fs.writeFile(filepath, JSON.stringify(tasks));
}

export async function get(id) {
  const tasks = await read();

  if (!id) {
    return tasks;
  } else {
    return tasks.find((task) => task.id === id);
  }
}

export async function add(props) {
  const tasks = await read();

  const task = { id: nanoid(10), ...props };
  tasks.push(task);
  await write(tasks);

  return task;
}

export async function remove(id) {
  const tasks = await read();

  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    const task = tasks[index];
    tasks.splice(index, 1);
    await write(tasks);
    return task;
  }
}

export async function update(id, props) {
  const tasks = await read();

  const index = tasks.findIndex((task) => task.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...props };
    await write(tasks);
    return tasks[index];
  }
}
