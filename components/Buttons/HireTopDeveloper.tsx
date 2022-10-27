import Link from "next/link";
import React from "react";

const HireTopDeveloper = () => {
  return (
    <Link href="/company">
      <a className="bg-primary text-center border-primary border-4 hover:border-secondary active:scale-75 transition duration-300 hover:bg-transparent shadow-xl shadow-primary text-txtColor text-lg font-bold xl:py-5 lg:py-5 py-4 xl:px-14 lg:px-14 px-3 rounded-full">
        Hire a Top Developer
      </a>
    </Link>
  );
};

export default HireTopDeveloper;
