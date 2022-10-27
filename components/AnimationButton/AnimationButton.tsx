import { motion, useAnimation } from "framer-motion";
import React from "react";
import { MdExpandMore } from "react-icons/md";

const AnimationButton = ({ btnText }) => {
  const btnAnimation = useAnimation();
  return (
    <div className="flex flex-row items-center justify-start gap-3">
      <motion.button
        animate={btnAnimation}
        type="submit"
        className="rounded-full bg-secondary p-2 text-5xl"
      >
        <motion.div
          variants={{
            hidden: {
              opacity: 1,
            },
            visible: {
              rotateZ: [25, -25],
              transition: {
                rotateZ: {
                  yoyo: Infinity,
                  duration: 1,
                  delay: 1,
                  type: "spring",
                },
              },
            },
            removed: {
              opacity: 1,
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <MdExpandMore />
        </motion.div>
      </motion.button>
      <span className="text-secondaryLight text-2xl font-semibold hover:text-secondary hover:cursor-pointer">
        {btnText}
      </span>
    </div>
  );
};

export default AnimationButton;
