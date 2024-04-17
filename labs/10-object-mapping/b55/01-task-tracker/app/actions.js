"use server";
import prisma from "@/repos/prisma";

export async function get() {
  return await prisma.task.findMany();
}

export async function toggle(id) {
  const task = await prisma.task.findUnique({
    where: {
      id,
    },
  });

  return await prisma.task.update({
    where: {
      id,
    },
    data: {
      completed: !task.completed,
    },
  });
}
