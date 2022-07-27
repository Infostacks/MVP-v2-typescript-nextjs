import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";

type Inputs = {
  fullname: string;
  email: string;
  industry: string;
  address: string;
  location: string;
  country: string;
  about: string;
  projectname: string;
  techstack: string;
  linkto: string;
};

const aboutinfo = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [formStep, setFormStep] = useState(0);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const completeFormStep = () => {
    setFormStep((cur) => cur + 1);
  };

  const renderBtn = () => {
    if (formStep > 11) {
      return undefined;
    } else if (formStep === 10) {
      return (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          type="submit"
          disabled={!isValid}
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
          whileTap={{ scale: 0.9, color: "#f77f00", backgroundColor: "#f8edeb" }}
          transition={{ duration: .3 }}
          type="button"
          disabled={!isValid}
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
    <div className="w-3/4 h-3/4 bg-[#508AA8] bg-opacity-70 flex flex-col items-center rounded-3xl justify-center gap-3">
      <h1
        className="py-5 text-3xl font-semibold text-[#ffb703]"
        style={{ fontFamily: "Bebas Neue" }}
      >
        Company Sign up
      </h1>

      <form action="" className="flex flex-col justify-center gap-y-5">
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
                type="text"
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white rounded-2xl pl-4 border-[1px] text-md z-12"
                // {...register("fullname", { required: true })}
              />
              {errors.fullname && <p>{errors.fullname.message}</p>}
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
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
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
              <label className="text-md text-slate-50">Industry:</label>
              <input
                id="industry"
                name="industry"
                type="text"
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
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
              <label className="text-md text-slate-50">Address:</label>
              <input
                id="address"
                name="address"
                type="text"
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
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
              <label className="text-md text-slate-50">Location/ City:</label>
              <input
                id="location"
                name="location"
                type="text"
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
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
              <label className="text-md text-slate-50">Country:</label>
              <input
                id="country"
                name="country"
                type="text"
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
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
              <label className="text-md text-slate-50">About Company:</label>
              <textarea
                id="about"
                name="about"
                className="w-72 h-40 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 py-3 border-[1px] text-md z-12"
              />
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
              <label className="text-md text-slate-50">Project Name:</label>
              <input
                id="projectname"
                name="projectname"
                type="text"
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
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
              <label className="text-md text-slate-50">Tech Stack:</label>
              <input
                id="techstack"
                name="techstack"
                type="text"
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
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
              <label className="text-md text-slate-50">Link To:</label>
              <input
                id="linkto"
                name="linkto"
                type="text"
                className="w-72 h-10 drop-shadow-md bg-[#ffb703] bg-opacity-75 text-white  rounded-2xl pl-4 border-[1px] text-md z-12"
              />
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
            <label className="text-md text-slate-50">Congratulations!</label>
          </motion.section>
        )}
        {renderBtn()}
        {/* <pre>{JSON.stringify(watch(), null, 10)}</pre> */}
      </form>

      {/* horizontal line  */}

      {/* horizontal line  */}
      {/* <div className="w-full h-[1px] bg-slate-400 "></div> */}
    </div>
  );
};

export default aboutinfo;
