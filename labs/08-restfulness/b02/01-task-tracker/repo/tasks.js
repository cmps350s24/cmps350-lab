import fs from "fs/promises";
import { nanoid } from "nanoid";

const filepath = "repo/data/tasks.json";

async function read() {
  return JSON.parse(await fs.readFile(filepath));
}

async function write(tasks) {
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

export async function add(task) {
  const tasks = await read();

  // TODO: check for task properties
  const _task = { id: nanoid(10), ...task };
  tasks.push(_task);
  await write(tasks);
  return _task;
}

export async function remove(id) {
  const tasks = await read();

  const index = tasks.findIndex((task) => task.id == id);
  if (index !== -1) {
    const task = tasks[index];
    tasks.splice(index, 1);
    await write(tasks);
    return task;
  }
}

export async function update(task) {
  const tasks = await read();

  const index = tasks.findIndex((task) => task.id == id);
  if (index !== -1) {
    tasks[index] = task;
    await write(tasks);
    return task;
  } else {
    // insert is upsert
  }
}

// export default tasks;
