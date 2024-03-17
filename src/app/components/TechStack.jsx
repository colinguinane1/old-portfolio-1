const TechStack = () => {
  return (
    <main className="flex flex-col items-center mx-5 md:mt-[-400px] -mt-[200px] lg:-mt-[400px]">
    <div className="w-full max-w-[64rem] ">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 dark:bg-[#31363F] bg-white dark:border-[#31363F] border-gray shadow-md p-3 rounded-md">
          {/*HTML ICON CONTAINER*/}
          <div className="ts_css hover:shadow-orange-500 group">
            <h1 className="ts_tooltip text-orange-500">HTML5</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-html5 dark:stroke-white hover:stroke-orange-500 dark:hover:stroke-orange-500"
              width="44"
              height="44"
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
          </div>

          {/*CSS ICON */}
          <div className="ts_css hover:shadow-blue-600 group">
          <h1 className="ts_tooltip text-blue-600">CSS</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-css3 hover:stroke-blue-600 dark:stroke-white dark:hover:stroke-blue-600 "
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
              <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5" />
            </svg>
          </div>

          {/*JS ICON */}
          <div className="ts_css hover:shadow-yellow-300 group">
          <h1 className="ts_tooltip dark:text-yellow-300 text-yellow-600">JavaScript</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-javascript dark:stroke-white hover:stroke-yellow-300 dark:hover:stroke-yellow-300"
              className=""
              width="44"
              height="44"
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
          </div>

          {/*NEXTJS ICON */}
          <div className="ts_css hover:shadow-gray-500 group ">
          <h1 className="ts_tooltip text-gray-500">Next.JS</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-nextjs dark:stroke-white dark:hover:stroke-gray-500 hover:stroke-gray-500"
              width="44"
              height="44"
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
          </div>

          {/*REACT ICON */}
          <div className="ts_css hover:shadow-blue-600 group ">
          <h1 className="ts_tooltip text-blue-600">React</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-react dark:stroke-white dark:hover:stroke-blue-600 hover:stroke-blue-600"
              className="dark:stroke-white dark:hover:stroke-blue-600 hover:stroke-blue-600"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102" />
              <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102" />
              <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2" />
              <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2" />
              <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896" />
              <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897" />
              <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z" />
            </svg>
          </div>

          {/*TAILWIND ICON */}
          <div className="ts_css hover:shadow-teal-400 group">
          <h1 className="ts_tooltip text-teal-500">TailwindCSS</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-tailwind dark:stroke-white hover:stroke-teal-400 dark:hover:stroke-teal-400"
              className="dark:stroke-white hover:stroke-teal-400 dark:hover:stroke-teal-400"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="#000000"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M11.667 6c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 2 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968zm-4 6.5c-2.49 0 -4.044 1.222 -4.667 3.667c.933 -1.223 2.023 -1.68 3.267 -1.375c.71 .174 1.217 .68 1.778 1.24c.916 .912 1.975 1.968 4.288 1.968c2.49 0 4.044 -1.222 4.667 -3.667c-.933 1.223 -2.023 1.68 -3.267 1.375c-.71 -.174 -1.217 -.68 -1.778 -1.24c-.916 -.912 -1.975 -1.968 -4.288 -1.968z" />
            </svg>
          </div>

          {/*FRAMER MOTION ICON */}
          <div className="ts_css hover:shadow-pink-500 group">
          <h1 className="ts_tooltip text-pink-500">Framer Motion</h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-brand-framer-motion dark:stroke-white dark:hover:stroke-pink-500 stroke-black hover:stroke-pink-500 "
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
              <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
              <path d="M20 12l-8 8l-4 -4" />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default TechStack;
