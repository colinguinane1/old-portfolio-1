import Image from "next/image";
import LandingCard from "./components/LandingCard";
import Navbar from "./components/Navbar";
import React from "react";

export default function Home() {
  return (
    <>
    <Navbar />
    <LandingCard />
    </>
  );
}

