import Link from "next/link";
import React from "react";

const HireTopDeveloper = () => {
  return (
    <Link href="/company">
      <a className="bg-teal-600 text-center border-teal-600 border-4 hover:border-teal-800 hover:border-4 active:scale-75 transition duration-300 hover:bg-transparent shadow-xl shadow-teal-600 text-white text-lg font-bold py-5 px-14 rounded-full">
        Hire a Top Developer
      </a>
    </Link>
  );
};

export default HireTopDeveloper;
