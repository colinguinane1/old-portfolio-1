"use client"
import Image from "next/image";
import LandingCard from "./components/LandingCard";
import Navbar from "./components/Navbar";
import React from "react";

export default function Home() {
  return (
    <body className='bg-white dark:bg-[#222831]'>
    <Navbar />
    <LandingCard />
    </body>
  );
}

