import * as projects from "@/repos/projects";

export async function GET(request, { params }) {
  try {
    const result = await projects.get();
    return Response.json(result);
  } catch (e) {}
}

export async function POST(request, { params }) {
  try {
    const data = await request.json();
    const result = await projects.add(data);
    return Response.json(result);
  } catch (e) {}
}
