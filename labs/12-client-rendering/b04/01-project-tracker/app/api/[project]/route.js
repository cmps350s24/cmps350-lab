import * as projects from "@/repos/projects";

export async function PATCH(request, { params }) {
  return Response.json(
    await projects.update(await request.json(), params.project)
  );
}
