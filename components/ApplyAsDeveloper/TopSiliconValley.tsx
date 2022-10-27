import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";

const TopSiliconValleyCard = () => {
  return (
    <div className="drop-shadow-md shadow-lg w-2/3 md:w-3/4 xl:w-full lg:w-5/6 px-10 shadow-cyan-200 flex flex-col border-gray-700 border-8 max-w-screen-lg items-center justify-evenly h-96 bg-gray-900 rounded-3xl">
      <div className="text-slate-400 w-full font-bold md:text-3xl lg:text-4xl xl:text-4xl text-xl max-w-screen-2xl text-center ">
        Access to top silicon valley companies, certified for life, and income
        stability.
      </div>
      <HireTopDeveloper />
    </div>
  );
};

export default TopSiliconValleyCard;
