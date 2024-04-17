"use server";

import prisma from "@/repos/prisma";

export async function get() {
  try {
    return await prisma.user.findMany({
      include: {
        posts: true,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

export async function create(data) {
  try {
    const name = data.get("name");
    const email = data.get("email");
    return await prisma.user.create({
      data: {
        name: name,
        email: email,
      },
    });
  } catch (e) {
    console.error(e);
  }
}

export async function remove(data) {
  try {
    const id = data.get("id");
    return await prisma.user.delete({
      where: {
        id,
      },
    });
  } catch (e) {
    console.error(e);
  }
}
