import prisma from "@/repos/prisma";

export async function get(id) {
  if (id) {
    return prisma.project.findUnique({
      where: {
        id: id,
      },
      include: {
        tasks: true,
      },
    });
  }

  return prisma.project.findMany({
    include: {
      tasks: true,
    },
  });
}

export async function add(data) {
  return prisma.project.create({
    data: data,
  });
}

export async function update(data, project) {
  return await prisma.project.update({
    where: {
      id: project,
    },
    data: data,
  });
}

export async function remove() {}
