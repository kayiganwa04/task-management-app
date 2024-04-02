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

export async function editTask(taskId: any, task: TaskType) {
  try {
    const response = await fetch("/api/task", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({taskId, task}),
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

export async function deleteTask(taskId: any) {
  try {
    const response = await fetch("/api/task", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskId),
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
      `/api/task?flag=allTasks`
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

export async function getTaskById(taskId: any) {
  try {
    const response = await fetch(
      `/api/task?flag=oneTask&id=${taskId}`
    );

    const json = await response.json();

    if (json.error) {
      console.error(json.error);
      return undefined;
    }
    return json
  } catch (error) {
    console.error("Error retrieving tasks", error);
    return undefined;
  }
}