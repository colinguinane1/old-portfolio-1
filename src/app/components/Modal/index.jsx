// Modal.jsx
import React from "react";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";
import HTMLModal from "./HTML";

const Modal = ({ handleClose, content }) => {
  return (
    <div className="fixed top-[10rem] md:top-[22rem] flex flex-col items-center max-w-[20rem]">
      <Backdrop onClick={handleClose} />
      <motion.div
        className="transform bg-white p-6 rounded-md dark:bg-[#31363F] shadow-lg z-[10000] no_transition"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        transition={{ duration: 0.3 }}
      >
        <h1>{content}</h1>
        <button className="absolute top-1 right-1" onClick={handleClose}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-up-right stroke-black dark:stroke-white hover:stroke-blue-500 dark:hover:stroke-blue-500"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M17 7l-10 10" />
              <path d="M8 7l9 0l0 9" />
            </svg>
          </div>
        </button>
      </motion.div>
    </div>
  );
};

export default Modal;
