"use client";
import { useState } from "react";
import Button from "../common/Button";
import CommonTextInput from "../common/inputs/CommonTextInput";
import Modal from "../common/modal";
import CloseSvg from "@/app/assets/svgs/CloseSvg";
import { registerUser } from "@/app/services/users.service";

export default function Login({
  isOpen,
  closeModal
}: {
  isOpen: boolean,
  closeModal: () => void
}
) {
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  })
  const handleAddNewUser = async (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()
    const res = await registerUser(formData)
    console.log(">>>>>>>>>res", res)
  }
  return (
    <Modal isOpen={isOpen}>
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-xl font-semibold">
              {
                isLogin ? "Sign in" : "Register"
              }
            </h3>
            <button type="button" onClick={() => closeModal()} className="end-2.5 text-gray-400 bg-transparent hover:bg-blue hover:rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center">
              <CloseSvg />
            </button>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4" onSubmit={(e: any) => handleAddNewUser(e)}>
              {
                !isLogin && <div>
                  <label className="block mb-2 text-sm font-medium ">Name</label>
                  <CommonTextInput
                    type="text"
                    name="text"
                    id="text"
                    required={true}
                    placeholder="Name"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setFormData({ ...formData, "name": e.target.value })
                    }
                  />
                </div>
              }
              <div>
                <label className="block mb-2 text-sm font-medium ">Email</label>
                <CommonTextInput
                  type="email"
                  name="email"
                  id="email"
                  required={true}
                  placeholder="Email"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, "email": e.target.value })
                  }
                />
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium ">Password</label>
                <CommonTextInput
                  type="password"
                  name="password"
                  id="password"
                  required={true}
                  placeholder="Password"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setFormData({ ...formData, "password": e.target.value })
                  }
                />
              </div>
              <Button label={
                isLogin ? "Sign in" : "Register"
              } type="submit" className="w-full bg-blue border-2 border-blue hover:text-blue" />
              <div className="text-sm font-medium text-gray-500 ">
                {
                  isLogin ? "Not registered?" : "Already registered?"
                }
                <span onClick={() => setIsLogin(!isLogin)} className="ml-2 cursor-pointer text-blue-700 hover:underline dark:text-blue-500">
                  {
                    isLogin ? "Create account" : "Login"
                  }
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}