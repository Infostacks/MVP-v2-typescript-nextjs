import { motion } from "framer-motion";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { DevelopersBio } from "../utils/data";
import Image from "next/image";

const DevelopersCards = () => {
  return (
    <div className="flex flex-row flex-wrap justify-around items-center w-full">
      {DevelopersBio.map((hire, index) => {
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
            className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-col justify-evenly bg-gray-900 rounded-xl h-[20rem] w-[15rem]"
          >
            <div className="self-center ">
              <Image
                src={hire.icons}
                alt=""
                width="100"
                height="100"
                unoptimized
                className="text-white w-40 rounded-full"
              />
            </div>
            <div className="w-3/4 flex justify-center self-center text-center">
              <p className="text-white font-bold text-xl mr-1">{hire.name}</p>
              <Image
                src="https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd682075e50a3e1c_certified-icon.png"
                alt=""
                width="25"
                height="25"
                unoptimized
              />
            </div>
            <div className="w-3/4 flex justify-center self-center text-center">
              <p className="text-slate-400 text-xl">{hire.desig}</p>
            </div>
            <div className="rounded-full p-2 self-center bg-gray-700">
              <p className="flex flex-row text-slate-400 text-xl">
                <MdLocationOn className="text-blue-500 mt-1" />
                {hire.country}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DevelopersCards;
