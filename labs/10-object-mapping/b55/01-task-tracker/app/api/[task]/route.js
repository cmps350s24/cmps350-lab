import * as tasks from "@/repos/tasks";

export async function PATCH(request, { params }) {
  try {
    const { task } = params;
    const data = await request.json();
    const result = await tasks.update(task, data);
    return Response.json(result, { status: 200 });
  } catch (e) {
    return Response.json("Oops!", { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { task } = params;
  const result = await tasks.remove(task);
  return Response.json(result, { status: 200 });
}
