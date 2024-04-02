"use client";
import Modal from "./common/modal";
import Logo from "../assets/packLogo.png";
import Spinner from "./Spinner";
import React from "react";
import Image from "next/image";

export default function LoadingModal({ isOpen }: { isOpen: boolean }) {
  return (
    <Modal isOpen={isOpen}>
      <div className="flex items-center justify-center w-full h-full bg-white fixed top-0 left-0 z-50">
        <Spinner size={20}>
          <Image
            width={60}
            height={60}
            src={Logo}
            className="w-30 flex justify-center items-center"
            alt="email"
          />
        </Spinner>
      </div>
    </Modal>
  );
}
