import React from "react";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi";
import { motion } from "framer-motion";
import { hiringData } from "../utils/data";

const HiringProcress = () => {
  return (
    <div className="flex flex-col items-center max-w-screen-lg px-20 py-5 gap-36 w-full">
      <h1 className="fontsize2 fontsize text-txtColor">How We Hire?</h1>

      <div className="flex flex-col items-center gap-8 w-full">
        {hiringData.map((hire, index) => {
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
              className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full h-48"
            >
              <div className="border rounded-full  bg-gray-800">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{
                    duration: 5,
                    delay: 0,
                    yoyo: "Infinity",
                  }}
                  className="p-7"
                >
                  {hire.icon}
                </motion.div>
              </div>
              <div className="w-3/4">
                <div className="font-bold text-2xl mb-2">
                  {hire.heading}
                </div>
                <p className="font-sans text-lg">{hire.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-col p-8">
        <div className="absolute ml-52 pt-4">
          <Image
            src="https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd682075e50a3e1c_certified-icon.png"
            alt=""
            width="50"
            height="50"
            unoptimized
            className="z-10"
          />
        </div>
        <div className="drop-shadow-md shadow-md shadow-cyan-400 z-0 flex flex-col items-center rounded-full bg-gradient-to-t from-cyan-500 to-blue-500 p-2 py-11 px-4 gap-y-2 ">
          <div>
            <HiOutlineUser className="w-24 h-24" />
          </div>
          <div className="font-bold text-xl">Top 1% </div>
          <div className="w-2/3 font-bold text-xl text-center">
            Micro1 Certified Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringProcress;
