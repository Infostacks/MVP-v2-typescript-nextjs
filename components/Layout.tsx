import Navbar from "./Navbar/Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <>
      <div className="w-full">
        <div className="w-full fixed top-0 z-50">
          <Navbar />
        </div>
        <main>{children}</main>
        <div className="w-full relative">
          <Footer />
        </div>
      </div>
    </>
  );
}
