/* eslint-disable react/no-unescaped-entities */
import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";
import TopDevelopers from "../TopDevelopers/TopDevelopers";
import TrustedBy from "../TrustedBy/TrustedBy";
import FaQs from "../FaQs/FaQs";
import HowItWorksCards from "./HowItWorksCards";
import HowItWorksCounter from "./HowItWorksCounter";
import WhoWeAre from "./WhoWeAre";
import HowItWorksHeading from "./HowItWorksHeading";

const HowItWorks = () => {
  return (
    <div className="flex flex-col my-20 items-center w-full max-w-screen-lg gap-36">
      <HowItWorksHeading />
      <HowItWorksCards />
      <HireTopDeveloper />
      <WhoWeAre />
      <HowItWorksCounter />
      <TrustedBy />
      <FaQs />
      <TopDevelopers />
    </div>
  );
};

export default HowItWorks;
