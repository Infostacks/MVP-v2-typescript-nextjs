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
    <div className="flex flex-col items-center h-auto my-18 max-w-screen-lg gap-36 w-full">
      <div className="w-full flex items-center flex-col justify-evenly h-screen">
        <h1 className="fontsize2 fontsize text-center text-slate-400 pt-32 max-w-4xl">
          Get a Remote Developer Position with Silicon Valley Companies
        </h1>
        <p className="text-2xl text-center text-gray-400">
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
