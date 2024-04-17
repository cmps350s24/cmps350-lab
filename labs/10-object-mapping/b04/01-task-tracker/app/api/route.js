import * as tasks from "@/repos/tasks";

export async function GET(request, { params }) {
  const result = await tasks.get();
  return Response.json(result, { status: 200 });
}
