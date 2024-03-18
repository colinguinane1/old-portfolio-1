"use client";
import LandingCard from "./LandingCard";
import Navbar from "./Navbar";
import { useState } from "react";
import TechStack from "./TechStack";
import Footer from "./Footer";
import Head from "next/head";

function Index() {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`${darkMode ? "dark" : ""}`}>        
            <Head>
                <meta name="apple-mobile-web-app-status-bar-style" content={darkMode ? "#31363F" : "#ffffff"} />
                <meta name="theme-color" content={darkMode ? "#31363F" : "#ffffff"} />
            </Head>
            <Navbar />
            <LandingCard />
            <TechStack />
            <Footer />
            <button onClick={toggleDarkMode} className='fixed scale-75 ml-20 mt-[1px] hover:scale-[.80] active:scale-[.70] top-0 left-0 mb-5 mr-5 bg-[#31363F] dark:bg-white dark:text-black text-white p-3 rounded-full z-[1000]'>
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brightness-up dark:stroke-black" width="30" height="30" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
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
        </div>
    );
}

export default Index;
