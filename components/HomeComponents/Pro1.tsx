import { useAnimation } from "framer-motion";
import React from "react";
import Image from "next/image";
import productImages from "../../public/assets/home";
import { AiOutlineInstagram, AiOutlineFacebook } from "react-icons/ai";
import { RiTwitterLine } from "react-icons/ri";

const promo = () => {
  // const leftAnimation = useAnimation();
  // const rightAnimation = useAnimation();
  // const btnAnimation = useAnimation();
  return (
    // <div className="bubblePattern w-screen h-screen">
    <div>
      <div
        className="flex justify-evenly lg:flex-row xl:flex-row items-center h-screen px-20 py-5 gap-5 w-screen 
     bg-gradient-to-r from-white to-transparent bg-white bg-opacity-70"
      >
        <div>
          <Image
            src={productImages.product1}
            unoptimized
            width="450"
            height="400"
            className="shadow-md  z-50 opacity-80"
          />
        </div>
        <div className=" flex flex-col paragraphfont md:leading-loose leading-loose w-1/4 ">
          <p className="paragraphfont">We are Designknot....</p>
          <h1 className="text-5xl">
            Not a "yet another curved lines" kind of Studio.
          </h1>
          <p className="leading-loose md:leading-loose paragraphfont">
            Hello,Looking for a new winter outfit? Get 25% off our new
            collection. Place an order
          </p>
          <button className="animate-bounce w-32 mt-20 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
            Button
          </button>
          <div className="flex flex-row mt-16 ">
            <AiOutlineInstagram className="w-10 h-10" />
            <AiOutlineFacebook className="w-10 h-10" />
            <RiTwitterLine className="w-10 h-10" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(promo);
