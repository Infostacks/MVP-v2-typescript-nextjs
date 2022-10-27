import React from "react";
import { IconsSlider } from "../utils/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const SliderIcons = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <p className="text-slate-400 md:max-w-md max-w-xs  text-center tracking-widest text-lg xl:text-2xl lg:text-2xl md:text-2xl xl:max-w-4xl md:text-center lg:max-w-4xl font-bold">
        TECHNOLOGIES OUR DEVELOPERS KNOW
      </p>
      {/* <div className="flex flex-row flex-wrap justify-around items-center w-full"> */}
      <div className="drop-shadow-md shadow-lg flex-wrap shadow-primary border-2 border-primary flex flex-row items-center justify-around bg-gray-900 rounded-full md:max-w-xl xl:max-w-5xl lg:max-w-4xl max-w-xs h-full p-10">
        <Swiper
          spaceBetween={30}
          slidesPerView={7}
          loop={true}
          autoplay={{
            delay: 1500,
            disableOnInteraction: true,
          }}
          modules={[Autoplay]}
          className="mySwiper w-full"
        >
          {IconsSlider.map((hire, index) => {
            return (
              <SwiperSlide key={index}>
                <Image
                  src={hire.icon}
                  alt=""
                  width="100"
                  height="100"
                  unoptimized
                  className="rounded-full"
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* </div> */}
    </div>
  );
};

export default SliderIcons;
