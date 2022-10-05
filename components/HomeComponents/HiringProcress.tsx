import React from "react";
import Image from "next/image";
import { VscSettingsGear } from "react-icons/vsc";
import { TbHeartRateMonitor } from "react-icons/tb";
import { BiMessageAlt } from "react-icons/bi";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsCalendar4Week } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";

const HiringProcress = () => {
  return (
    <div
      className="
      flex 
      flex-col 
      items-center 
      h-auto 
      px-20 
      py-5 
      gap-5 
      w-screen 
      bg-gradient-to-r
    from-gray-900
    via-gray-800
    to-gray-900
      bg-opacity-7 
      gap-y-16
      background-animate
      "
    >
      <h1 className="fontsize2 fontsize text-white pt-16">How We Hire?</h1>

      <div
        className=" 
      drop-shadow-md 
      shadow-lg
      shadow-cyan-200 
      flex 
      flex-row
      items-center
      justify-around
      bg-gray-900 
      rounded-full 
      h-48 
      w-7/12 "
      >
        <div
          className="
        border rounded-full  
        bg-gray-800"
        >
          <div
            className="
          w-1/4 
          p-7"
          >
            <VscSettingsGear
              className=" 
            w-16 h-16 
            text-white"
            />
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="text-white font-bold text-2xl mb-2">Loom Video</div>
          <p className="text-slate-400 text-xl">
            First, the developers apply online by attaching a 3 minute loom
            video of themselves going through their resume. Here we can quickly
            do most of the filtering by assessing experience, resume, and
            communication.
          </p>
        </div>
      </div>
      <div className=" drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full h-48 w-7/12 ">
        <div className="border rounded-full  bg-gray-800">
          <div className="w-1/4 p-7">
            <TbHeartRateMonitor className=" w-16 h-16 text-white" />
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="text-white font-bold text-2xl mb-2">Online Test</div>
          <p className="text-slate-400 text-xl">
            If the candidate passes the 1st step, they then have to take 2
            quizzes personalized to their skills.
          </p>
        </div>
      </div>
      <div className=" drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full h-48 w-7/12 ">
        <div className="border rounded-full  bg-gray-800">
          <div className="w-1/4 p-7">
            <BiMessageAlt className=" w-16 h-16 text-white" />
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="text-white font-bold text-2xl mb-2">
            Casual Interview
          </div>
          <p className="text-slate-400 text-xl">
            We then conduct a casual interview discussing their experience,
            assessing their soft skills, and seeing if they're passionate about
            what they do.
          </p>
        </div>
      </div>
      <div className=" drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full h-48 w-7/12 ">
        <div className="border rounded-full  bg-gray-800 ">
          <div className="w-1/4 p-7">
            <HiOutlineDesktopComputer className=" w-16 h-16 text-white " />
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="text-white font-bold text-2xl mb-2">
            Technical Interview
          </div>
          <p className="text-slate-400 text-xl">
            Technical Interview After they pass the casual interview, we conduct
            1-2 rounds of technical interviews.
          </p>
        </div>
      </div>
      <div className=" drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full h-48 w-7/12 ">
        <div className="border rounded-full  bg-gray-800">
          <div className="w-1/4 p-7">
            <BsCalendar4Week className=" w-16 h-16 text-white" />
          </div>
        </div>
        <div className="w-3/4 ">
          <div className="text-white font-bold text-2xl mb-2">Test Phase</div>
          <p className="text-slate-400 text-xl">
            After all the steps above are passed, the developer joins your team
            for 1 week at no cost. This, without doubt, is the best possible way
            to truly asses ones skills, communication, team work, and passion.
            We pay for this so that you can confidently hire the best remote
            developers for your team.
          </p>
        </div>
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
        <div className="drop-shadow-md shadow-md shadow-cyan-400  z-0 flex flex-col items-center  rounded-full bg-gradient-to-t from-cyan-500 to-blue-500 p-2 py-11 px-4 gap-y-2">
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
