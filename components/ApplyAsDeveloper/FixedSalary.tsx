import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";

const FixedSalary = () => {
  return (
    <div className="items-center px-14 gap-10 flex flex-col">
      <h1 className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-center text-slate-400">
        Fixed Salary
      </h1>
      <p className="text-2xl md:max-w-xl lg:max-w-4xl xl:max-w-3xl text-center text-gray-400">
        We pay you what you believe is fair. Pay is a fixed monthly salary and
        is paid bi-weekly.
      </p>
      <HireTopDeveloper />
    </div>
  );
};

export default FixedSalary;
