import Modal from ".";
import TechStack from "../TechStack";

const JavaScriptModal = () => {
  return (
    <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-javascript stroke-yellow-500 dark:stroke-yellow-300"
              width="100"
              height="100"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M7.5 8h3v8l-2 -1" />
              <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
            </svg>
      <div className='text-center'>
      <h1 className="font-extrabold text-2xl dark:text-white">JavaScript</h1>
      <p className='dark:text-white'>JavaScript is the programming language of the web, my favorite part of JS is how verasatile it is with the many frameworks that exist (Like NEXT.JS for this project!)</p>
      </div>
    </div>
  );
};
export default JavaScriptModal;
