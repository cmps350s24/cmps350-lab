import * as projects from "@/repos/projects";

export async function PATCH(request, { params }) {
  const { project } = params;
  const data = await request.json();
  const result = await projects.update(data, project);
  return Response.json(result, { status: 201 });
}
