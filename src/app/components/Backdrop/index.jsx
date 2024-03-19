import React from "react";

const Backdrop = ({ children, onClick }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-50"
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Backdrop;