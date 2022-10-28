/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";
import { MdExpandMore } from "react-icons/md";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { animList, previewTextData } from "../utils/data";
import { useInView } from "react-intersection-observer";
import Lottie from "react-lottie-player";
import axios from "axios";
import AnimationButton from "../AnimationButton/AnimationButton";

const previewsection = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const btnAnimation = useAnimation();
  const [animListNo, setAnimListNo] = useState(0);

  const [animationData, setAnimationData] = useState(null);
  // const [changeText, setChangeText] = useState(true);
  // console.log(changeText);

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
  }, [inView, btnAnimation, leftAnimation, rightAnimation]);

  const loadAnimData = async (sourceUrl) => {
    try {
      const { data } = await axios.get(sourceUrl);
      setAnimationData(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

  // play 1st animation on each pageload
  useEffect(() => {
    loadAnimData(animList[0]);
    // setChangeText(false);
  }, []);

  // change animation after specified time
  useEffect(() => {
    const changeNumber = () => {
      let n =
        Number(animListNo) + 1 === animList.length ? 0 : Number(animListNo) + 1;
      setAnimListNo(n);
      loadAnimData(animList[n]);

      // setTimeout(() => {
      //   setChangeText(true);
      // }, 300);
      // setChangeText(true);
    };
    let timerID = setInterval(changeNumber, 8000);

    return () => clearInterval(timerID);
  }, [animListNo]);

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-between xl:h-screen lg:h-screen xl:pt-0 lg:pt-0 pt-32 xl:px-36 lg:px-36 px-10 gap-5 text-txtColor"
    >
      {/* Left Side  */}
      <div className="flex justify-center xl:w-1/2 lg:w-1/2 md:w-1/2 h-1/2">
        <motion.div className="w-full h-full">
          <div className="flex flex-col justify-center gap-5 xl:w-2/3 lg:w-2/3 w-full">
            <h3 className="text-primary lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold">
              {previewTextData[animListNo].heading
                .split("")
                .map((character, i) => {
                  return <span key={i}>{character}</span>;
                })}
            </h3>
            <AnimatePresence>
              <motion.h1 className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold">
                {previewTextData[animListNo].subHeading}
              </motion.h1>
            </AnimatePresence>
            <AnimatePresence>
              <motion.p className="xl:text-2xl lg:text-2xl text-xl">
                {previewTextData[animListNo].desc}
              </motion.p>
            </AnimatePresence>
            <AnimationButton btnText={"Learn More"} />
          </div>
        </motion.div>
      </div>

      {/* Right Side  */}
      <div className="flex flex-col justify-center items-center xl:w-1/2 lg:w-1/2 md:w-1/2  h-1/2 xl:px-0 lg:px-0 px-14 w-screen">
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <Lottie loop animationData={animationData} play speed={0.3} />
        </motion.div>
      </div>
    </div>
  );
};

export default React.memo(previewsection);
