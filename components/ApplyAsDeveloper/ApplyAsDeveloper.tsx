import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";
import { CgArrowLongDown } from "react-icons/cg";
import TrustedBy from "../TrustedBy/TrustedBy";
import FixedSalary from "./FixedSalary";
import SliderIcons from "./SliderIcons";
import DevelopersCards from "./DevelopersCards";
import FaQs from "../FaQs/FaQs";
import TopDevelopers from "../TopDevelopers/TopDevelopers";
import TopSiliconValleyCard from "./TopSiliconValley";

const ApplyAsDeveloper = () => {
  return (
    <div className="flex flex-col items-center h-auto my-18 text-txtColor max-w-screen-lg gap-36 w-full">
      <div className="w-full flex items-center flex-col justify-evenly h-screen px-14">
        <h1 className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-center text-txtColor pt-32 lg:max-w-4xl sm:max-w-sm">
          Get a Remote Developer Position with Silicon Valley Companies
        </h1>
        <p className="text-2xl max-w-md text-center text-txtColor">
          Get the rate you want plus other amazing benefits.
        </p>
        <HireTopDeveloper />
        <CgArrowLongDown className="w-16 h-16 text-white animate-bounce" />
      </div>

      <DevelopersCards />
      <TrustedBy />
      <TopSiliconValleyCard />
      <SliderIcons />
      <FixedSalary />
      <FaQs />
      <TopDevelopers />
    </div>
  );
};

export default ApplyAsDeveloper;
