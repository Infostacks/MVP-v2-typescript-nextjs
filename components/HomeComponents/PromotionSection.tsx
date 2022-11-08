/* eslint-disable react-hooks/rules-of-hooks */
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import productImages from "../../public/assets/home";
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import AnimationButton from "../AnimationButton/AnimationButton";

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
      className="flex md:flex-row lg:flex-row xl:flex-row flex-col-reverse items-center justify-center h-screen xl:px-36 lg:px-36 px-10 gap-5 w-full text-txtColor"
    >
      <div className="flex justify-center items-center px-14 xl:w-1/2 lg:w-1/2 md:w-1/2 h-1/2 w-full">
        <motion.div animate={leftAnimation}></motion.div>
        <Image
          // src={productImages.product1}
          src={
            "https://cdni.iconscout.com/illustration/premium/thumb/online-sale-advertising-5365276-4500144.png"
          }
          unoptimized
          alt=""
          width="600"
          height="600"
          className="shadow-lg shadow-primary"
        />
      </div>
      <div className="flex flex-col justify-center items-center gap-5 xl:w-1/2 lg:w-1/2 md:w-1/2 h-screen ">
        <div className="flex flex-col justify-center gap-5 w-full">
          <motion.h3
            animate={leftAnimation}
            className="text-primary lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold flex flex-row"
          >
            Every Purchase Will Be Made With Pleasure
          </motion.h3>
          <motion.h1
            animate={rightAnimation}
            className="text-3xl font-extrabold"
          >
            Upto <span className="text-primary">70%</span> OFF...
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 0.5 }}
            className="xl:text-2xl lg:text-2xl text-xl"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
            repellendus nihil fuga unde voluptas voluptates perspiciatis
            aspernatur.
          </motion.p>
          <AnimationButton btnText={"Shop Now"} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(promotionsection);
