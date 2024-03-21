"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, spring } from "framer-motion";
import Modal from "./Modal";
import TechStack from "./TechStack";

const Navbar = ({ closeModal }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    // Add scroll event listener when component mounts
    window.addEventListener("scroll", handleScroll);

    // Remove event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    closeModal(); 
  };
  function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
    const navbarHeight = document.getElementById("navbar").offsetHeight + 35;
    if (element) {
      const elementTop =
        element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: "smooth",
      });
    }
  }
  return (
    <main className="z-[10]">
      <div
        id="navbar"
        className={`fixed w-screen dark:border-gray-900 bg-transparent backdrop-blur-xl pt-4 ${
          scrolled ? "border-b shadow-md" : ""
        } p-3 z-[1000]`}      >
        <ul className="flex justify-between mr-10 min-w-60 font-extrabold dark:text-white">
          <button onClick={() => scrollToElement("home")} className="font-extrabold text-xl -mt-2 border-2 p-1 text-black hover:text-blue-500 dark:hover:text-blue-500 border-black dark:text-white dark:border-white">
            CG
          </button>
          <li className="hidden lg:block svg_hover border-b-blue-500 hover:border-b">
            <a href="#" onClick={() => scrollToElement("home")}>
              Home
            </a>
          </li>
          <li className="hidden lg:block svg_hover border-b-blue-500 hover:border-b">
            <a href="#" onClick={() => scrollToElement("about")}>
              About
            </a>
          </li>
          <li className="hidden lg:block svg_hover border-b-blue-500 hover:border-b">
            <a href="#" onClick={() => scrollToElement("projects")}>
              Projects
            </a>
          </li>
          <li className="hidden lg:block svg_hover border-b-blue-500 hover:border-b">
            <a href="#" onClick={() => scrollToElement("contact")}>
              Contact
            </a>
          </li>
          <button className="lg:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-baseline-density-medium dark:stroke-white"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#000000"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 20h16" />
              <path d="M4 12h16" />
              <path d="M4 4h16" />
            </svg>
          </button>
        </ul>
      </div>
      <motion.div
        initial={{ marginLeft: "-300vw" }}
        animate={{ marginLeft: showMenu ? 0 : "-300vw" }}
        transition={{ type: spring }}
        className="no_transition"
      >
        <ul
          id="sm_navbar"
          className="fixed text-6xl p-6 h-screen mt-12 w-screen border border-white dark:border-[#31363F] shadow-md font-bold z-10 backdrop-blur-lg dark:backdrop-blur-lg text-black dark:text-white"
        >
          <li className="svg_hover py-4" onClick={toggleMenu}>
            <a href="#" onClick={() => scrollToElement("home")}>
              Home
            </a>
          </li>
          <li className="svg_hover py-4" onClick={toggleMenu}>
            <a href="#" onClick={() => scrollToElement("about")}>
              About
            </a>
          </li>
          <li className="svg_hover py-4" onClick={toggleMenu}>
            <a href="#" onClick={() => scrollToElement("projects")}>
              Projects
            </a>
          </li>
          <li className="svg_hover py-4" onClick={toggleMenu}>
            <a href="#" onClick={() => scrollToElement("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </motion.div>
    </main>
  );
};

export default Navbar;
