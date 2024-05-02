import prisma from "@/repos/prisma";

export async function get(id) {
  if (!id) {
    return await prisma.project.findMany({
      include: {
        tasks: true,
      },
    });
  }
  return await prisma.project.findUnique({
    where: {
      id,
    },
    include: {
      tasks: true,
    },
  });
}

export async function add(data) {
  return await prisma.project.create({
    data,
  });
}

export async function update(data, project) {
  if ("completed" in data) {
    const completed = data.completed;
    await prisma.task.updateMany({
      where: {
        project,
      },
      data: {
        completed,
      },
    });
  }
}

export async function remove() {}
