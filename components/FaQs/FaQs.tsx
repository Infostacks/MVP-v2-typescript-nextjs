import { motion } from "framer-motion";
import React from "react";
import { FaQsData } from "../utils/data";

const Answer = (faq) => {
  // console.log(faq.faq);
  return <div dangerouslySetInnerHTML={createMarkup(faq.faq)}></div>;
};

function createMarkup(faq) {
  return { __html: faq };
}

const FaQs = () => {
  return (
    <div className="flex flex-col items-center w-screen px-14">
      <h1 className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-txtColor pb-10">
        FAQs
      </h1>
      <div className="lg:max-w-4xl md:max-w-xl xl:max-w-5xl space-y-6 w-full flex flex-col items-center">
        {FaQsData.map((head, index) => {
          return (
            <motion.details
              initial={{
                x: index % 2 === 0 ? "-10vw" : "10vw",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
                transition: {
                  duration: 2,
                  type: "spring",
                  bounce: 0.2,
                },
              }}
              key={index}
              className={`p-6 border-l-4 border-2 border-primary shadow-lg shadow-primary rounded-3xl bg-gray-700 group w-full`}
            >
              <summary className="flex items-center justify-between cursor-pointer w-full">
                <h5 className="text-xl text-primary font-bold">
                  {head.heading}
                </h5>
                <span className="flex-shrink-0 ml-1.5 p-1.5 text-txtColor bg-primary rounded-3xl sm:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </summary>
              <div className="text-txtColor font-sans text-lg">
                <Answer faq={head.desc} />
              </div>
            </motion.details>
          );
        })}
      </div>
    </div>
  );
};

export default FaQs;
