import * as tasks from "@/repos/tasks";

export async function GET(request, { params }) {
  const result = await tasks.get();
  return Response.json(result, { status: 200 });
}

export async function POST(request, { params }) {
  const data = await request.json();
  const result = await tasks.add(data);
  if ("error" in result) {
    return Response.json(result.error.message, {
      status: result.error.status,
    });
  } else {
    return Response.json(result, { status: 201 });
  }
}
