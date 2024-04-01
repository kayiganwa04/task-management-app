"use client";

import TaskNavigationBar from "./navbar/TaskNavigationBar";
import { getTasks } from "../services/mongodb.service";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import TaskCard from "./cards/TaskCard";
import LoadingModal from "./Loading";
import { Task } from "../models/task";

const TaskList = (() => {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(false)
  const [tasksFilter, setTasksFilter] = useState("")

  const changeFilter = (status: string) => {
    setTasksFilter(status);
  };

  useEffect(() => {
    setLoading(true)
    const fetchTask = async () => {
      const tasks = await getTasks()
      if (tasksFilter === "toDo") {
        setTasks(tasks.filter(
          (task: Task) => task.Status === "toDo"
        ))
        return
      }
      if (tasksFilter === "onProgress") {
        setTasks(tasks.filter(
          (task: Task) => task.Status === "onProgress"
        ))
        return
      }
      if (tasksFilter === "completed") {
        setTasks(tasks.filter(
          (task: Task) => task.Status === "completed"
        ))
        return
      }
      setTasks(tasks)
    }
    fetchTask()
    setLoading(false)
  }, [tasksFilter])
  return (
    <div className="flex flex-col md:px-28 px-2">
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
      <div className="flex flex-col gap-2  py-5 max-h-[600px] overflow-auto">
        {
          loading && <span>Loading...</span>
        }
        {tasks?.map((task: any, index: number) => (
          <TaskCard
            key={index}
            id={task._id}
            title={task.Title}
            description={task.Description}
            status={task.Status}
          />
        ))}
      </div>
    </div>
  );
});

export default TaskList;
