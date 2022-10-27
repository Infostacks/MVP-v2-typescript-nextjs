/* eslint-disable react/no-unescaped-entities */
import React from "react";

const HowItWorksHeading = () => {
  return (
    <div className="w-full flex items-center flex-col px-14 justify-around text-center">
      <h1 className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-center text-slate-400 my-32 lg:max-w-4xl sm:max-w-sm">
        How it works
      </h1>
      <p className="text-2xl text-gray-400 ">
        Hiring through micro1 is very simple. 4 steps and you'll have a top 1%
        software developer fully onboarded in your team.
      </p>
      <p className="text-2xl fontsize text-slate-400 pt-20 underline underline-offset-8 decoration-gray-500	">
        This is done in 9 days on average.
      </p>
    </div>
  );
};

export default HowItWorksHeading;
