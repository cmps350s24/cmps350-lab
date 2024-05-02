import * as tasks from "@/repos/tasks";

export async function PATCH(request, { params }) {
  const { project, task } = params;
  const data = await request.json();
  return Response.json(await tasks.update(data, task, project), {
    status: 201,
  });
}
