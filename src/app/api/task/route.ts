import {getTasks, addTask} from "./tasksRoute.api"

export async function GET(request: Request) {
  try {
    const results: any = await getTasks();
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    if (request.headers.get("Content-Type") !== "application/json") {
      throw new Error("Invalid Content-Type");
    }
    const body = await request.json();

    const response = await addTask(body);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error("Error while adding task", error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
