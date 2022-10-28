import Head from "next/head";
import HeaderSection from "../Navbar/Header";
import PreviewSection from "./PreviewSection";
import PromotionSection from "./PromotionSection";
import FeaturedSection from "./FeaturedSection";
import ProudProjects from "./ProudProjects";
import Companies from "./Companies";
import Contact from "./Contact";

const index = () => {
  return (
    <div className="flex flex-col items-center mx-auto w-full overflow-x-hidden scroll-hidden  bg-bgColor text-txtColor">
      <div className="w-full">
        <PreviewSection />
      </div>
      <div className="w-full ">
        <PromotionSection />
      </div>
      <div className="w-full">
        <FeaturedSection />
      </div>
      <div className="w-full h-full">
        <ProudProjects />
      </div>
      <div className="w-full h-full">
        <Companies />
      </div>
      <div className="w-full h-screen">
        <Contact />
      </div>
    </div>
  );
};

export default index;
