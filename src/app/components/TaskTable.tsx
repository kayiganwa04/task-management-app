"use client";

import TaskNavigationBar from "./navbar/TaskNavigationBar";
import { getTasks } from "../services/mongodb.service";
import { useEffect, useState } from "react";
import TaskCard from "./cards/TaskCard";

const TaskList = (() => {
  const [tasks, setTasks] = useState([])
  useEffect(() => {
    const fetchTask = async () => {
      const tasks = await getTasks()
      setTasks(tasks)
    }
    fetchTask()
  }, [])
  return (
    <>
      <div className="w-full px-28">
        <TaskNavigationBar />
      </div>
      <div className="flex flex-col gap-2 px-4 py-5 max-h-[600px] overflow-auto">
        {tasks.map((task: any, index: number) => (
          <TaskCard
            key={index}
            id={task._id}
            title={task.Title}
            description={task.Description}
            status={task.Status}
          />
        ))}
      </div>
    </>


  );
});

export default TaskList;
