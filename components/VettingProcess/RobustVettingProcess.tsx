import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";
import HiringProcress from "../HomeComponents/HiringProcress";

const RobustVettingProcess = () => {
  return (
    <div
      className="
      flex
      flex-col
      items-center
      h-auto
      my-20
      max-w-screen-lg gap-32
      "
    >
      <div>
        <h1 className="fontsize2 fontsize text-center text-white pt-52">
          Our Robust Vetting Process
        </h1>
        <p className="text-xl w-7/6 text-center text-gray-400">
          Unlike typical technical interviews, we put lots of emphasis on the
          developer's soft skills. Technical skills are crucial but it's
          critical to realize the importance of attitude, willingness to learn,
          passion, and communication.
        </p>
      </div>
      <HireTopDeveloper />
      <HiringProcress />
      <div className="flex flex-col items-center w-full rounded-3xl">
        <div className="flex flex-col border-gray-700  border-2 items-center justify-center h-80 bg-gray-900 rounded-3xl w-full gap-5 z-20">
          <div className="text-white fontsize text-5xl ">
            Hire The Top 1% Developers
          </div>
          <p className="text-slate-400 text-xl">
            Get a fully remote, top 1% developer in your team within 9 days
          </p>
          <HireTopDeveloper />
        </div>
        <div className="relative border-gray-700 text-center border-2 w-11/12 rounded-b-3xl -mb-10 h-10 z-10"></div>
        <div className="relative border-gray-700 text-center border-2 w-10/12 rounded-b-3xl -mb-20 h-20"></div>
      </div>
    </div>
  );
};

export default RobustVettingProcess;
