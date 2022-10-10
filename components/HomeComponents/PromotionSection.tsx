/* eslint-disable react-hooks/rules-of-hooks */
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import productImages from "../../public/assets/home";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const promotionsection = () => {
  const { ref, inView } = useInView({
    threshold: [0, 0.5, 1.0],
  });
  const leftAnimation = useAnimation();
  const rightAnimation = useAnimation();
  const btnAnimation = useAnimation();

  return (
    <div
      ref={ref}
      className="flex flex-col md:flex-row lg:flex-row xl:flex-row items-center justify-center h-screen px-20 py-5 gap-5 w-full "
    >
      {/* Left Side  */}
      <div className="flex justify-center items-center xl:w-1/2 lg:w-1/2 md:w-1/2 h-1/2 w-full">
        <motion.div animate={leftAnimation}></motion.div>
        <Image
          // src={productImages.product1}
          src={
            "https://cdni.iconscout.com/illustration/premium/thumb/online-sale-advertising-5365276-4500144.png"
          }
          unoptimized
          alt=""
          width="450"
          height="400"
          className="shadow-md opacity-80"
        />
      </div>

      {/* Right Side  */}
      <div className="flex flex-col justify-center items-center gap-5  xl:w-1/2 lg:w-1/2 md:w-1/2 h-screen w-screen">
        <div className="flex flex-col justify-center gap-5 w-2/3">
          <motion.h3
            animate={leftAnimation}
            className="text-violet-500 text-xl flex flex-row"
          >
            Every Purchase Will Be Made With Pleasure
          </motion.h3>
          <motion.h1
            animate={rightAnimation}
            className="text-3xl font-extrabold text-slate-50"
          >
            Upto <span className="text-violet-500">70%</span> OFF...
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="text-sm text-slate-100"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            repellendus nihil fuga unde voluptas voluptates perspiciatis
            aspernatur.
          </motion.p>
          <div className="flex flex-row items-center justify-start gap-3">
            <motion.button
              animate={btnAnimation}
              className="rounded-full bg-violet-500 p-2 text-3xl text-white"
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
                }}
                initial="hidden"
                animate="visible"
              >
                <MdExpandMore />
              </motion.div>
            </motion.button>
            <span className="text-violet-500 font-semibold hover:text-violet-700 hover:cursor-pointer">
              Shop Now
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(promotionsection);
