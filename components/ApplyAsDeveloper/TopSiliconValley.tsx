import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";

const TopSiliconValleyCard = () => {
  return (
    <div className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-col border-gray-700 border-8 items-center justify-evenly h-96 bg-gray-900 rounded-3xl">
      <div className="text-slate-400 fontsize text-4xl max-w-screen-2xl text-center w-3/4">
        Access to top silicon valley companies, certified for life, and income
        stability.
      </div>
      <HireTopDeveloper />
    </div>
  );
};

export default TopSiliconValleyCard;
