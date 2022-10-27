import Link from "next/link";
import React from "react";

const HireTopDeveloper = () => {
  return (
    <Link href="/company">
      <a className="bg-primary text-center border-primary border-4 hover:border-secondary active:scale-75 transition duration-300 hover:bg-transparent shadow-xl shadow-primary text-txtColor text-lg font-bold py-5 px-14 rounded-full">
        Hire a Top Developer
      </a>
    </Link>
  );
};

export default HireTopDeveloper;
