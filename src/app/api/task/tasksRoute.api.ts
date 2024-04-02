import { TaskType } from "@/app/models/task";
import { connectMongoDB } from "../mongodb/mongodbconnection";
import Task from "@/app/models/taskSchema";

export async function getTasks() {
  try {
    await connectMongoDB();
    const tasks = await Task.find();
    return { result: tasks };
  } catch (error: any) {
    console.error("Get Tasks Error:", error.message);
    return { error: error.message };
  }
}

export async function addTask(task: TaskType) {
  try {
    const { title, description, deadline, status } = task
    await Task.create({ title, description, deadline, status });

    return true
  } catch(error: any) {
    console.error("Error while creating task:", error.message);
    return false;
  }
}

export async function getTaskById(taskId: string) {
  try {
    const task = await Task.findById(taskId);
    
    if (!task) {
      // If the task is not found, return null or handle the error as needed
      return null;
    }

    return task;
  } catch (error: any) {
    console.error("Error while getting task by ID:", error.message);
    return null;
  }
}

export async function editTask(body: any) {
  const {taskId, task} = body
  try {
    await Task.findByIdAndUpdate(taskId, task);

    return true;
  } catch (error: any) {
    console.error("Error while editing task:", error.message);
    return false;
  }
}

export async function deleteTask(taskId: string) {
  try {
    const deletedTask = await Task.findByIdAndDelete(taskId);

    if (!deletedTask) {
      console.error("Task not found");
      return false;
    }

    return true;
  } catch (error: any) {
    console.error("Error while deleting task:", error.message);
    return false;
  }
}