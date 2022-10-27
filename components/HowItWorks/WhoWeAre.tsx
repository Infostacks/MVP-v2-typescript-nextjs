/* eslint-disable react/no-unescaped-entities */
import React from "react";

const WhoWeAre = () => {
  return (
    <div className="w-full flex items-center flex-col px-14 justify-around text-center gap-32">
      <h1 className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-center text-slate-400 lg:max-w-4xl sm:max-w-sm">
        Who we are & why we built this
      </h1>
      <p className="text-2xl text-gray-400 self-center ">
        We believe in a future of fully remote work and a global economy with no
        borders. With today's technology, a location constraint is completely
        unnecessary. We’re building tools to help the future of remote work.
      </p>
    </div>
  );
};

export default WhoWeAre;
