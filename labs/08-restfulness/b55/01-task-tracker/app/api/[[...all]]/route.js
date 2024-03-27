export async function GET(request) {
  return Response.json({ message: "Not found" }, { status: 404 });
}
