import Modal from ".";
import TechStack from "../TechStack";

const HTMLModal = () => {


  return (
    <div className="flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-brand-html5 stroke-orange-500 "
        width="100"
        height="100"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#000000"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
        <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
      </svg>
      <div className='text-center'>
      <h1 className="font-extrabold text-2xl dark:text-white">HTML</h1>
      <p className='dark:text-white'>HTML is at the heart and soul of every website. It was the first thing i learned when i started my web development journey!</p>
      </div>
    </div>
  );
};
export default HTMLModal;
