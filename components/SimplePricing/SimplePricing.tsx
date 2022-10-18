import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";
import FaQs from "../FaQs/FaQs";
import TopDevelopers from "../TopDevelopers/TopDevelopers";
import TrustedBy from "../TrustedBy/TrustedBy";
import SimplePricingHeading from "./SimplePricingHeading";

const SimplePricing = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-lg my-20 gap-36">
      <SimplePricingHeading />
      <HireTopDeveloper />
      <TrustedBy />
      <FaQs />
      <TopDevelopers />
    </div>
  );
};

export default SimplePricing;
