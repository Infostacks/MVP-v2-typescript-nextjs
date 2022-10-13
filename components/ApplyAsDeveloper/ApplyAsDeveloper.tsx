import React from "react";
import HireTopDeveloper from "../Buttons/HireTopDeveloper";
import { CgArrowLongDown } from "react-icons/cg";
import { motion } from "framer-motion";
import { DevelopersBio, IconsSlider } from "../utils/data";
import { MdLocationOn } from "react-icons/md";
import Image from "next/image";
import TrustedBy from "../TrustedBy/TrustedBy";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

const ApplyAsDeveloper = () => {
  return (
    <div className="flex flex-col items-center h-auto my-20 max-w-screen-2xl gap-36 w-full">
      <div className="w-full max-w-screen-xl">
        <h1 className="fontsize2 fontsize text-center text-slate-400 pt-32 ">
          Get a Remote Developer Position with Silicon Valley Companies
        </h1>
        <p className="text-2xl w-7/6 text-center text-gray-400">
          Get the rate you want plus other amazing benefits.
        </p>
      </div>
      <HireTopDeveloper />
      <CgArrowLongDown className="w-16 h-16 text-white animate-bounce " />
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
                <img
                  src={hire.icons}
                  alt=""
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
      <TrustedBy />
      <div className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-col border-gray-700 border-8 items-center justify-evenly h-96 w-3/4 bg-gray-900 rounded-3xl ">
        <div className="text-slate-400 fontsize text-4xl max-w-screen-2xl text-center w-3/4">
          Access to top silicon valley companies, certified for life, and income
          stability.
        </div>

        <HireTopDeveloper />
      </div>
      <div className="flex flex-col items-center">
        <p className="text-slate-400 text-2xl tracking-widest font-semibold">
          TECHNOLOGIES OUR DEVELOPERS KNOW
        </p>
        <div className="flex flex-row flex-wrap justify-around items-center w-full">
          <div className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full max-w-screen-lg h-36 px-10">
            <Swiper
              spaceBetween={30}
              slidesPerView={7}
              loop={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper w-full"
            >
              {IconsSlider.map((hire, index) => {
                return (
                  <SwiperSlide key={index}>
                    <Image
                      src={hire.icon}
                      alt=""
                      width="75"
                      height="75"
                      unoptimized
                      className="rounded-full"
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyAsDeveloper;
