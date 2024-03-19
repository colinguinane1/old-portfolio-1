// Modal.jsx
import React from "react";
import Backdrop from "../Backdrop";
import { motion } from "framer-motion";

const Modal = ({ handleClose, content }) => {
  return (
    <div>
    <Backdrop onClick={handleClose} />
      <motion.div
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-md shadow-lg z-[10000] no_transition"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        style={{ opacity: 1 }}
        transition={{duration: 0.1}}
      >
        <h1>{content}</h1>
        <button className='absolute top-1 right-1' onClick={handleClose}>X</button>
      </motion.div>
      </div>
  );
};

export default Modal;