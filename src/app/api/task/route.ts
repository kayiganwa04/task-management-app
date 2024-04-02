import {getTasks, addTask, editTask, getTaskById, deleteTask} from "./tasksRoute.api"

export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const params = Object.fromEntries(url.searchParams.entries());
    const { id } = params;

    if(!id) {
      const results: any = await getTasks();
      return new Response(JSON.stringify(results), { status: 200 });
    }

    const results: any = await getTaskById(id);
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

export async function PUT(request: Request) {
  try {
    if (request.headers.get("Content-Type") !== "application/json") {
      throw new Error("Invalid Content-Type");
    }
    const body = await request.json();

    const response = await editTask(body);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error("Error while editing task", error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    if (request.headers.get("Content-Type") !== "application/json") {
      throw new Error("Invalid Content-Type");
    }
    const taskId = await request.json();
    const response = await deleteTask(taskId);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error("Error while editing task", error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
