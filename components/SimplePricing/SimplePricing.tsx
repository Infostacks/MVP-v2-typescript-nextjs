import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";
import FaQs from "../FaQs/FaQs";
import TopDevelopers from "../TopDevelopers/TopDevelopers";
import TrustedBy from "../TrustedBy/TrustedBy";

const SimplePricing = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl gap-32">
      <div className="flex flex-col items-center w-full max-w-screen-2xl ">
        <div className="text-center">
          <h1 className="fontsize2 fontsize text-slate-400 pt-52 p-3">
            Simple pricing
          </h1>
          <p className="text-2xl text-gray-400 max-w-3xl">
            The rate you see on the developer profiles is the rate you pay. No
            extra fees. The average rate for a developer is{" "}
            <span className=" text-3xl font-bold">$34/hour</span>
          </p>
        </div>
      </div>
      <HireTopDeveloper />
      <TrustedBy />
      <FaQs />
      <TopDevelopers />
    </div>
  );
};

export default SimplePricing;
