import React from "react";
import Image from "next/image";
import { HiOutlineUser } from "react-icons/hi";
import { motion } from "framer-motion";
import { hiringData } from "../utils/data";

const HiringProcress = () => {
  return (
    <div className="flex flex-col items-center h-auto px-20 py-5 gap-5 w-screen gap-y-16 background-animate">
      <h1 className="fontsize2 fontsize text-slate-400 ">How We Hire?</h1>

      <div className="flex flex-col items-center gap-5">
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
              className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full h-48 w-7/12 "
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
              <div className="w-3/4 ">
                <div className="text-teal-50 font-bold text-2xl mb-2">
                  {hire.heading}
                </div>
                <p className="text-teal-100 font-sans text-lg">{hire.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className=" pb-24 pt-24">
        <div className=" absolute z-10 ml-52 mt-4">
          <Image
            src={
              "https://assets.website-files.com/632a6ffabd6820ec560a3c0c/632a6ffabd682075e50a3e1c_certified-icon.png"
            }
            unoptimized
            width="50"
            height="50"
          />
        </div>
        <div className="shadow-xl shadow-teal-600 bg-teal-600 text-center border-teal-600 border-4  z-0 flex flex-col items-center rounded-full bg-gradient-to-t from-teal-600 to-teal-600 p-2 py-11 px-4 gap-y-2">
          <div>
            <HiOutlineUser className=" w-24 h-24 " />
          </div>
          <div className="font-bold text-xl text-white">Top 1% </div>
          <div className=" w-2/3 font-bold text-xl text-center text-white">
            Micro1 Certified Developer
          </div>
        </div>
      </div>
    </div>
  );
};

export default HiringProcress;
