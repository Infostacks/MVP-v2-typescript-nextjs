import React from "react";
import { IconsSlider } from "../utils/data";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

const SliderIcons = () => {
  return (
    <div className="flex flex-col items-center gap-20">
      <p className="text-slate-400 text-2xl tracking-widest font-semibold">
        TECHNOLOGIES OUR DEVELOPERS KNOW
      </p>
      <div className="flex flex-row flex-wrap justify-around items-center w-full">
        <div className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full max-w-screen-lg h-full p-10">
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
                    width="150"
                    height="150"
                    unoptimized
                    className="rounded-full"
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SliderIcons;
