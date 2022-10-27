import React from "react";
import Image from "next/image";
import { TrustedByIcons } from "../utils/data";

const TrustedBy = () => {
  return (
    <div className="flex flex-col lg:max-w-4xl xl:max-w-5xl md:max-w-xl w-full justify-center items-center gap-16 xl:px-0 lg:px-0 md:px-0 px-14 text-txtColor">
      <p className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-center text-slate-400 lg:max-w-4xl sm:max-w-sm">
        Trusted By
      </p>
      <div className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full h-48 w-full gap-14 px-10">
        {TrustedByIcons.map((counter, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-between "
            >
              <Image
                alt=""
                width={counter.width}
                height={counter.height}
                unoptimized
                src={counter.icon}
                className="w-36"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedBy;
