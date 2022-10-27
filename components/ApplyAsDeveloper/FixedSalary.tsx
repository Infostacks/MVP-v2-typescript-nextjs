import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";

const FixedSalary = () => {
  return (
    <div className="items-center gap-10 flex flex-col">
      <h1 className="fontsize2 fontsize text-center text-txtColor">
        Fixed Salary
      </h1>
      <p className="text-2xl text-center text-txtColor">
        We pay you what you believe is fair. Pay is a fixed monthly salary and
        is paid bi-weekly.
      </p>
      <HireTopDeveloper />
    </div>
  );
};

export default FixedSalary;
