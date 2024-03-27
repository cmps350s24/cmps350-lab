import fs from "fs/promises";
import { nanoid } from "nanoid";

const filepath = "repo/data/tasks.json";

export async function read() {
  try {
    return JSON.parse(await fs.readFile(filepath));
  } catch (error) {
    console.err(error.message);
  }
}

export async function write(tasks) {
  try {
    await fs.writeFile(filepath, JSON.stringify(tasks));
  } catch (error) {
    console.err(error.message);
  }
}

export async function get(id) {
  const tasks = await read();

  if (!id) {
    return tasks;
  } else {
    const task = tasks.find((t) => t.id === id);
    return task;
  }
}

export async function add(data) {
  const tasks = await read();

  // TODO: validate task properties

  const task = { id: nanoid(10), ...data };
  tasks.push(task);
  await write(tasks);
  return task;
}

export async function remove(id) {
  const tasks = await read();
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    const task = tasks[index];
    tasks.splice(index, 1);
    await write(tasks);
    return task;
  }
}

export async function update(id, data) {
  const tasks = await read();
  const index = tasks.findIndex((t) => t.id === id);
  if (index !== -1) {
    tasks[index] = { ...tasks[index], ...data };
    await write(tasks);
    return tasks[index];
  }
}
