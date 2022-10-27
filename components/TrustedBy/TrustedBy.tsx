import React from "react";
import Image from "next/image";
import { TrustedByIcons } from "../utils/data";

const TrustedBy = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center gap-16 text-txtColor">
      <p className="fontsize2 fontsize text-3xl">Trusted By</p>
      <div className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full h-48 w-full gap-14 px-10">
        {TrustedByIcons.map((counter, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-between "
            >
              <Image
                alt=""
                width="160"
                height="70"
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
