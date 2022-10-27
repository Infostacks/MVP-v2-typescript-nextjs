import React from "react";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi";
import { motion } from "framer-motion";
import { hiringData } from "../utils/data";
import ReadMore from "../ReadMore/ReadMore";

const HiringProcress = () => {
  return (
    <div className="flex flex-col items-center xl:px-20 lg:px-20 md:px-20 px-12 py-5 gap-36 w-full">
      <h1 className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-center text-slate-400 lg:max-w-4xl sm:max-w-sm">
        How We Hire?
      </h1>

      <div className="flex flex-col items-center xl:gap-8 lg:gap-8 md:gap-8 gap-20 w-full">
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
              className="drop-shadow-md shadow-lg shadow-primary border-2 border-primary flex xl:flex-row lg:flex-row flex-col items-center justify-around bg-gray-900 xl:rounded-full lg:rounded-full rounded-xl xl:h-48 lg:h-48 h-auto lg:p-5 xl:p-5 md:p-3 p-8"
            >
              <div className="border-2 rounded-full border-primary">
                <motion.div
                  animate={{ rotateY: 360 }}
                  transition={{
                    duration: 5,
                    delay: 0,
                    yoyo: "Infinity",
                  }}
                  className="xl:p-7 lg:p-7 md:p-7 p-4"
                >
                  {hire.icon}
                </motion.div>
              </div>
              <div className="xl:w-3/4 lg:w-3/4 xl:px-0 lg:px-0 md:px-0 px-2">
                <div className="text-white font-bold xl:text-2xl lg:text-2xl my-2">
                  {hire.heading}
                </div>
                <p className="text-teal-100 font-sans">
                  <ReadMore>{hire.desc}</ReadMore>
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="flex flex-col xl:p-8 lg:p-8 ">
        <div className="absolute xl:ml-52 lg:ml-52 ml-48 xl:pt-4 lg:pt-4 pt-5">
          <Image
            src="https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd682075e50a3e1c_certified-icon.png"
            alt=""
            width="50"
            height="50"
            unoptimized
            className="z-10"
          />
        </div>
        <div className="drop-shadow-md shadow-md border-2 border-primary shadow-primary flex flex-col items-center rounded-full bg-gradient-to-t from-cyan-500 to-blue-500 xl:py-11 xl:px-4 xl:gap-y-2 lg:py-11 lg:px-4 lg:gap-y-2 py-9">
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
