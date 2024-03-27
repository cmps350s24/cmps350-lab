import * as tasks from "@/repo/tasks";

export async function GET(request, { params }) {
  // const id = params.id;
  const { id } = params;

  try {
    const result = await tasks.get(id);

    if (result) {
      return Response.json(result, { status: 200 });
    } else {
      return Response.json({ message: "Not found" }, { status: 404 });
    }
  } catch (error) {
    return Response.json({ message: "Internal error" }, { status: 500 });
  }
}

export async function PUT(request, { params }) {
  // const id = params.id;
  const { id } = params;

  try {
    const props = await request.json();
    const result = await tasks.update(id, props);

    if (result) {
      return Response.json(result, { status: 200 });
    } else {
      return Response.json({ message: "Not found" }, { status: 404 });
    }
  } catch (error) {
    return Response.json({ message: "Internal error" }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  // const id = params.id;
  const { id } = params;

  try {
    const result = await tasks.remove(id);

    if (result) {
      return Response.json(result, { status: 200 });
    } else {
      return Response.json({ message: "Not found" }, { status: 404 });
    }
  } catch (error) {
    return Response.json({ message: "Internal error" }, { status: 500 });
  }
}
