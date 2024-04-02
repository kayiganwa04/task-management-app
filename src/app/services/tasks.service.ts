import { TaskType } from "../models/task";

export async function addTask(task: TaskType) {
  try {
    const response = await fetch("/api/task", {
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
      "/api/task"
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