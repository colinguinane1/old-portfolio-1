import React from "react";

// const ProjectCard = () => {
//   return (
//     <div className="border border-[#2a2e36] shadow-lg w-[15rem] p-4 rounded-lg m-4 flex flex-col justify-between">
//       <div>
//       </div>
//       <div className="flex justify-between mt-auto">
//         <button className="button_blue_gradient">Demo</button>
//         <button className="button_blue_gradient">Code</button>
//       </div>
//     </div>
//   );
// };

const Projects = () => {
  return (
    <main className="flex flex-col items-center mx-5">
      <div id="projects" className="w-full max-w-[64rem] mt-10 ">
        <div className="dark:bg-[#31363F] bg-white dark:border-[#31363F] border-gray shadow-lg p-3 rounded-md">
          <div className="px-5 py-3 ">
            <h1 className="font-extrabold text-blue-500 text-3xl">Projects</h1>
            <div className="flex flex-wrap justify-center py-20">
              {/* {[...Array(3)].map((_, index) => (
                <ProjectCard key={index} />
              ))} */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-backhoe stroke-yellow-500"
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
                <path d="M4 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M13 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M13 19l-9 0" />
                <path d="M4 15l9 0" />
                <path d="M8 12v-5h2a3 3 0 0 1 3 3v5" />
                <path d="M5 15v-2a1 1 0 0 1 1 -1h7" />
                <path d="M21.12 9.88l-3.12 -4.88l-5 5" />
                <path d="M21.12 9.88a3 3 0 0 1 -2.12 5.12a3 3 0 0 1 -2.12 -.88l4.24 -4.24z" />
              </svg>
              <h1 className="dark:text-white font-bold px-2 mt-2">
                Under Construction
              </h1>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Projects;
