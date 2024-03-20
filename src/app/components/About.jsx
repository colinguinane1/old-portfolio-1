const About = () => {
  return (
    <main className="flex flex-col items-center mx-5">
      <div className="w-full max-w-[64rem] mt-10 ">
        <div className="dark:bg-[#31363F] bg-white dark:border-[#31363F] border-gray shadow-lg p-3 rounded-md">
          <div className="px-8 pt-4">
            <h1 className="font-extrabold text-4xl text-blue-500">About</h1>
            <p className="max-w-[48rem] dark:text-white pt-4 pb-4">
              As a passionate web developer, I thrive on bringing digital
              visions to life through code. I immerse myself in every project
              with dedication and creativity.<br></br>
              <br></br> My tech stack as shown above is something im constantly
              improving myself on and i make sure to use the latest tech to
              build my websites.
            </p>
            <div className="grid grid-cols-2 grid-rows-2 grid-flow-col pb-4">
              <h1 className="font-extrabold text-blue-500">LOCATED</h1>
              <a
                className="text-black dark:text-white"
                href="https://www.google.com/maps/place/Edmonton,+AB/@53.5250615,-114.1157172,10z/data=!3m1!4b1!4m6!3m5!1s0x53a0224580deff23:0x411fa00c4af6155d!8m2!3d53.5460983!4d-113.4937266!16zL20vMG5saDc?entry=ttu"
              >
                Edmonton, AB, Canada
              </a>
              <h1 className="font-extrabold text-blue-500">MAIL</h1>
              <a
                className="dark:text-white text-black"
                href="mailto:collab.colin@gmail.com"
              >
                collab.colin@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
