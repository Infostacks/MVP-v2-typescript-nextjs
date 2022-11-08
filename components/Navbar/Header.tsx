/* eslint-disable react-hooks/rules-of-hooks */
// import useAuth from "../../hooks/useAuth";
import Link from "next/link";
// import styles from "../../styles/Global.js";
import React, { useState } from "react";
import Image from "next/image";
import LogaImage from "../../public/Logo1.png";
import { Transition } from "@headlessui/react";

const header = () => {
  // const { logout } = useAuth();

  // const handleLogout = async () => {
  //   await logout();
  // };
  const [isOpen, setIsOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const changeNavBG = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeNavBG);

  return (
    <div className="overflow-hidden scroll-hidden">
      <nav
        className={`${
          navbar ? "bg-primary bg-opacity-90 drop-shadow-md" : "bg-transparent"
        } z-[1200px]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between items-center w-full">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <Image
                      src={LogaImage}
                      alt="Workflow"
                      width="60%"
                      height="40%"
                      unoptimized
                      className="drop-shadow-md shadow-2xl shadow-txtColor"
                    />
                  </a>
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/">
                      <a
                        className={`text-txtColor hover:bg-secondary px-3 py-2 rounded-md text-sm font-bold`}
                      >
                        Home
                      </a>
                    </Link>

                    <Link href="/vetting-process">
                      <a
                        className={`text-txtColor hover:bg-secondary hover:text-txtColor px-3 py-2 rounded-md text-sm font-bold`}
                      >
                        Vetting Process
                      </a>
                    </Link>

                    <Link href="/how-it-works">
                      <a
                        className={`text-txtColor hover:bg-secondary hover:text-txtColor px-3 py-2 rounded-md text-sm font-bold`}
                      >
                        How it Works
                      </a>
                    </Link>

                    <Link href="/simple-pricing">
                      <a
                        className={`text-txtColor hover:bg-secondary hover:text-txtColor px-3 py-2 rounded-md text-sm font-bold`}
                      >
                        Pricing
                      </a>
                    </Link>

                    <Link href="/company">
                      <a
                        className={`text-txtColor hover:bg-secondary hover:text-txtColor px-3 py-2 rounded-md text-sm font-bold`}
                      >
                        Hire Top Developer
                      </a>
                    </Link>

                    <Link href="/apply-as-developer">
                      <a
                        className={`text-txtColor hover:bg-secondary hover:text-txtColor px-3 py-2 rounded-md text-sm font-bold`}
                      >
                        Apply As Developer
                      </a>
                    </Link>
                    {/* <button
                      className={`text-txtColor hover:cursor-pointer hover:bg-secondary hover:text-txtColor px-3 py-2 rounded-md text-sm font-medium`}
                      onClick={handleLogout}
                    >
                      Logout
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex bg-primary items-center justify-center p-2 rounded-md text-gray-400 hover:text-txtColor hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-txtext-txtColor"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden bg-bgColor" id="mobile-menu">
              <div
                ref={ref}
                className="mx-2 pt-2 pb-3 border-t-[1px] space-y-1 sm:px-3"
              >
                <Link href="/">
                  <a
                    onClick={() => setIsOpen(false)}
                    className="text-txtColor block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Home
                  </a>
                </Link>

                <Link href="/vetting-process">
                  <a
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 text-txtColor block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Vetting Process
                  </a>
                </Link>

                <Link href="/how-it-works">
                  <a
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 text-txtColor block px-3 py-2 rounded-md text-base font-medium"
                  >
                    How it Works
                  </a>
                </Link>

                <Link href="/simple-pricing">
                  <a
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 text-txtColor block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Pricing
                  </a>
                </Link>

                <Link href="/company">
                  <a
                    onClick={() => setIsOpen(false)}
                    href="#"
                    className="text-gray-800 text-txtColor block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Hire Top Developer
                  </a>
                </Link>

                <Link href="/apply-as-developer">
                  <a
                    onClick={() => setIsOpen(false)}
                    href="#"
                    className="text-gray-800 text-txtColor block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Apply As Developer
                  </a>
                </Link>
                {/* <button
                  className={`text-txtColor rounded-full drop-shadow-xl px-5 py-2 hover:text-xl ${styles.buttonHover}`}
                  onClick={handleLogout}
                >
                  Logout
                </button> */}
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
};

export default header;
