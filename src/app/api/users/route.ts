import {registerUser} from "./usersRoute.api"

export async function POST(request: Request) {
  try {
    if (request.headers.get("Content-Type") !== "application/json") {
      throw new Error("Invalid Content-Type");
    }
    const body = await request.json();

    const response = await registerUser(body);

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.error("Error while adding task", error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
