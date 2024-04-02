"use client";

import Button from "./components/common/Button";
import AddTask from "./components/AddTask/AddTask";
import { useState, useEffect } from "react";
import TaskList from "./components/TaskTable";
import Authenticate from "./components/Authenticate/Authenticate";
import CommonTextInput from "./components/common/inputs/CommonTextInput";

export default function Home() {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
  const [isLoding, setIsLoading] = useState<boolean>(true)
  const [query, setQuery] = useState<string>('')

  const logoutUser = () => {
    localStorage.removeItem("token")
    window.location.reload()
  }
  useEffect(() => {
    const token = localStorage.getItem("token")
    if (token) {
      setIsAuthenticated(true)
    }
    setIsLoading(false)
  }, [])

  if (isLoding) return <></>
  
  return (
    <div className="max-w-4xl min-h-screen mx-auto bg-white text-black">
      <Authenticate isOpen={!isAuthenticated} closeModal={() => setIsAuthenticated(true)} />
      {isAuthenticated && <div className="flex flex-col items-center justify-center px-8">
        <h1 className="text-4xl font-black text-center pt-6 pb-4 sm:pb-10">
          Task Management App
        </h1>
        <Button label="Logout" onClick={() => logoutUser()} className="bg-blue border-2 border-blue hover:text-blue py-1 mb-2" />
        <Button label="Add a new Task" onClick={() => setIsOpen(true)} className="bg-orange border-2 border-orange hover:text-orange" />
        <div className="flex w-30 ml-auto justify-end items-end mt-4 text-end">
          <div className="flex flex-col md:px-10 px-2">
            <CommonTextInput
              type="text"
              name="Search"
              id="search"
              required={true}
              placeholder="Search"
              value={query}
              onChange={(e: any) => setQuery(e.target.value)}
            />
          </div>
        </div>
      </div>}
      {isAuthenticated && <><AddTask isOpen={isOpen} closeModal={() => setIsOpen(false)} taskId={""} />
        <div className="flex justify-center item-center text-center mt-5">
          <TaskList query={query} />
        </div></>}
    </div>
  );
};

