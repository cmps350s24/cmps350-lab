import * as projects from "@/repos/projects";

export async function GET(request, { params }) {
  return Response.json(await projects.get());
}

export async function POST(request, { params }) {
  const data = await request.json();
  return Response.json(await projects.add(data));
}
