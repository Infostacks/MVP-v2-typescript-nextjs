import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";
import TopDevelopers from "../TopDevelopers/TopDevelopers";
import TrustedBy from "../TrustedBy/TrustedBy";
import FaQs from "../FaQs/FaQs";
import HowItWorksCards from "./HowItWorksCards";
import HowItWorksCounter from "./HowItWorksCounter";

const HowItWorks = () => {
  return (
    <div className="flex flex-col my-20 items-center w-full max-w-screen-2xl gap-36">
      <div className="text-center ">
        <h1 className="fontsize2 fontsize text-slate-400 pt-52 p-3">
          How it works
        </h1>
        <p className="text-2xl text-gray-400 max-w-3xl">
          Hiring through micro1 is very simple. 4 steps and you'll have a top 1%
          software developer fully onboarded in your team.
        </p>
        <p className="text-2xl fontsize text-slate-400 pt-20 underline underline-offset-8 decoration-gray-500	">
          This is done in 9 days on average.
        </p>
      </div>

      <HowItWorksCards />
      <HireTopDeveloper />
      <div className="text-center w-full flex items-center flex-col">
        <h1 className="fontsize2 fontsize text-slate-400">
          Who we are & why we built this
        </h1>
        <p className="text-2xl text-gray-400 self-center w-1/2">
          We believe in a future of fully remote work and a global economy with
          no borders. With today's technology, a location constraint is
          completely unnecessary. We’re building tools to help the future of
          remote work.
        </p>
      </div>
      <HowItWorksCounter />
      <TrustedBy />
      <FaQs />
      <TopDevelopers />
    </div>
  );
};

export default HowItWorks;
