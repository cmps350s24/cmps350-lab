import prisma from "@/repos/prisma";

export async function get() {
  return await prisma.task.findMany();
}
