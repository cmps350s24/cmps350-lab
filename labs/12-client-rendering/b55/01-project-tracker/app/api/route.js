import * as projects from "@/repos/projects";

export async function GET(request, { params }) {
  try {
    const result = await projects.get();
    // if (!error) {}
    return Response.json(result);
  } catch (e) {}
}

export async function POST(request, { params }) {
  const data = await request.json();
  try {
    const result = await projects.add(data);
    // if (!error) {}
    return Response.json(result);
  } catch (e) {}
}
