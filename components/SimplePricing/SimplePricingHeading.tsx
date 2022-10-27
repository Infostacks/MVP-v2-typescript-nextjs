import React from "react";

const SimplePricingHeading = () => {
  return (
    <div className="flex flex-col items-center w-full text-txtColor">
      <div className="text-center">
        <h1 className="fontsize2 fontsize pt-52 p-3">
          Simple Pricing
        </h1>
        <p className="text-2xl">
          The rate you see on the developer profiles is the rate you pay. No
          extra fees. The average rate for a developer is{" "}
          <span className="text-3xl font-bold">$34/hour</span>
        </p>
      </div>
    </div>
  );
};

export default SimplePricingHeading;
