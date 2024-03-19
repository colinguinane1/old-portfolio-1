import Modal from ".";
import TechStack from "../TechStack";

const FramerModal = () => {
  return (
    <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-framer-motion stroke-pink-500 "
              width="100"
              height="100"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#2c3e50"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
              <path d="M20 12l-8 8l-4 -4" />
            </svg>
      <div className="text-center">
        <h1 className="font-extrabold text-2xl dark:text-white">Framer Motion</h1>
        <p className="dark:text-white">
          Framer Motion is a well-maintained animation library for React, it creates smooth, interactive UI Animations (like all the ones on this page!)
        </p>
        <div className="pt-4 flex flex-col items-center">
        <button className="button_blue_gradient"><a href= "https://www.framer.com/motion/">Learn More</a>
         
            <svg
              className="mt-[2px] pl-1"
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-arrow-narrow-right pl-1"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#ffffff"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 12l14 0" />
              <path d="M15 16l4 -4" />
              <path d="M15 8l4 4" />
            </svg>
            
          </button>
        </div>
      </div>
    </div>
  );
};
export default FramerModal;
