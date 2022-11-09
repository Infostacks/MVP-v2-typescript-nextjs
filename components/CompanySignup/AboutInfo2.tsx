/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { ChangeEvent, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Joi from "joi-browser";
import { requiredSkills, findUS, hourlyRate } from "../utils/data";
import CalendlyEvent from "./CalendlyEvent";
import { useForm } from "react-hook-form";

const AboutInfo2 = () => {
  const [step, setStep] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "all" });

  const onSubmit = (data: any) => console.log(data);

  var items = [];


 

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    throw new Error("Function not implemented.");
  }

  function renderBtn(): React.ReactNode {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="w-3/4 h-3/4 px-6 drop-shadow-md bg-[#508AA8] bg-opacity-70 flex flex-col items-center rounded-3xl justify-center gap-3">
      <h1
        className="py-5 text-3xl font-semibold text-mazeCrayola"
        style={{ fontFamily: "Bebas Neue" }}
      >
        Company Sign up
      </h1>

      <form className="flex flex-col justify-center gap-y-5">
        {formStep === 0 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-txtColor">
                What type of hire do you need? *
              </label>
              <label className="text-md text-txtColor">
                We offer full time (40 hours/week) and part time (20 hours/week)
              </label>

              {/* start  */}
              <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="jobtypeoption"
                    value={formData.jobtypeoption}
                    id="full_time"
                    defaultValue={formData.jobtypeoption}
                    onChange={handleChange}
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="full_time"
                  >
                    <span className="text-lg">Full Time</span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="jobtypeoption"
                    value={formData.jobtypeoption}
                    id="part_time"
                    defaultValue={formData.jobtypeoption}
                    onChange={handleChange}
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="part_time"
                  >
                    <span className="text-lg">Part Time</span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {/* end  */}
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.jobtypeoption : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 1 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-txtColor">
                How many developers are you looking for? *
              </label>
              <label className="text-md text-txtColor">
                You can start with 1 or 10. We have the talent ready!
              </label>

              {/* start  */}
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="developerNeeded"
                    value="UI/UX"
                    id="UI/UX"
                    defaultValue={formData.developerNeeded}
                    onChange={handleChange}
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="UI/UX"
                  >
                    <span className="text-lg">1-2</span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="developerNeeded"
                    value="Frontend"
                    id="Frontend"
                    defaultValue={formData.developerNeeded}
                    onChange={handleChange}
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="Frontend"
                  >
                    <span className="text-lg">2-5</span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="developerNeeded"
                    value="Backend"
                    id="Backend"
                    defaultValue={formData.developerNeeded}
                    onChange={handleChange}
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="Backend"
                  >
                    <span className="text-lg">Backend</span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {/* end  */}
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.developerNeeded : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 2 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-txtColor">
                What’s your name? *
              </label>
              <label className="text-md text-txtColor">Nice to meet you!</label>
              <input
                id="fullname"
                name="fullname"
                placeholder="Your Name"
                type="text"
                defaultValue={formData.fullname}
                onChange={handleChange}
                className="w-full p-4 mr-16 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-txtColor placeholder:text-txtColor border-gray-200 rounded-lg border text-sm"
              />

              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.fullname : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 3 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-txtColor">
                What is your email? *
              </label>
              <label className="text-md text-txtColor">
                We'll need this for later
              </label>
              <input
                id="email"
                name="email"
                placeholder="Your Email"
                type="text"
                defaultValue={formData.email}
                onChange={handleChange}
                className="w-full p-4 mr-16 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-txtColor placeholder:text-txtColor border-gray-200 rounded-lg border text-sm"
              />
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.email : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 4 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-txtColor">
                What’s your phone number? *
              </label>
              <label className="text-md text-txtColor">
                Incase we need to reach you
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Your Phone Number"
                type="text"
                defaultValue={formData.phoneNumber}
                onChange={handleChange}
                className="w-full p-4 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-txtColor placeholder:text-txtColor border-gray-200 rounded-lg border text-sm"
              />
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.phoneNumber : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 5 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-txtColor">
                What type of developers are you looking for? *
              </label>
              <label className="text-md text-txtColor">
                We have all types of developers ready to work!
              </label>

              {/* start  */}
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="developerType"
                    value="UI/UX"
                    id="UI/UX"
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="UI/UX"
                  >
                    <span className="text-lg">UI/UX</span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="developerType"
                    value="Frontend"
                    id="Frontend"
                    defaultValue={formData.developerType}
                    onChange={handleChange}
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="Frontend"
                  >
                    <span className="text-lg">Frontend</span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="developerType"
                    value="Backend"
                    id="Backend"
                    defaultValue={formData.developerType}
                    onChange={handleChange}
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="Backend"
                  >
                    <span className="text-lg">Backend</span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="developerType"
                    value="Full stack"
                    id="Full_stack"
                    defaultValue={formData.developerType}
                    onChange={handleChange}
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="Full_stack"
                  >
                    <span className="text-lg">Full stack</span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="developerType"
                    value="Other"
                    id="Other"
                    defaultValue={formData.developerType}
                    onChange={handleChange}
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="Other"
                  >
                    <span className="text-lg">Other</span>
                  </label>

                  <svg
                    className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              {/* end  */}
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.developerType : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 6 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-md text-txtColor">
                If you don't know, that's okay. Just press next to skip.
              </label>

              {/* start  */}
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {requiredSkills.map((skill, index) => {
                  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
                    throw new Error("Function not implemented.");
                  }

                  return (
                    <div className="relative" key={index}>
                      <input
                        className="hidden group peer"
                        type="radio"
                        name="requiredSkill"
                        value={skill.name}
                        id={skill.name}
                        defaultValue={formData.requiredSkill}
                        onChange={handleChange}
                      />

                      <label
                        className="flex gap-5 items-center center p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                        htmlFor={skill.name}
                      >
                        <Image
                          src={skill.icon}
                          alt=""
                          unoptimized
                          width="40"
                          height="40"
                        />
                        <span className="text-lg">{skill.name}</span>
                      </label>

                      <svg
                        className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
              {/* end  */}
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.requiredSkill : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 7 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold text-txtColor">
                What is the ideal hourly platform range? *
              </label>
              <label className="text-md text-txtColor">
                The average platform of a micro1 developer is $40/hour.
              </label>

              {/* start  */}
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {hourlyRate.map((platform, index) => {
                  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
                    throw new Error("Function not implemented.");
                  }

                  return (
                    <div className="relative" key={index}>
                      <input
                        className="hidden group peer"
                        type="radio"
                        name="hourlyplatform"
                        value={platform.rate}
                        id={platform.rate}
                        defaultValue={formData.hourlyplatform}
                        onChange={handleChange}
                      />

                      <label
                        className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                        htmlFor={platform.rate}
                      >
                        <span className="text-lg">{platform.rate}</span>
                      </label>

                      <svg
                        className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-4 peer-checked:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
              {/* end  */}
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.hourlyplatform : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 8 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-bold text-txtColor">
                Anything else we should know? (optional)
              </label>
              <label className="text-md text-txtColor">
                Feel free to tell us about your company or anything else here
              </label>
              <input
                id="about_company"
                name="about_company"
                placeholder="Write Here..."
                type="text"
                defaultValue={formData.about_company}
                onChange={handleChange}
                className="w-full p-4 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-txtColor placeholder:text-txtColor border-gray-200 rounded-lg border text-sm"
              />
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.about_company : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 9 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex flex-col gap-2">
              <label className="text-xl font-semibold text-txtColor">
                Where did you find us? *
              </label>
              <label className="text-md text-txtColor">We appreciate it!</label>

              {/* start  */}
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {findUS.map((platform, index) => {
                  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
                    throw new Error("Function not implemented.");
                  }

                  // console.log("paltform", platform.platform);
                  return (
                    <div className="relative" key={index}>
                      <input
                        className="hidden group peer"
                        type="radio"
                        name="findUsPlatform"
                        value={platform.platform}
                        id={platform.platform}
                        defaultValue={formData.findUsPlatform}
                        onChange={handleChange}
                      />

                      <label
                        className="block p-6 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                        htmlFor={platform.platform}
                      >
                        <span className="text-lg">{platform.platform}</span>
                      </label>

                      <svg
                        className="absolute w-5 h-5 text-blue-600 opacity-0 top-4 right-1 peer-checked:opacity-100"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  );
                })}
              </div>
              {/* end  */}
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.findUsPlatform : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 10 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <CalendlyEvent />
          </motion.section>
        )}
        {formStep === 11 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <label className="text-md text-txtColor">Congratulations!</label>
          </motion.section>
        )}

        {renderBtn()}
      </form>
    </div>
  );
};
export default AboutInfo2;
