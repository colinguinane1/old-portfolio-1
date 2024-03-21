import scrollToElement from "./Navbar"

const Footer = () => {
  return (
    <footer className="h-[50vh]">
      <div className='dark:bg-[#31363F] bg-black text-white dark:text-gray-500 bottom-0 mt-[00vh] h-full'>
        <div className='text-center mt-10 py-20'>
          <h1>Copyright ©2024 Colin Guinane - All rights reserved</h1>
          <ul className="grid text-gray-500">
          <button onClick={() => scrollToElement("home")} className="font-extrabold text-xl -mt-2 py-3 text-gray-500  border-black ">
            CG
          </button>
          <li className="">
            <a href="#">
              Home
            </a>
          </li>
        </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
