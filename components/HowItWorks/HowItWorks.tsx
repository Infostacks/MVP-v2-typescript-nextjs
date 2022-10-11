import { motion } from "framer-motion";
import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";
import { howitworksCards, NoCounter, TrustedByIcons } from "../utils/data";
import NumberCounter from "../counter/NumberCounter";
import TopDevelopers from "../TopDevelopers/TopDevelopers";
import TrustedBy from "../TrustedBy/TrustedBy";
import FaQs from "../FaQs/FaQs";

const HowItWorks = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-screen-2xl gap-32">
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

      <div className="flex flex-row flex-wrap justify-around items-center w-full gap-5">
        {howitworksCards.map((hire, index) => {
          return (
            <motion.div
              initial={{
                x: index % 2 === 0 ? "-10vw" : "10vw",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  type: "spring",
                  bounce: 0.3,
                },
              }}
              key={index}
              className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-col justify-around bg-gray-900 rounded-xl h-[20rem] w-[20rem]"
            >
              <div className="font-sans text-transparent bg-clip-text pl-5 bg-gradient-to-t from-gray-900 to-gray-600 font-extrabold text-7xl">
                {hire.heading}
              </div>
              <div className=" rounded-full p-8 self-center bg-gray-700">
                <img src={hire.icons} alt="" className="text-white" />
              </div>
              <div className="w-3/4 flex justify-center self-center text-center">
                <p className="text-slate-400 text-xl">{hire.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <HireTopDeveloper />
      <div className="text-center w-full flex items-center flex-col">
        <h1 className="fontsize2 fontsize text-slate-400 pt-52 p-3">
          Who we are & why we built this
        </h1>
        <p className="text-2xl text-gray-400 self-center w-1/2">
          We believe in a future of fully remote work and a global economy with
          no borders. With today's technology, a location constraint is
          completely unnecessary. We’re building tools to help the future of
          remote work.
        </p>
      </div>

      <div className="flex flex-row flex-wrap justify-evenly items-center w-full gap-5">
        {NoCounter.map((counter, index) => {
          return (
            <motion.div
              initial={{
                x: index % 2 === 0 ? "-10vw" : "10vw",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  type: "spring",
                  bounce: 0.3,
                },
              }}
              key={index}
              className="drop-shadow-md shadow-lg items-center shadow-cyan-200 flex flex-col justify-around bg-gray-900 rounded-3xl h-[13rem] w-[19rem]"
            >
              <div className="flex flex-row gap-2 text-4xl text-white fontsize">
                <NumberCounter
                  from={counter.from}
                  to={counter.to}
                  dur={counter.durat}
                />
                +
              </div>
              <div className="text-xl text-white">{counter.textcard}</div>
            </motion.div>
          );
        })}
      </div>
      <TrustedBy />
      <FaQs />
      <TopDevelopers />
    </div>
  );
};

export default HowItWorks;
