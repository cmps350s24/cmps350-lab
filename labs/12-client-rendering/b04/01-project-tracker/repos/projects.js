import prisma from "@/repos/prisma";

export async function get(id) {
  // let query = {};
  // query = {
  //   ...query,
  //   ...{
  //     include: {
  //       tasks: true,
  //     },
  //   },
  // };
  // if (id) {
  //   query = {
  //     ...query,
  //     ...{
  //       where: {
  //         id,
  //       },
  //     },
  //   };
  // }

  // return await prisma.project.findMany(query);

  if (!id) {
    return await prisma.project.findMany({
      include: {
        tasks: true,
      },
    });
  }
  return await prisma.project.findUnique({
    where: {
      id: id,
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
  return await prisma.project.update({
    where: {
      id: project,
    },
    data,
  });
}
