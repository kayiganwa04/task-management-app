"use client";

import Button from "./components/common/Button";
import AddTask from "./components/AddTask/AddTask";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskTable";
import { getTasks } from "./services/mongodb.service";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchTask = async () => {
      const tasks = await getTasks()
    }
    fetchTask()
  }, [])
  return (
    <div className="h-screen bg-white text-black">
      <div className="flex flex-col items-center justify-center px-8">
        <h1 className="text-4xl font-black text-center pt-6 pb-4 sm:pb-10">
          Pack Task Management
        </h1>
        <Button label="Add a new Task" onClick={() => setIsOpen(true)} className="bg-orange border-2 border-orange hover:text-orange" />
      </div>
      <AddTask isOpen={isOpen} closeModal={() => setIsOpen(false)} />
      <div className="flex justify-center item-center text-center mt-5">
        <TaskList />
      </div>
    </div>
  );
};

