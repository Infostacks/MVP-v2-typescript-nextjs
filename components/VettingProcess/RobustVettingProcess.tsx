/* eslint-disable react/no-unescaped-entities */
import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";
import HiringProcress from "../HomeComponents/HiringProcress";
import TopDevelopers from "../TopDevelopers/TopDevelopers";

const RobustVettingProcess = () => {
  return (
    <div className="flex flex-col items-center h-auto my-20 max-w-screen-lg gap-36 text-txtColor">
      <div>
        <h1 className="fontsize2 fontsize text-center pt-52">
          Our Robust Vetting Process
        </h1>
        <p className="text-2xl text-center">
          Unlike typical technical interviews, we put lots of emphasis on the
          developer's soft skills. Technical skills are crucial but it's
          critical to realize the importance of attitude, willingness to learn,
          passion, and communication.
        </p>
      </div>
      <HireTopDeveloper />
      <HiringProcress />
      <TopDevelopers />
    </div>
  );
};

export default RobustVettingProcess;
