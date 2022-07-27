import AboutInfo from "./AboutInfo";
import SideAnimation from "./SideAnimation";

const index = () => {
  return (
    <div className="companySignupBG ">
      <div className="bg-white bg-opacity-50 flex xl:flex-row lg:flex-row md:flex-row flex-col m-0 p-0 h-screen w-screen">
      <div className="h-full w-1/3">
        <SideAnimation />
      </div>
      <div className="h-full w-2/3 flex justify-center items-center">
        <AboutInfo />
      </div>
    </div>
    </div>
  );
};

export default index;
