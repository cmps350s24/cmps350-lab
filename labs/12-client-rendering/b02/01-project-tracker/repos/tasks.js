import prisma from "@/repos/prisma";

export async function get() {}

export async function add() {}

export async function update(data, task, project) {
  return await prisma.task.update({
    where: {
      id: task,
      project,
    },
    data,
  });
}

export async function remove() {}
