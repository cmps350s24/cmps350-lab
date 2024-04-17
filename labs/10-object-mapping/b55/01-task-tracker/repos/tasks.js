import prisma from "@/repos/prisma";

export async function get(id) {
  if (id) {
    return await prisma.task.findUnique({
      where: { id },
    });
  }
  return await prisma.task.findMany();
}

export async function add(data) {
  return await prisma.task.create({
    data,
  });
}

export async function update(id, data) {
  return await prisma.task.update({
    where: { id },
    data,
  });
}

export async function remove(id) {
  return await prisma.task.delete({
    where: { id },
  });
}
