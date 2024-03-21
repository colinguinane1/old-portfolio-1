import { useState, useEffect } from "react";
import { motion, spring } from "framer-motion";

const RepoAPI = () => {
  const [lastUpdated, setLastUpdated] = useState(null);
  const [modifiedDate, setModifiedDate] = useState(null);
  const username = "colinguinane1";
  const repo = "PortfolioNEXT";
  
  useEffect(( modifiedDate ) => {
    const fetchRepo = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repo}`
        );
        console.log(response.status); // Log the response status
        if (response.ok) {
          const data = await response.json();
          console.log(data.pushed_at)
          const date = (data.pushed_at);    
          const stringDate = JSON.stringify(date)
          const removeCharachters = /[TZ"]/g;
          
          const modifiedDate = stringDate.replace(removeCharachters, "  ")
          
          console.log(modifiedDate)
          const dateObj = new Date(String, data.pushed_at);
          console.log(dateObj.getDay)
          setModifiedDate(modifiedDate);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching GitHub Repo");
      }
    };

    fetchRepo();
  }, [username, repo]);

  return (
    <main className="flex flex-col items-center mx-5">
      <div className="w-full max-w-[64rem] mt-10">
        <div className="dark:bg-[#31363F] bg-white dark:border-[#31363F] border-gray shadow-lg p-3 rounded-md">
          <div className="px-8 pt-4"></div>
          <h1 className="font-extrabold text-3xl text-blue-500 px-6">
            Constantly working...
          </h1>
          <div className="px-5 py-5 text-[10px] md:text-base z-0">
            <motion.div
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.995 }}
              transition={{ duration: 0.2, type: spring }}
              onClick={() =>
                (window.location.href =
                  "https://github.com/colinguinane1/PortfolioNEXT")
              }
              className="border rounded-full px-6 py-2 flex bg-gray-200 dark:bg-white no_transition cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-github-filled dark:stroke-white scale-75 md:scale-100 mt-[-2px] ml-[-10px] md:mt-[9px] z-[100]"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path
                  d="M5.315 2.1c.791 -.113 1.9 .145 3.333 .966l.272 .161l.16 .1l.397 -.083a13.3 13.3 0 0 1 4.59 -.08l.456 .08l.396 .083l.161 -.1c1.385 -.84 2.487 -1.17 3.322 -1.148l.164 .008l.147 .017l.076 .014l.05 .011l.144 .047a1 1 0 0 1 .53 .514a5.2 5.2 0 0 1 .397 2.91l-.047 .267l-.046 .196l.123 .163c.574 .795 .93 1.728 1.03 2.707l.023 .295l.007 .272c0 3.855 -1.659 5.883 -4.644 6.68l-.245 .061l-.132 .029l.014 .161l.008 .157l.004 .365l-.002 .213l-.003 3.834a1 1 0 0 1 -.883 .993l-.117 .007h-6a1 1 0 0 1 -.993 -.883l-.007 -.117v-.734c-1.818 .26 -3.03 -.424 -4.11 -1.878l-.535 -.766c-.28 -.396 -.455 -.579 -.589 -.644l-.048 -.019a1 1 0 0 1 .564 -1.918c.642 .188 1.074 .568 1.57 1.239l.538 .769c.76 1.079 1.36 1.459 2.609 1.191l.001 -.678l-.018 -.168a5.03 5.03 0 0 1 -.021 -.824l.017 -.185l.019 -.12l-.108 -.024c-2.976 -.71 -4.703 -2.573 -4.875 -6.139l-.01 -.31l-.004 -.292a5.6 5.6 0 0 1 .908 -3.051l.152 -.222l.122 -.163l-.045 -.196a5.2 5.2 0 0 1 .145 -2.642l.1 -.282l.106 -.253a1 1 0 0 1 .529 -.514l.144 -.047l.154 -.03z"
                  strokeWidth="0"
                  fill="currentColor"
                />
              </svg>
              <div className="flex flex-col">
                <div className="flex items-center">
                  <h1 className="font-bold">/colinguinane1/PortfolioNEXT</h1>
                  <button className="bg-green-400 rounded-full w-3 h-3 mt-[1px] mx-1 "></button>
                </div>
                  <p className="mt-1">
                    Last Updated:
                    <span className="text-gray-600">{modifiedDate}</span>
                  </p>
              </div>
            </motion.div>
            <h1 className="dark:text-white text-black py-3 text-base">
              This is only here so I had an excuse to use an API.
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RepoAPI;