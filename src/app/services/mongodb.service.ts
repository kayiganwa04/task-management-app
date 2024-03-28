import { Task } from "../models/task";

export async function addTask(task: Task) {
  try {
    const response = await fetch("/api/mongodb", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const res = await response.json();
    if (res === false) {
      return false;
    }
    return res;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getTasks() {
  try {
    const response = await fetch(
      "/api/mongodb"
    );

    const json = await response.json();

    if (json.error) {
      console.error(json.error);
      return undefined;
    }
    return json.result
  } catch (error) {
    console.error("Error retrieving tasks", error);
    return undefined;
  }
}