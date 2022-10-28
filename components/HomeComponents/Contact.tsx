/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AnimationButton from "../AnimationButton/AnimationButton";
// import { MdExpandMore } from "react-icons/md";

const contact = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });

  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const btnAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      leftAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          bounce: 0.5,
        },
      });

      rightAnimation.start({
        x: 0,
        opacity: 1,
        transition: {
          duration: 1.5,
          bounce: 0.5,
        },
      });

      btnAnimation.start({
        opacity: 1,
        translateY: [30, -25, 20, -15, 10, 0],
        transition: { duration: 3, delay: 0.5, type: "spring" },
      });
    }
    if (!inView) {
      leftAnimation.start({ x: "-5vw", opacity: 0 });
      rightAnimation.start({ x: "5vw", opacity: 0 });
      btnAnimation.start({ opacity: 0, translateY: "-80vh" });
    }
  }, [btnAnimation, inView, leftAnimation, rightAnimation]);

  const uRef = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center h-auto px-10 gap-5 w-full text-txtColor"
    >
      {/* Left side form */}
      <div className="flex flex-col justify-center items-center xl:gap-5 lg:gap-5 md:gap-5 gap-2 xl:w-1/2 lg:w-1/2 md:w-1/2 h-1/2 w-screen">
        <div className="flex flex-col justify-center items-center gap-5 w-11/12">
          <h1 className="g:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-center lg:max-w-4xl sm:max-w-sm rounded-xl px-8 py-3 text-primary">
            Contact Us
          </h1>
          <motion.h1
            animate={leftAnimation}
            className=" xl:text-2xl lg:text-2xl md:text-2xl text-md xl:font-extrabold lg:font-extrabold font-bold max-w-lg text-center"
          >
            We Love To Help Great Companies To Enlarge Their Revenues.
          </motion.h1>
          <form className="flex flex-col gap-4 items-centre z-40 drop-shadow-sm xl:w-3/5 lg:w-3/5 w-5/6">
            <input
              type="text"
              name="user_name"
              className="border-[1px] border-zinc-200 text-sm rounded-full focus:outline-none px-5 py-5 bg-secondary placeholder:to-txtColor w-full"
              placeholder="Name"
            />
            <input
              type="email"
              name="user_email"
              className="border-[1px] border-zinc-200 text-sm rounded-full focus:outline-none px-5 py-5 bg-secondary placeholder:to-txtColor w-full"
              placeholder="Email"
            />
            <textarea
              name="message"
              className="border-[1px] border-zinc-200 text-sm rounded-3xl focus:outline-none px-5 py-5 bg-secondary placeholder:to-txtColor w-full h-[10rem]"
              placeholder="Message"
            />
            <AnimationButton btnText={"Submit Now"} />
          </form>
        </div>
      </div>

      {/* Right Side  */}
      <div className="flex flex-col justify-center items-center xl:w-1/2 xl:h-full lg:h-full md:h-full lg:w-1/2 md:w-1/2  h-1/2 w-screen">
        {/* Lottie animation code here */}
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          // speed={0.8}
          loop
          mode="normal"
          src="https://assets3.lottiefiles.com/packages/lf20_sxk2ofvv.json"
        ></lottie-player>
      </div>
    </div>
  );
};

export default contact;
