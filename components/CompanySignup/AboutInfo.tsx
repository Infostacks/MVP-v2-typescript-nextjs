/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { motion } from "framer-motion";
import Joi from "joi-browser";
import useAuth from "../../hooks/useAuth";

const aboutinfo = () => {
  const [formStep, setFormStep] = useState(0);
  const [errors, setErrors] = useState(null);
  const [confirmPassError, setConfirmPassError] = useState(false);
  const { signIn, signUp, resetPassword } = useAuth();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
    industry: "",
    address: "",
    location: "",
    country: "",
    about: "",
    projectname: "",
    techstack: "",
    linkto: "",
  });
console.log(formData)
  const companySignUpSchema = {
    // Joi schema for validation
    fullname: Joi.string().required().label("Full name"),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .label("Email"),
    password: Joi.string().required().label("Password"),
    confirmPassword: Joi.string()
      .required()
      .valid(Joi.ref("password"))
      .label("Password did not match"),
    industry: Joi.string().required().label("industry"),
    address: Joi.string().required().label("Address"),
    location: Joi.string().required().label("Location"),
    country: Joi.string().required().label("country"),
    about: Joi.string().required().label("about"),
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
    console.log("data: ", data);

    if (data) {
      // If validation fails
      setErrors(data);
    } else {
      try {
        // If validation passes
        if (formData.password !== formData.confirmPassword) {
          setConfirmPassError(true);
        } else {
          console.log("sign up method called");
          await signUp(formData.email, formData.password);
          alert("Successfully Signed Up. authType Now!");
          resetForm();
        }
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
      fullname: "",
      email: "",
      password: "",
      confirmPassword: "",
      industry: "",
      address: "",
      location: "",
      country: "",
      about: "",
      projectname: "",
      techstack: "",
      linkto: "",
    });
  };
/////////////////////////////////////////////////////////////////////// pending    error message ////////////////////////////////////////////////////////////////
  const completeFormStep = () => {
    let data = validate();
    console.log(data)
    if (data[formStep]) {
      setErrors(data);
      setTimeout(() => {
        setErrors(null)
      }, 3000);
    } else {
      setFormStep(formStep + 1);
    }
    
  };

  console.log("Form Step", formStep);

  const renderBtn = () => {
    if (formStep > 12) {
      return undefined;
    } else if (formStep === 12) {
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
              <label className="text-md text-slate-50">
                Company Full Name:
              </label>
              <input
                id="fullname"
                name="fullname"
                type="text"
                defaultValue={formData.fullname}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.fullname:""}</span>
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
              <label className="text-md text-slate-50">Company Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={formData.email}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.email:""}</span>
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
              <label className="text-md text-slate-50">Company Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                defaultValue={formData.password}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <label className="text-md text-slate-50">Confirm Password:</label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                defaultValue={formData.confirmPassword}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.confirmPassword:""}</span>
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
              <label className="text-md text-slate-50">Industry:</label>
              <input
                id="industry"
                name="industry"
                type="text"
                defaultValue={formData.industry}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.industry:""}</span>
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
              <label className="text-md text-slate-50">Address:</label>
              <input
                id="address"
                name="address"
                type="text"
                defaultValue={formData.address}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.address:""}</span>
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
              <label className="text-md text-slate-50">Location/ City:</label>
              <input
                id="location"
                name="location"
                type="text"
                defaultValue={formData.location}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.location:""}</span>
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
              <label className="text-md text-slate-50">Country:</label>
              <input
                id="country"
                name="country"
                type="text"
                defaultValue={formData.country}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.country:""}</span>
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
              <label className="text-md text-slate-50">About Company:</label>
              <textarea
                id="about"
                name="about"
                defaultValue={formData.about}
                onChange={handleChange}
                style={{ resize: "none" }}
                className="w-72 h-40 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 py-3 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.about:""}</span>
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
              <label className="text-md text-slate-50">Project Name:</label>
              <input
                id="projectname"
                name="projectname"
                type="text"
                defaultValue={formData.projectname}
                onChange={handleChange}
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.projectname:""}</span>
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
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.techstack:""}</span>
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
              <span className="text-[#DA373E] font-semibold text-xs">{errors ? errors.linkto:""}</span>
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

export default aboutinfo;
function signUp(email: string, password: string) {
  throw new Error("Function not implemented.");
}
