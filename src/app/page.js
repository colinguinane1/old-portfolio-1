"use client"
import Image from "next/image";
import LandingCard from "./components/LandingCard";
import Navbar from "./components/Navbar";
import React from "react";
import Index from "./components/Index";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

export default function Home() {
  return (
    <body className="dark:bg-black min-h-fit">
      <>
      <Analytics/>
      <SpeedInsights/>
     <Index></Index>
     </>
    </body>
  );
}

