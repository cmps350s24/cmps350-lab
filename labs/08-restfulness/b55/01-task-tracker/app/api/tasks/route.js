import * as tasks from "@/repo/tasks";

export async function GET(request) {
  try {
    // console.log(request.nextUrl.searchParams);
    // const limit = request.nextUrl.searchParams?.limit;

    const result = await tasks.get();
    return Response.json(result, { status: 200 });

    // return new Response("Hello! 200");
    // return Response.json({ text: "Hello!" });
  } catch (error) {
    console.error(error.message);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request) {
  // get task
  try {
    const data = await request.json();
    const task = await tasks.add(data);

    if (task) {
      return Response.json(task, { status: 201 });
    } else {
      return Response.json({ message: "Bad request" }, { status: 400 });
    }
  } catch (error) {
    console.error(error.message);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}
