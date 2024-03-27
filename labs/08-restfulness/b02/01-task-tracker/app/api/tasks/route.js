import * as tasks from "@/repo/tasks";

export async function GET(request) {
  // console.log(request.nextUrl.searchParams);
  console.log("request /api/tasks");

  try {
    // return new Response("Hello!");
    return Response.json(await tasks.get(), { status: 200 });
  } catch (error) {
    console.error(error.message);
    return Response.json({ message: "Internal error" }, { status: 500 });
  }
}

export async function POST(request) {
  // console.log(request.nextUrl.searchParams);
  // tasks?title=Title&completed=false

  try {
    const data = await request.json();
    // TODO: check for bad requests and send 400
    const task = await tasks.add(data);
    return Response.json(task, { status: 201 });
  } catch (error) {
    console.error(error.message);
    return Response.json({ message: "Internal error" }, { status: 500 });
  }
}
