import React from "react";

const SimplePricingHeading = () => {
  return (
    <div className="w-full flex items-center flex-col px-14 justify-around ">
      {/* <div className="text-center"> */}
      <h1 className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-center text-slate-400 my-32 lg:max-w-4xl sm:max-w-sm">
        Simple Pricing
      </h1>
      <p className="text-2xl text-center text-gray-400">
        The rate you see on the developer profiles is the rate you pay. No extra
        fees. The average rate for a developer is{" "}
        <span className="text-3xl font-bold">$34/hour</span>
      </p>
    </div>
    //   </div>
  );
};

export default SimplePricingHeading;
