"use client";

import { useState } from "react";
import EditSvg from "@/app/assets/svgs/EditSvg";
import DeleteSvg from "@/app/assets/svgs/DeleteSvg";
import AddTask from "../AddTask/AddTask";
import ConfirmModal from "../common/confirmModal/ConfirmModal";
import { deleteTask } from "@/app/services/tasks.service";

export default function TaskCard({
  key,
  id,
  title,
  description,
  status
}: {
  key: number,
  id: string,
  title: string,
  description: string,
  status: string
}) {
  const [taskId, setTaskId] = useState("")
  const [isOpen, setIsOpen] = useState(false)
  const [openDelete, setOpenDelete] = useState(false)

  const handleEditTask = async (id: string) => {
    setTaskId(id)
    setIsOpen(true)
  }

  const handleDeleteTask = async () => {
    const res = await deleteTask(taskId)
    if (res !== true) {
      // here will add a toast
      return
    }
    window.location.reload();
  }

  const cancelDeleteTask = async () => {
    setTaskId("")
    setOpenDelete(false)
  }
  return (
    <>
      <ConfirmModal isOpen={openDelete} confirmRequest={() => handleDeleteTask()} cancelRequest={() => cancelDeleteTask()} />
      <AddTask isOpen={isOpen} closeModal={() => setIsOpen(false)} taskId={taskId} />
      <div key={key} className="block w-full max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 ">
        <div className="flex w-full justify-between">
          <div className="w-[45%] justify-start items-start">
            <span className="text-base w-full font-bold tracking-tight flex text-start break-words break-all">{title}</span>
          </div>
          <div className="w-[45%] h-6 justify-end flex ">
            {status === "toDo" && <span className="text-xs flex justify-center items-center text-bold font-bold px-4 bg-blue rounded-lg">To do</span>}
            {status === "onProgress" && <span className="text-xs flex justify-center items-center text-bold font-bold px-4 bg-yellow rounded-lg">On progress</span>}
            {status === "completed" && <span className="text-xs flex justify-center items-center text-bold font-bold px-4 bg-green rounded-lg">Completed</span>}
          </div>
        </div>
        <div className="flex justify-start text-start w-full">
          <p className="font-normal w-full tracking-tight flex text-start break-words break-all">{description}</p>
        </div>
        <div className="flex justify-end">
          <div className="mr-4">
            <button type="button" onClick={() => handleEditTask(id)} className="bg-blue rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-toggle="crud-modal">
              <EditSvg />
            </button>
          </div>
          <div>
            <button type="button" onClick={() => { setTaskId(id), setOpenDelete(true) }} className="bg-[#FF6347] rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center " data-modal-toggle="crud-modal">
              <DeleteSvg />
            </button>
          </div>
        </div>
      </div>
    </>

  );
};

