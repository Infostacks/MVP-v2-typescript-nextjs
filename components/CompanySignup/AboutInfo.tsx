/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Joi from "joi-browser";
import { hourlyRate, requiredSkills } from "../utils/data";
import useAuth from "../../hooks/useAuth";

const hourlyRateinfo = () => {
  const [formStep, setFormStep] = useState(8);
  const [errors, setErrors] = useState(null);
  const [confirmPassError, setConfirmPassError] = useState(false);
  // const { signIn, signUp, resetfullname } = useAuth();
  const [confirmfullname, setConfirmfullname] = useState("");
  const [formData, setFormData] = useState({
    jobtypeoption: "",
    developerNeeded: "",
    fullname: "",
    // confirmfullname: "",
    email: "",
    phoneNumber: "",
    developerType: "",
    requiredSkill: "",
    hourlyRate: "",
    projectname: "",
    techstack: "",
    linkto: "",
  });

  const companySignUpSchema = {
    // Joi schema for validation
    jobtypeoption: Joi.string().required().label("Full name"),
    developerNeeded: Joi.string().required().label("Developers Needed"),
    fullname: Joi.string().required().label("fullname"),
    // confirmfullname: Joi.string()
    //   .required()
    //   .valid(Joi.ref("fullname"))
    //   .label("fullname did not match"),
    email: Joi.string().required().label("email"),
    phoneNumber: Joi.string().required().label("phoneNumber"),
    developerType: Joi.string().required().label("developerType"),
    requiredSkill: Joi.string().required().label("requiredSkill"),
    hourlyRate: Joi.string().required().label("hourlyRate"),
    projectname: Joi.string().required().label("projectname"),
    techstack: Joi.string().required().label("techstack"),
    linkto: Joi.string().required().label("linkto"),
  };

  const validate = () => {
    // Validation function for Joi schema
    let options = { abortEarly: false }; // abortEarly: false = return all errors

    let { error } = Joi.validate(formData, companySignUpSchema, options); // error = Joi error object
    if (!error) return null; // if no error, return null

    let errors = []; // if error, create an empty array of errors

    for (let item of error.details) {
      // loop through error.details and push each error to the errors array
      errors[item.path[0]] = item.message.replaceAll('"', "");
    }
    return errors;
  };

  const handleSubmit = async () => {
    // Function to handle submit
    setErrors(null);
    let data = validate(); // Validation function call

    if (data) {
      // If validation fails
      setErrors(data);
    } else {
      try {
        console.log("sign up method called");
        // await signUp(formData.developerNeeded, formData.fullname);
        alert("Successfully Signed Up. authType Now!");
        resetForm();
        // If validation passes
        // if (formData.fullname !== formData.confirmfullname) {
        //   setConfirmPassError(true);
        // } else {
        //   console.log("sign up method called");
        //   await signUp(formData.developerNeeded, formData.fullname);
        //   alert("Successfully Signed Up. authType Now!");
        //   resetForm();
        // }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const resetForm = () => {
    setFormData({
      jobtypeoption: "",
      developerNeeded: "",
      fullname: "",
      email: "",
      phoneNumber: "",
      developerType: "",
      requiredSkill: "",
      hourlyRate: "",
      projectname: "",
      techstack: "",
      linkto: "",
    });
  };

  /////////////////////////////////////////////////////////////////////// pending    error message ////////////////////////////////////////////////////////////////
  const completeFormStep = () => {
    let data = validate();

    if (Object.keys(data).includes(Object.keys(formData)[formStep])) {
      setErrors(data);
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    } else {
      if (formStep === 2) {
        console.log("in pswd check");
        if ((formData.fullname && confirmfullname) === "") {
          setConfirmPassError(true);
          setTimeout(() => {
            setConfirmPassError(false);
          }, 3000);
        } else {
          setFormStep(formStep + 1);
        }
      } else {
        setFormStep(formStep + 1);
      }
    }
  };

  const renderBtn = () => {
    if (formStep > 12) {
      return undefined;
    } else if (formStep === 11) {
      return (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          onClick={completeFormStep}
          className={`rounded-lg w-28 text-white pt-1 pb-1 text-sm `}
          style={{ backgroundColor: "#006d77" }}
        >
          Create Account
        </motion.button>
      );
    } else {
      return (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{
            scale: 0.9,
            color: "#f77f00",
            backgroundColor: "#f8edeb",
          }}
          transition={{ duration: 0.3 }}
          type="button"
          onClick={completeFormStep}
          className={`rounded-lg w-28 text-white pt-1 pb-1 text-sm `}
          style={{ backgroundColor: "#F18F01" }}
        >
          Next Step
        </motion.button>
      );
    }
  };

  return (
    <div className="w-3/4 h-3/4 z-50 drop-shadow-md bg-[#508AA8] bg-opacity-70 flex flex-col items-center rounded-3xl justify-center gap-3">
      <h1
        className="py-5 text-3xl font-semibold text-[#ffb703]"
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
              <label className="text-xl font-bold text-slate-50">
                What type of hire do you need? *
              </label>
              <label className="text-md text-slate-50">
                We offer full time (40 hours/week) and part time (20 hours/week)
              </label>

              {/* start  */}
              <div className="grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-5">
                <div className="relative">
                  <input
                    className="hidden group peer"
                    type="radio"
                    name="jobtypeoption"
                    value="Full Time"
                    id="full_time"
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
                    value="Part-Time"
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
              <label className="text-xl font-bold text-slate-50">
                How many developers are you looking for? *
              </label>
              <label className="text-md text-slate-50">
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
                    defaultValue={formData.jobtypeoption}
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
                    defaultValue={formData.jobtypeoption}
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
                {errors ? errors.jobtypeoption : ""}
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
              <label className="text-xl font-bold text-slate-50">
                What’s your name? *
              </label>
              <label className="text-md text-slate-50">Nice to meet you!</label>
              <input
                id="fullname"
                name="fullname"
                placeholder="Your Name"
                type="text"
                defaultValue={formData.fullname}
                onChange={handleChange}
                className="w-full p-4 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white placeholder:text-white border-gray-200 rounded-lg border text-sm"
              />
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.jobtypeoption : ""}
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
              <label className="text-xl font-bold text-slate-50">
                What is your email? *
              </label>
              <label className="text-md text-slate-50">
                We'll need this for later
              </label>
              <input
                id="email"
                name="email"
                placeholder="Your Email"
                type="text"
                defaultValue={formData.fullname}
                onChange={handleChange}
                className="w-full p-4 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white placeholder:text-white border-gray-200 rounded-lg border text-sm"
              />
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.jobtypeoption : ""}
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
              <label className="text-xl font-bold text-slate-50">
                What’s your phone number? *
              </label>
              <label className="text-md text-slate-50">
                Incase we need to reach you
              </label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="Your Phone Number"
                type="text"
                defaultValue={formData.fullname}
                onChange={handleChange}
                className="w-full p-4 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white placeholder:text-white border-gray-200 rounded-lg border text-sm"
              />
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.jobtypeoption : ""}
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
              <label className="text-xl font-bold text-slate-50">
                What type of developers are you looking for? *
              </label>
              <label className="text-md text-slate-50">
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
                    defaultValue={formData.jobtypeoption}
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
                    defaultValue={formData.jobtypeoption}
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
                    defaultValue={formData.jobtypeoption}
                    onChange={handleChange}
                  />

                  <label
                    className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                    htmlFor="Full stack"
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
                    defaultValue={formData.jobtypeoption}
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
                {errors ? errors.jobtypeoption : ""}
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
              <label className="text-md text-slate-50">
                If you don't know, that's okay. Just press next to skip.
              </label>

              {/* start  */}
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {requiredSkills.map((skill, index) => {
                  return (
                    <div className="relative" key={index}>
                      <input
                        className="hidden group peer"
                        type="radio"
                        name="requiredSkill"
                        value={skill.name}
                        id={skill.name}
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
                {errors ? errors.jobtypeoption : ""}
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
              <label className="text-xl font-semibold text-slate-50">
                What is the ideal hourly rate range? *
              </label>
              <label className="text-md text-slate-50">
                The average rate of a micro1 developer is $40/hour.
              </label>

              {/* start  */}
              <div className="grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
                {hourlyRate.map((rate, index) => {
                  return (
                    <div className="relative" key={index}>
                      <input
                        className="hidden group peer"
                        type="radio"
                        name="hourlyRate"
                        value={rate.rate}
                        id={rate.rate}
                      />

                      <label
                        className="block p-4 text-sm font-medium border text-gray-200 hover:text-black border-gray-200 rounded-lg cursor-pointer transition-colors shadow-sm peer-checked:border-blue-500 hover:bg-[#ffb703] peer-checked:ring-1 peer-checked:ring-blue-500"
                        htmlFor={rate.rate}
                      >
                        <span className="text-lg">{rate.rate}</span>
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
                {errors ? errors.jobtypeoption : ""}
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
              <label className="text-xl font-bold text-slate-50">
                What is your email? *
              </label>
              <label className="text-md text-slate-50">
                We'll need this for later
              </label>
              <input
                id="email"
                name="email"
                placeholder="Your Email"
                type="textarea"
                defaultValue={formData.fullname}
                onChange={handleChange}
                className="w-full p-4 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white placeholder:text-white border-gray-200 rounded-lg border text-sm"
              />
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.jobtypeoption : ""}
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
              <label className="text-md text-slate-50">Tech Stack:</label>
              <input
                id="techstack"
                name="techstack"
                type="text"
                defaultValue={formData.techstack}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.techstack : ""}
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
            <div className="flex flex-col gap-2">
              <label className="text-md text-slate-50">Link To:</label>
              <input
                id="linkto"
                name="linkto"
                type="text"
                defaultValue={formData.linkto}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">
                {errors ? errors.linkto : ""}
              </span>
            </div>
          </motion.section>
        )}
        {formStep === 11 && (
          <motion.section
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <label className="text-md text-slate-50">Congratulations!</label>
          </motion.section>
        )}

        {renderBtn()}
      </form>

      {/* horizontal line  */}

      {/* horizontal line  */}
      {/* <div className="w-full h-[1px] bg-slate-400 "></div> */}
    </div>
  );
};

export default hourlyRateinfo;
function signUp(developerNeeded: string, fullname: string) {
  throw new Error("Function not implemented.");
}
