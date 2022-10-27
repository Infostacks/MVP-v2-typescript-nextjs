import { companiesList } from "../utils/data";
import Image from "next/image";

const companies = () => {
  return (
    <div className="flex flex-col items-center justify-evenly px-20 py-20 gap-5 w-full bg-txtColor text-secondary">
      <h1 className="lg:text-7xl xl:text-7xl md:text-3xl text-2xl font-bold text-center lg:max-w-4xl sm:max-w-sm rounded-xl px-8 py-3">
        Great software needs great relationships
      </h1>
      <p className="text-2xl">
        Beyond our skilled expertise, it is our customers and our relationship
        with them that sets us apart.
      </p>
      <div className="flex flex-row flex-wrap gap-20 justify-evenly mt-10 max-w-screen-lg">
        {companiesList &&
          companiesList.map((company, index) => {
            return (
              <Image
                src={company}
                unoptimized
                alt=""
                width="150"
                height="50"
                className="hover:cursor-pointer"
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
};

export default companies;
