import { motion } from "framer-motion";
import React from "react";
import NumberCounter from "../counter/NumberCounter";
import { NoCounter } from "../utils/data";

// function animate(obj, initVal, lastVal, duration) {
//   let startTime = null;

//   //get the current timestamp and assign it to the currentTime variable
//   let currentTime = Date.now();

//   //pass the current timestamp to the step function
//   const step = (currentTime) => {
//     //if the start time is null, assign the current time to startTime
//     if (!startTime) {
//       startTime = currentTime;
//     }

//     //calculate the value to be used in calculating the number to be displayed
//     const progress = Math.min((currentTime - startTime) / duration, 1);

//     //calculate what to be displayed using the value gotten above
//     obj.innerHTML = Math.floor(progress * (lastVal - initVal) + initVal);

//     //checking to make sure the counter does not exceed the last value (lastVal)
//     if (progress < 1) {
//       window.requestAnimationFrame(step);
//     } else {
//       window.cancelAnimationFrame(window.requestAnimationFrame(step));
//     }
//   };
//   //start animating
//   window.requestAnimationFrame(step);
// }

const HowItWorksCounter = () => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly items-center w-full ">
      {NoCounter.map((counter, index) => {
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
            className="drop-shadow-md shadow-lg items-center shadow-cyan-200 flex flex-col justify-evenly bg-gray-900 rounded-3xl h-[13rem] w-[19rem]"
          >
            <div className="flex flex-row gap-2 text-4xl text-white fontsize">
              <NumberCounter
                from={counter.from}
                to={counter.to}
                dur={counter.durat}
              />
            </div>
            <div className="text-xl text-white">{counter.textcard}</div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HowItWorksCounter;
