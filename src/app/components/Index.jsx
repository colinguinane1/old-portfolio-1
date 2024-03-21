"use client";
import LandingCard from "./LandingCard";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import TechStack from "./TechStack";
import Footer from "./Footer";
import Head from "next/head";
import About from "./About";
import RepoAPI from "./RepoAPI";
import Projects from "./Projects";
import { motion } from "framer-motion";
import { Contact } from "./Contact";

function Index() {
  const [darkMode, setDarkMode] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Head>
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={darkMode ? "#31363F" : "#ffffff"}
        />
        <meta name="theme-color" content={darkMode ? "#31363F" : "#ffffff"} />
      </Head>
      <motion.div
        initial={{ y: -100 }} // Initial position above the viewport
        animate={{ y: 0 }} // Animation to slide in from the top
        transition={{ type: "spring", stiffness: 50 }} // Adjust animation parameters as needed
        className="no_transition"
      >
        <Navbar closeModal={closeModal} />
        <button
          onClick={toggleDarkMode}
          className="fixed scale-75 ml-20 mt-[1px] hover:scale-[.80] active:scale-[.70] top-0 left-0 mb-5 mr-5 bg-[#31363F] dark:bg-white dark:text-black text-white p-3 rounded-full z-[1000]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="icon icon-tabler icon-tabler-brightness-up dark:stroke-black"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="#ffffff"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
            <path d="M12 5l0 -2" />
            <path d="M17 7l1.4 -1.4" />
            <path d="M19 12l2 0" />
            <path d="M17 17l1.4 1.4" />
            <path d="M12 19l0 2" />
            <path d="M7 17l-1.4 1.4" />
            <path d="M6 12l-2 0" />
            <path d="M7 7l-1.4 -1.4" />
          </svg>
        </button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="no_transition"
        transition={{ delay: 0.2 }}
      >
        {" "}
        {/* Animate LandingCard */}
        <LandingCard />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="no_transition"
        transition={{ delay: 0.5 }}
      >
        {" "}
        {/* Animate TechStack */}
        <TechStack />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="no_transition"
        transition={{ delay: 0.8 }}
      >
        <About />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="no_transition"
        transition={{ delay: 1 }}
      >
        <RepoAPI />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="no_transition"
        transition={{ delay: 1.2 }}
      >
        <Projects />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className="no_transition"
        transition={{ delay: 1.4 }}
      >
        <Contact />
      </motion.div>
      <Footer />
    </div>
  );
}

export default Index;
