import * as tasks from "@/repo/tasks";

export async function GET(request) {
  // console.log("GET");
  // return new Response("HELLO");
  // console.log(request.nextUrl.searchParams);

  try {
    const result = await tasks.get();
    return Response.json(result, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Internal error" }, { status: 500 });
  }
}

export async function POST(request) {
  // await fetch(`${BASE_URL}/api/tasks`, {
  //   method: "POST",
  //   body: JSON.stringify(props),
  // });

  try {
    const props = await request.json();
    const task = await tasks.add(props);
    return Response.json(task, { status: 201 });
  } catch (error) {
    return Response.json({ message: "Internal error" }, { status: 500 });
  }
}
