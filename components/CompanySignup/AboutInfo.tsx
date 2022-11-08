/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Joi from "joi-browser";
import { requiredSkills, findUS, hourlyRate } from "../utils/data";
// import useAuth from "../../hooks/useAuth";
import CalendlyEvent from "./CalendlyEvent";

const AboutInfo = () => {
  var items = [];
  const [formStep, setFormStep] = useState(0);
  const [errors, setErrors] = useState(null);
  const [confirmPassError, setConfirmPassError] = useState(false);
  // const { signIn, signUp, resetfullname } = useAuth();
  // const [confirmfullname, setConfirmfullname] = useState("");
  const [formData, setFormData] = useState({
    jobtypeoption: "",
    developerNeeded: "",
    fullname: "",
    email: "",
    phoneNumber: "",
    developerType: "",
    requiredSkill: "",
    hourlyplatform: "",
    about_company: "",
    findUsPlatform: "",
  });

  const companySignUpSchema = Joi.object({
    // Joi schema for validation
    // jobtypeoption: Joi.string().required().label("Job type"),
    jobtypeoption: Joi.string().required().label("Job type"),
    developerNeeded: Joi.string().required().label("Developers Needed"),
    fullname: Joi.string()
      .alphanum()
      .min(3)
      .max(30)
      .required()
      .label("fullname"),
    // email: Joi.string().trim().required().label("email"),
    email: Joi.string()
      .email({
        minDomainSegments: 2,
        tlds: { allow: ["com", "net", "in", "co"] },
      })
      .trim()
      .required()
      .label("email"),
    phoneNumber: Joi.number()
      .integer()
      .min(1000000000)
      .max(9999999999999)
      .required()
      .label("phoneNumber"),
    developerType: Joi.string().required().label("developerType"),
    requiredSkill: Joi.string().required().label("requiredSkill"),
    hourlyplatform: Joi.string().required().label("hourlyplatform"),
    about_company: Joi.string().required().label("about_company"),
    findUsPlatform: Joi.string().required().label("findUsPlatform"),
  });

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
    console.log(
      " I am validating",
      companySignUpSchema.validate({ [name]: value })
    );
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
      hourlyplatform: "",
      about_company: "",
      findUsPlatform: "",
    });
  };

  /////////////////////////////////////////////////////////////////////// pending    error message ////////////////////////////////////////////////////////////////////////////////
  const completeFormStep = (e) => {
    e.preventDefault();
    console.log("data", e.target);
    var toggle = false;
    let data = validate();
    console.log("data", data);
    if (Object.keys(data).includes(Object?.keys(formData)[formStep])) {
      setErrors(data);
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    } else {
      if (formStep === 2) {
        // console.log("in pswd check");
        // if ((formData.fullname && confirmfullname) === "") {
        if (formData.fullname === "") {
          setConfirmPassError(true);
          setTimeout(() => {
            setConfirmPassError(false);
          }, 3000);
        } else {
          setFormStep(formStep + 1);
          items.push(formData[formStep]);
        }
      } else {
        setFormStep(formStep + 1);
        items.push(formData[formStep]);
      }
    }
  };
  const BackFormstep = () => {
    let data = validate();

    if (Object.keys(data).includes(Object.keys(formData)[formStep])) {
      setErrors(data);
      setTimeout(() => {
        setErrors(null);
      }, 3000);
    } else {
      if (formStep > 0) {
        setFormStep(formStep - 1);
        items.pop();
      } else {
        console.log("Back Page");
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
          className={`rounded-lg w-28 text-txtColor pt-1 pb-1 text-sm `}
          style={{ backgroundColor: "#006d77" }}
        >
          Create Account
        </motion.button>
      );
    } else {
      return (
        <div className="flex flex-row justify-evenly w-full">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{
              scale: 0.9,
              color: "#f77f00",
              backgroundColor: "#f8edeb",
            }}
            transition={{ duration: 0.3 }}
            type="button"
            onClick={BackFormstep}
            className={`rounded-full w-28 text-txtColor pt-1 pb-1 text-sm `}
            style={{ backgroundColor: "#F18F01" }}
          >
            Back Step
          </motion.button>

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
            className={`rounded-full w-28 text-txtColor pt-1 pb-1 text-sm `}
            style={{ backgroundColor: "#F18F01" }}
          >
            Next Step
          </motion.button>
        </div>
      );
    }
  };
  console.log("items array: ", items);

  return (
    <div className="w-3/4 h-3/4 px-6 drop-shadow-md bg-[#508AA8] bg-opacity-70 flex flex-col items-center rounded-3xl justify-center gap-3">
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
export default AboutInfo;
