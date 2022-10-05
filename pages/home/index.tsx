import Head from "next/head";
import HeaderSection from "../../components/Navbar/Header";
import PreviewSection from "../../components/HomeComponents/PreviewSection";
import PromotionSection from "../../components/HomeComponents/PromotionSection";
import FeaturedSection from "../../components/HomeComponents/FeaturedSection";
import ProudProjects from "../../components/HomeComponents/ProudProjects";
import Companies from "../../components/HomeComponents/Companies";
import Contact from "../../components/HomeComponents/Contact";
import Footer from "../../components/HomeComponents/Footer";
import Pro1 from "../../components/HomeComponents/Pro1";
import HiringProcress from "../../components/HomeComponents/HiringProcress";

const index = () => {
  return (
    <div>
      <Head>
        <title>Home - MVP</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center mx-auto p-0 w-full overflow-x-hidden">
        <div className="w-full h-screen">
          <PreviewSection />
        </div>
        <div className="w-full h-screen">
          <PromotionSection />
        </div>

        <div>
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
        <div>
          <HiringProcress />
        </div>
        <div className="w-full h-screen py-5">
          <Contact />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default index;
