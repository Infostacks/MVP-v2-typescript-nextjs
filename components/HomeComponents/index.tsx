import Head from "next/head";
import HeaderSection from "../Navbar/Header";
import PreviewSection from "./PreviewSection";
import PromotionSection from "./PromotionSection";
import FeaturedSection from "./FeaturedSection";
import ProudProjects from "./ProudProjects";
import Companies from "./Companies";
import Contact from "./Contact";
import Footer from "./Footer";
import Pro1 from "./Pro1";
import HiringProcress from "./HiringProcress";

const index = () => {
  return (
    <div className="flex flex-col items-center mx-auto p-0 w-full overflow-x-hidden scroll-hidden">
      <div className="w-full h-screen">
        <PreviewSection />
      </div>
      <div className="w-full h-screen">
        <PromotionSection />
      </div>

      <div className="h-full w-full">
        <Pro1 />
      </div>
      <div className="h-full w-screen">
        <FeaturedSection />
      </div>
      <div className="w-full h-full bg-slate-50 py-5">
        <ProudProjects />
      </div>
      <div className="w-full h-full mt-5 mb-5">
        <Companies />
      </div>
      <div className="w-full h-full py-5">
        {/* <HiringProcress /> */}
      </div>
      <div className="w-full h-screen py-5">
        <Contact />
      </div>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  );
};

export default index;
