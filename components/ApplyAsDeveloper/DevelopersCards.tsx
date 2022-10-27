import { motion } from "framer-motion";
import React from "react";
import { MdLocationOn } from "react-icons/md";
import { DevelopersBio } from "../utils/data";
import Image from "next/image";

const DevelopersCards = () => {
  return (
    <div className="grid xl:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1 md:grid-cols-1 place-items-center lg:gap-10 xl:gap-36 gap-10 max-w-screen-lg px-1 w-full xl:px-0 lg:px-10">
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
            className="drop-shadow-md shadow-lg border-2 border-primary shadow-primary rounded-xl"
          >
            <div className="xl:p-20 lg:p-20 p-4 flex flex-col justify-center gap-3">
              <div className="self-center ">
                <Image
                  src={hire.icons}
                  alt=""
                  width="270"
                  height="270"
                  unoptimized
                  className="w-40 rounded-full"
                />
              </div>
              <div className="flex justify-center self-center text-center">
                <p className="text-txtColor font-bold xl:text-xl text-xl md:text-base lg:text-xl mr-1">
                  {hire.name}
                </p>
                <Image
                  src="https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd682075e50a3e1c_certified-icon.png"
                  alt=""
                  width="25"
                  height="25"
                  unoptimized
                />
              </div>
              <div className="w-3/4 flex justify-center self-center text-txtColor text-center">
                <p className="text-slate-400 text-xl">{hire.desig}</p>
              </div>
              <div className="rounded-full p-2 self-center bg-secondary">
                <p className="flex flex-row text-xl text-txtColor">
                  <MdLocationOn className="text-primary mt-1" />
                  {hire.country}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default DevelopersCards;
