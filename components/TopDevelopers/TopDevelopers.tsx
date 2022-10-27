import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";

function TopDevelopers() {
  return (
    <div className="flex flex-col items-center w-full rounded-3xl text-txtColor">
      <div className="flex flex-col border-primary  border-2 items-center justify-center h-80 rounded-3xl w-full gap-8 z-20">
        <div className="fontsize text-5xl ">
          Hire The Top 1% Developers
        </div>
        <p className="text-2xl">
          Get a fully remote, top 1% developer in your team within 9 days
        </p>
        <div>
          <HireTopDeveloper />
        </div>
      </div>
      <div className="relative border-primary text-center border-t-0 border-2 w-11/12 rounded-b-3xl h-10 z-10"></div>
      <div className="relative border-primary text-center border-2 border-t-0 w-10/12 rounded-b-3xl h-10"></div>
    </div>
  );
}

export default TopDevelopers;
