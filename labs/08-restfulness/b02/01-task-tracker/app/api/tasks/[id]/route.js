import * as tasks from "@/repo/tasks";
export async function GET(request, { params }) {
  const { id } = params;
  // const id = params.id;

  // if (id > 10) {
  //   return Response.json({ message: "Not found" }, { status: 404 });
  // }

  try {
    const task = await tasks.get(id);

    if (!task) {
      return Response.json({ message: "Not found" }, { status: 404 });
    } else {
      return Response.json(task, { status: 200 });
    }
  } catch (error) {
    console.error(error.message);
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  // const id = params.id;

  // if (id > 10) {
  //   return Response.json({ message: "Not found" }, { status: 404 });
  // }

  try {
    const task = await tasks.remove(id);

    if (!task) {
      return Response.json({ message: "Not found" }, { status: 404 });
    } else {
      return Response.json(task, { status: 200 });
    }
  } catch (error) {
    console.error(error.message);
  }
}
