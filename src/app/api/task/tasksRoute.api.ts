import { TaskType } from "@/app/models/task";
import { connectMongoDB } from "../mongodb/mongodbconnection";
import Task from "@/app/models/taskSchema";

export async function getTasks() {
  try {
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
    await connectMongoDB();
    await Task.create({ title, description, deadline, status });

    return true
  } catch(error: any) {
    console.error("Error while creating task:", error.message);
    return false;
  }
}