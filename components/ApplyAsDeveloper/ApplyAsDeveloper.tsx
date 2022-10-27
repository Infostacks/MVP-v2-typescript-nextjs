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
    <div className="flex flex-col items-center h-auto my-20 max-w-screen-lg  gap-36 w-full text-txtColor">
      <div className="w-full max-w-screen-xl">
        <h1 className="fontsize2 fontsize text-center pt-32 ">
          Get a Remote Developer Position with Silicon Valley Companies
        </h1>
        <p className="text-2xl text-center">
          Get the rate you want plus other amazing benefits.
        </p>
      </div>
      <HireTopDeveloper />
      <CgArrowLongDown className="w-16 h-16 animate-bounce" />
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
