"use client";

import { useState } from "react";
import Button from "../common/Button";
import Modal from "../common/modal";
import CommonTextInput from "../common/inputs/CommonTextInput";
import CommonTextArea from "../common/inputs/CommonTextAreaInput";
import CommonSelect from "../common/inputs/CommonSelect";
import { TASK_STATUS } from "@/app/models/constants";
import { addTask } from "@/app/services/tasks.service";
import CloseSvg from "@/app/assets/svgs/CloseSvg";

export default function AddTask({
  isOpen,
  closeModal
}: {
  isOpen: boolean,
  closeModal: () => void
}) {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    deadline: "",
    status: ""
  })
  const handleAddNewTask = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true)
    e.preventDefault()
    const response = await addTask(formData)
    if (response !== true) {
      // here will add a toast
      return
    }
    window.location.reload();
  }
  return (
    <Modal isOpen={isOpen}>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow text-black">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-lg font-semibold">
              Create New Task
            </h3>
            <button type="button" onClick={closeModal} className="text-gray-400 bg-transparent hover:bg-blue rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="crud-modal">
              <CloseSvg />
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <form className="p-4 md:p-5" onSubmit={(e: any) => handleAddNewTask(e)}>
            <div className="grid gap-4 mb-4 grid-cols-2">
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium">Title</label>
                <CommonTextInput
                  type="text"
                  name="Title"
                  id="Title"
                  required={true}
                  placeholder="Title"
                  value={formData["title"]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, "title": e.target.value })
                  }
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium">Task Description</label>
                <CommonTextArea
                  id="description"
                  rows={4}
                  required={true}
                  value={formData["description"]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, "description": e.target.value })
                  }
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium">Deadline</label>
                <CommonTextInput
                  type="date"
                  name="deadline"
                  id="deadline"
                  required={true}
                  placeholder="Deadline"
                  value={formData["deadline"]}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, "deadline": e.target.value })
                  }
                />
              </div>
              <div className="col-span-2">
                <label className="block mb-2 text-sm font-medium">Status</label>
                <CommonSelect
                  id="status_selection"
                  data={TASK_STATUS}
                  required={true}
                  value={formData["status"]}
                  onChange={(e) =>
                    setFormData({ ...formData, "status": e.target.value })
                  } />
              </div>
            </div>
            <div className="flex justify-end">
              <Button loading={loading} type="submit" label="Add a new Task" className="bg-blue border-2 border-blue hover:text-blue" />
            </div>
          </form>
        </div>
      </div>
    </Modal>
  )
}

