import { motion } from "framer-motion";
import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";

function TopDevelopers() {
  return (
    <div className="flex flex-col items-center w-full rounded-3xl">
      <div className="flex flex-col border-gray-700  border-2 items-center justify-center h-80 bg-gray-900 rounded-3xl w-full gap-5 z-20">
        <div className="text-slate-400 fontsize text-5xl ">
          Hire The Top 1% Developers
        </div>
        <p className="text-gray-400 text-2xl">
          Get a fully remote, top 1% developer in your team within 9 days
        </p>
        <HireTopDeveloper />
      </div>
      <div className="relative border-gray-700 text-center border-t-0 border-2 w-11/12 rounded-b-3xl h-10 z-10"></div>
      <div className="relative border-gray-700 text-center border-2 border-t-0 w-10/12 rounded-b-3xl h-10"></div>
    </div>
  );
}

export default TopDevelopers;
