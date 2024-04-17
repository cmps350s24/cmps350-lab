import prisma from "@/repos/prisma";

export async function get() {
  return await prisma.user.findMany({
    include: {
      posts: true,
    },
  });
}

export async function add(data) {
  try {
    return await prisma.user.create({
      data: data,
    });
  } catch (e) {
    console.error(e);
    return { error: { message: "", status: 1 } };
  }
}

export async function remove(id) {
  return await prisma.user.delete({
    where: {
      id: id,
    },
  });
}

// async function disconnect() {
//   try {
//     await prisma.$disconnect();
//   } catch (e) {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   }
// }
