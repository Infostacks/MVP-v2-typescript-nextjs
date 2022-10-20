/* eslint-disable react-hooks/rules-of-hooks */
import useAuth from "../../hooks/useAuth";
import Link from "next/link";
import styles from "../../styles/Global.js";
import React, { useState } from "react";
import Image from "next/image";
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
          navbar ? "bg-teal-500 bg-opacity-90 drop-shadow-md" : "bg-transparent"
        } z-[1200px]`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex justify-between items-center w-full">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <Image
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                      width="40%"
                      height="40%"
                      unoptimized
                    />
                  </a>
                </Link>
              </div>
              <div className="flex flex-row justify-center items-center">
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    <Link href="/">
                      <a
                        className={`text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Home
                      </a>
                    </Link>

                    <Link href="/vetting-process">
                      <a
                        className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Vetting Process
                      </a>
                    </Link>

                    <Link href="/how-it-works">
                      <a
                        className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        How it Works
                      </a>
                    </Link>

                    <Link href="/simple-pricing">
                      <a
                        className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Pricing
                      </a>
                    </Link>

                    <Link href="/company">
                      <a
                        className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Hire Top Developer
                      </a>
                    </Link>

                    <Link href="/apply-as-developer">
                      <a
                        className={`text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
                      >
                        Apply As Developer
                      </a>
                    </Link>
                    {/* <button
                      className={`text-white hover:cursor-pointer hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium`}
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
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="mx-2 pt-2 pb-3 border-t-[1px] space-y-1 sm:px-3"
              >
                <Link href="/">
                  <a className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </a>
                </Link>

                <Link href="/vetting-process">
                  <a className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Vetting Process
                  </a>
                </Link>

                <Link href="/how-it-works">
                  <a className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    How it Works
                  </a>
                </Link>

                <Link href="/simple-pricing">
                  <a className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
                    Pricing
                  </a>
                </Link>

                <Link href="/company">
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Hire Top Developer
                  </a>
                </Link>

                <Link href="/apply-as-developer">
                  <a
                    href="#"
                    className="text-gray-800 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                  >
                    Apply As Developer
                  </a>
                </Link>
                {/* <button
                  className={`text-violet-700 rounded-full drop-shadow-xl px-5 py-2 hover:text-xl ${styles.buttonHover}`}
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
