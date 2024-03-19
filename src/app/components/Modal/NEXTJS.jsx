import Modal from ".";
import TechStack from "../TechStack";

const NEXTJSModal = () => {
  return (
    <div className="flex flex-col items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-nextjs  stroke-gray-500 hover:stroke-gray-500"
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
              <path d="M9 15v-6l7.745 10.65a9 9 0 1 1 2.255 -1.993" />
              <path d="M15 12v-3" />
            </svg>
      <div className='text-center'>
      <h1 className="font-extrabold text-2xl dark:text-white">NEXT.JS</h1>
      <p className='dark:text-white'>NEXT.JS, a React-based framework, empowers developers to build efficient web applications with server-side rendering and simplified deployment.</p>
      <div className="pt-4 flex flex-col items-center">
        <button className="button_blue_gradient"><a href= "https://nextjs.org/">Learn More</a>
         
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
export default NEXTJSModal;
