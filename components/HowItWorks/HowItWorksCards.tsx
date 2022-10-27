import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { howitworksCards } from "../utils/data";

const HowItWorksCards = () => {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 place-items-center lg:gap-10 xl:gap-36 px-14 gap-10 max-w-screen-lg w-full xl:px-0 lg:px-10 text-txtColor">
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
            className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-col justify-evenly bg-gray-900 rounded-xl h-[25rem] w-full"
          >
            <div className="font-sans text-transparent bg-clip-text pl-5 bg-gradient-to-t from-gray-900 to-gray-600 font-extrabold text-7xl">
              {hire.heading}
            </div>
            <div className=" rounded-full xl:p-8 lg:p-8 p-6 self-center bg-gray-700">
              <Image
                alt=""
                width="100"
                height="100"
                unoptimized
                src={hire.icons}
              />
            </div>
            <div className="w-3/4 flex justify-center self-center text-center">
              <p className="text-xl">{hire.desc}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HowItWorksCards;
