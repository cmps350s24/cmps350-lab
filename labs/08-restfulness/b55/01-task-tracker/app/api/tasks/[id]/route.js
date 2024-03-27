import * as tasks from "@/repo/tasks";

export async function GET(request, { params }) {
  const { id } = params;
  try {
    // const id = params.id;
    const task = await tasks.get(id);

    if (!task) {
      return Response.json({ message: "Not found" }, { status: 404 });
    } else {
      return Response.json(task, { status: 200 });
    }
  } catch (error) {
    console.error(error.message);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  const { id } = params;
  try {
    const data = await request.json();
    const task = await tasks.update(id, data);

    if (!task) {
      return Response.json({ message: "Not found" }, { status: 404 });
    } else {
      return Response.json(task, { status: 200 });
    }
  } catch (error) {
    console.error(error.message);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  const { id } = params;
  try {
    const task = await tasks.remove(id);

    if (!task) {
      return Response.json({ message: "Not found" }, { status: 404 });
    } else {
      return Response.json(task, { status: 200 });
    }
  } catch (error) {
    console.error(error.message);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
