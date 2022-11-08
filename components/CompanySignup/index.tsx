// import AboutInfo from "./AboutInfo";
import AboutInfo1 from "./AboutInfo1";
import SideAnimation from "./SideAnimation";

const index = () => {
  return (
    <div className="bg-bgColor text-txtColor flex flex-row m-0 p-0 h-screen w-screen">
      <div className="h-full w-1/3 xl:block lg:block hidden">
        <SideAnimation />
      </div>
      <div className="h-full xl:w-2/3 lg:w-2/3 w-full flex justify-center items-center">
        <AboutInfo1 />

        {/* <AboutInfo /> */}
      </div>
    </div>
  );
};

export default index;
