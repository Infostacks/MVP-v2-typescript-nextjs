import React from "react";
import RobustVettingProcess from "../../components/VettingProcess/RobustVettingProcess";

const index = () => {
  return (
    <div
      className="w-screen
      flex
      flex-col
      items-center
      py-5
    bg-gradient-to-r
    from-gray-900
    via-gray-800
    to-gray-900
    gap-y-12
    background-animate"
    >
      <RobustVettingProcess />
    </div>
  );
};

export default index;
