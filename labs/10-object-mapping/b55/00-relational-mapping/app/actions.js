"use server";

import * as users from "@/repos/users";

export async function get() {
  return await users.get();
}

export async function add(data) {
  return await users.add({ name: data.get("name"), email: data.get("email") });
}

export async function remove(id) {
  return await users.remove(id);
}
