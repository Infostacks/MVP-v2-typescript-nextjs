import { motion } from "framer-motion";
import React from "react";
import { howitworksCards } from "../utils/data";

const HowItWorksCards = () => {
  return (
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
  );
};

export default HowItWorksCards;
