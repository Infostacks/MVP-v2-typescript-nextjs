import React from "react";
import { TrustedByIcons } from "../utils/data";

const TrustedBy = () => {
  return (
    <div className=" flex flex-col justify-center items-center gap-16">
      <p className="text-slate-400 fontsize2 fontsize text-3xl">Trusted By</p>
      <div className="drop-shadow-md shadow-lg shadow-cyan-200 flex flex-row items-center justify-around bg-gray-900 rounded-full h-48 w-full gap-14 px-10">
        {TrustedByIcons.map((counter, index) => {
          return (
            <div
              key={index}
              className="flex flex-row items-center justify-between "
            >
              <img src={counter.icon} alt="" className="w-36" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TrustedBy;
