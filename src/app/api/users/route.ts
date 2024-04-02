import {registerUser, loginUser} from "./usersRoute.api"

export async function POST(request: Request) {
  try {
    if (request.headers.get("Content-Type") !== "application/json") {
      throw new Error("Invalid Content-Type");
    }
    const {user, flag } = await request.json();

    const config: any = {
        register: () => registerUser(user),
        login: () => loginUser(user),
      };

      if (!config[flag]) {
        return new Response(
          JSON.stringify({ message: "No action config for this type" }),
          {
            status: 400,
            headers: { "Content-Type": "application/json" },
          }
        );
      }
  
      const result = await config[flag]();
  
      return new Response(JSON.stringify(result), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
  } catch (error) {
    console.error("Error while adding task", error);
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
