import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";
import { CgArrowLongDown } from "react-icons/cg";
import TrustedBy from "../TrustedBy/TrustedBy";
import FixedSalary from "./FixedSalary";
import SliderIcons from "./SliderIcons";
import DevelopersCards from "./DevelopersCards";
import FaQs from "../FaQs/FaQs";
import TopDevelopers from "../TopDevelopers/TopDevelopers";

const ApplyAsDeveloper = () => {
  return (
    <div className="flex flex-col items-center h-auto my-20 max-w-screen-2xl gap-36 w-full">
      <div className="w-full max-w-screen-xl">
        <h1 className="fontsize2 fontsize text-center text-slate-400 pt-32 ">
          Get a Remote Developer Position with Silicon Valley Companies
        </h1>
        <p className="text-2xl w-7/6 text-center text-gray-400">
          Get the rate you want plus other amazing benefits.
        </p>
      </div>
      <HireTopDeveloper />
      <CgArrowLongDown className="w-16 h-16 text-white animate-bounce " />
      <DevelopersCards />
      <TrustedBy />
      <div className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-col border-gray-700 border-8 items-center justify-evenly h-96 w-3/4 bg-gray-900 rounded-3xl">
        <div className="text-slate-400 fontsize text-4xl max-w-screen-2xl text-center w-3/4">
          Access to top silicon valley companies, certified for life, and income
          stability.
        </div>
        <HireTopDeveloper />
      </div>
      <SliderIcons />
      <FixedSalary />
      <FaQs />
      <TopDevelopers />
    </div>
  );
};

export default ApplyAsDeveloper;
