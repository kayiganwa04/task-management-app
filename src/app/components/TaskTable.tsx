"use client";

import { getTasks } from "../services/tasks.service";
import { useEffect, useState } from "react";
import TaskCard from "./cards/TaskCard";
import { TaskType } from "../models/task";

const TaskList = (({ query }: { query: string }) => {
  const [tasks, setTasks] = useState<TaskType[]>([])
  const [loading, setLoading] = useState(false)
  const [tasksFilter, setTasksFilter] = useState("")

  const changeFilter = (status: string) => {
    setTasksFilter(status);
  };

  const searchFilter = () => {
    return tasks.filter((e: TaskType) => e.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
  }

  useEffect(() => {
    setLoading(true)
    const fetchTask = async () => {
      const tasks = await getTasks()
      if (tasksFilter === "toDo") {
        setTasks(tasks.filter(
          (task: TaskType) => task.status === "toDo"
        ))
        return
      }
      if (tasksFilter === "onProgress") {
        setTasks(tasks.filter(
          (task: TaskType) => task.status === "onProgress"
        ))
        return
      }
      if (tasksFilter === "completed") {
        setTasks(tasks.filter(
          (task: TaskType) => task.status === "completed"
        ))
        return
      }
      setTasks(tasks)
    }
    fetchTask()
    setLoading(false)
  }, [tasksFilter])
  return (
    <div className="flex flex-col md:px-10 px-2">
      <div className="w-full">
        <div className="mb-4">
          <div className="flex flex-wrap gap-2 sm:gap-6 justify-center text-sm sm:text-base font-medium text-center ">
            <div
              onClick={() => changeFilter("")}
              className={`${tasksFilter === "" && "bg-lightGray"
                } inline-block cursor-pointer px-4 sm:px-14 py-2 rounded focus:outline-none border-b hover:bg-lightGray border-slate-200 `}
            >
              All
            </div>

            <div
              onClick={() => changeFilter("toDo")}
              className={`${tasksFilter === "toDo" && "bg-blue"
                } inline-block cursor-pointer px-4 sm:px-14 py-2 rounded focus:outline-none border-b hover:bg-blue border-slate-200 `}
            >
              To do
            </div>

            <div
              onClick={() => changeFilter("onProgress")}
              className={`${tasksFilter === "onProgress" && "bg-yellow"
                } inline-block cursor-pointer px-4 sm:px-14 py-2 rounded focus:outline-none hover:bg-yellow border-b border-slate-200 `}
            >
              On Progress
            </div>

            <div
              onClick={() => changeFilter("completed")}
              className={`${tasksFilter === "completed" && "bg-green"
                } inline-block cursor-pointer px-4 sm:px-14 py-2 rounded focus:outline-none hover:bg-green border-b border-slate-200 `}
            >
              Completed
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2  py-5">
        {
          loading && <span>Loading...</span>
        }
        {
          searchFilter()?.length === 0 && <span>No tasks added yet.</span>
        }
        {searchFilter()?.map((task: any, index: number) => (
          <TaskCard
            key={index}
            id={task._id}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
});

export default TaskList;