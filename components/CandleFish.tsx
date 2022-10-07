import Link from "next/link";
import ImageComponent from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsCart2 } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";

const CandleFish = () => {
  const [sidebar, setsidebar] = useState(false);

  const [block1, setBlock1] = useState(false);
  const [block2, setBlock2] = useState(false);
  const [block3, setBlock3] = useState(false);

  const handleCloseSidebar = () => {
    setsidebar(!sidebar);
  };

  return (
    <div className="w-full h-full">
      <div className="h-full flex">
        {/* main content area */}
        <div className="fixed flex flex-row m-0 w-screen h-screen">
          {/* block 1 */}
          <motion.div
            initial={{
              width: "33%",
            }}
            whileHover={{
              width: "50%",
              transition: { duration: 0.25 },
            }}
            exit={{
              width: "33%",
              transition: { duration: 0.25 },
            }}
            onHoverStart={() => setBlock1(true)}
            onHoverEnd={() => setBlock1(false)}
            className="relative flex flex-col items-center w-2/6"
          >
            <ImageComponent
              src="https://candlefish-assets.s3.amazonaws.com/assets/shop-home.jpg"
              className="w-full h-full object-cover"
              unoptimized
              width="200px"
              height="300px"
            />
            <div className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center gap-y-16">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: block1 ? 1 : 0,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25 },
                }}
              >
                <ImageComponent
                  src="	https://candlefish-assets.s3.amazonaws.com/assets/panel-expanded-icon.png"
                  className="w-20 h-20 hover:shadow-2xl"
                  width="80%"
                  height="80%"
                  unoptimized
                />
              </motion.div>
              <motion.h1
                animate={{
                  y: 40,
                  scale: block1 ? 2 : 1,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  scale: 1,
                  transition: { duration: 0.25 },
                }}
                className={`text-white text-5xl font-bold
                    ${block1 ? "tracking-widest" : "tracking-normal"}`}
              >
                SHOP
              </motion.h1>
              <motion.ul
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: block1 ? 1 : 0,
                  y: block1 ? 30 : 0,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25 },
                }}
                className="text-white text-3xl font-semibold flex flex-col gap-3"
              >
                <motion.li
                  initial={{
                    x: 0,
                  }}
                  whileHover={{
                    x: 30,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className=" hover:cursor-pointer hover:underline"
                >
                  <Link href="/login">
                    <a>By Collections</a>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    x: 0,
                  }}
                  whileHover={{
                    x: 30,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className=" hover:cursor-pointer hover:underline"
                >
                  <Link href="/login">
                    <a>Seasonal Picks</a>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    x: 0,
                  }}
                  whileHover={{
                    x: 30,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className=" hover:cursor-pointer hover:underline"
                >
                  <Link href="/login">
                    <a>Top Sellers</a>
                  </Link>
                </motion.li>
                <motion.li
                  initial={{
                    x: 0,
                  }}
                  whileHover={{
                    x: 30,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className=" hover:cursor-pointer hover:underline"
                >
                  <Link href="/login">
                    <a>Gift Cards</a>
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>

          {/* block 2 */}
          <motion.div
            initial={{
              width: "33%",
            }}
            whileHover={{
              width: "50%",
              transition: { duration: 0.25 },
            }}
            exit={{
              width: "33%",
              transition: { duration: 0.25 },
            }}
            onHoverStart={() => setBlock2(true)}
            onHoverEnd={() => setBlock2(false)}
            className="relative flex flex-col justify-center items-center w-2/6"
          >
            <ImageComponent
              src="https://candlefish-assets.s3.amazonaws.com/assets/discover-home.jpg"
              className="w-full h-full object-cover"
              width="200px"
              height="300px"
              unoptimized
            />
            <div className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center gap-y-16">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: block2 ? 1 : 0,
                  y: block2 ? -30 : 0,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25 },
                }}
              >
                <ImageComponent
                  src="	https://candlefish-assets.s3.amazonaws.com/assets/panel-expanded-icon.png"
                  className="w-20 h-20"
                  width="80%"
                  height="80%"
                  unoptimized
                />
              </motion.div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <motion.h1
                  animate={{
                    scale: block2 ? 2 : 1,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    scale: 1,
                    transition: { duration: 0.25 },
                  }}
                  className="text-white text-5xl font-bold"
                >
                  DISCOVER
                </motion.h1>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: block2 ? 1 : 0,
                    y: block2 ? 30 : 0,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="text-white text-lg"
                >
                  See what fragrance you are feeling today
                </motion.p>
              </div>
              <motion.ul
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: block2 ? 1 : 0,
                  y: block2 ? 30 : 0,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25 },
                }}
                className="text-white text-4xl font-bold underline underline-offset-8 flex flex-col gap-3"
              >
                <motion.li
                  initial={{
                    x: 0,
                  }}
                  whileHover={{
                    x: 30,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className=" hover:cursor-pointer hover:text-right"
                >
                  <Link href="/login">
                    <a>DISCOVER NOW</a>
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>

          {/* block 3 */}
          <motion.div
            initial={{
              width: "33%",
            }}
            whileHover={{
              width: "50%",
              transition: { duration: 0.25 },
            }}
            exit={{
              width: "33%",
              transition: { duration: 0.25 },
            }}
            onHoverStart={() => setBlock3(true)}
            onHoverEnd={() => setBlock3(false)}
            className="relative flex flex-col justify-center items-center w-2/6"
          >
            <ImageComponent
              src="https://candlefish-assets.s3.amazonaws.com/assets/library-home.jpg"
              className="w-2/6 h-full object-cover"
              width="100%"
              height="100"
              unoptimized
            />
            <div className="absolute w-full h-full bg-black bg-opacity-30 flex flex-col justify-center items-center gap-y-16">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: block3 ? 1 : 0,
                  y: block3 ? -30 : 0,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25 },
                }}
              >
                <ImageComponent
                  src="	https://candlefish-assets.s3.amazonaws.com/assets/panel-expanded-icon.png"
                  className="w-20 h-20"
                  width="80%"
                  height="80%"
                  unoptimized
                />
              </motion.div>
              <div className="flex flex-col gap-2 justify-center items-center">
                <motion.h1
                  animate={{
                    scale: block3 ? 2 : 1,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    scale: 1,
                    transition: { duration: 0.25 },
                  }}
                  className="text-white text-5xl font-bold"
                >
                  BROWSE
                  <br />
                  LIBRARY
                </motion.h1>
                <motion.p
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: block3 ? 1 : 0,
                    y: block3 ? 30 : 0,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.25 },
                  }}
                  className="text-white text-lg"
                >
                  See what fragrance you are feeling today
                </motion.p>
              </div>
              <motion.ul
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: block3 ? 1 : 0,
                  y: block3 ? 30 : 0,
                  transition: { duration: 0.25 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.25 },
                }}
                className="text-white text-4xl font-bold underline underline-offset-8 flex flex-col gap-3"
              >
                <motion.li
                  initial={{
                    x: 0,
                  }}
                  whileHover={{
                    x: 30,
                    transition: { duration: 0.25 },
                  }}
                  exit={{
                    x: 0,
                    transition: { duration: 0.25 },
                  }}
                  className=" hover:cursor-pointer hover:text-right"
                >
                  <Link href="/login">
                    <a>LIBRARY CARD</a>
                  </Link>
                </motion.li>
              </motion.ul>
            </div>
          </motion.div>
        </div>

        {/* navbar area */}
        <div
          className={`absolute top-0 left-0 right-0 z-30 flex items-center flex-col justify-between`}
        >
          <div className="flex flex-col w-full fixed">
            <div className="w-full flex py-2 px-0 bg-black justify-center">
              <div className="w-full flex justify-center">
                <a
                  className="underline text-white text-base"
                  href="https://www.candlefish.com/collections/seasonal-favorites"
                  target="_blank"
                  rel="noreferrer"
                >
                  We are ready for Spring! Shop our fresh and floral Spring
                  Collection here.
                </a>
              </div>
            </div>

            {/* navbar area */}
            <div className="w-full">
              <div className="flex flex-row justify-between ml-6 mr-5 mt-4">
                <div className="flex flex-row justify-center items-center gap-2">
                  {/* sidebar icon  */}
                  <button
                    style={{ color: "white", width: "30px" }}
                    className="hover:cursor-pointer"
                    onClick={handleCloseSidebar}
                  >
                    <FormatAlignLeftIcon />
                  </button>
                  {/* logo candlefish  */}

                  <Link href="/login">
                    <a>
                      <h3 className="text-2xl text-white tracking-wider">
                        CANDLEFISH
                      </h3>
                    </a>
                  </Link>

                  <Link href="/dashboard">
                    <a>
                      <h3 className="text-xl text-white ml-10">Dashboard</h3>
                    </a>
                  </Link>
                </div>
                {/* cart icon  */}
                <span>
                  <Link href="/login">
                    <a>
                      <BsCart2
                        style={{ color: "white" }}
                        className="w-10 h-10 mr-5"
                      />
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* sidebar  */}
        <div
          className={`flex flex-col absolute top-0 z-50  w-screen transition-all duration-100 min-w-210 h-screen hide-scrollbar drop-shadow-xl
              ${sidebar ? "left-0" : "-left-full"} 
              ${sidebar ? "bg-black bg-opacity-30" : ""}`}
          onClick={handleCloseSidebar}
        >
          <div className="h-full">
            <div className="flex flex-col z-50 top-0">
              {/* sidebar bg image  */}
              <ImageComponent
                src="	https://candlefish-assets.s3.amazonaws.com/assets/side-nav-background.png"
                className={`h-full min-h-screen w-fit object-cover`}
                width="200px"
                height="300px"
                unoptimized
              />
              {/* close button  */}
              <button
                type="button"
                onClick={handleCloseSidebar}
                className="absolute mt-8 ml-8 z-50 p-3 hover:bg-black hover:bg-opacity-10 hover:rounded-full"
              >
                <MdClose style={{ color: "white" }} className="text-2xl" />
              </button>
              <div className="absolute flex flex-col mt-20 mr-3">
                {/* side bar */}
                <div className="flex flex-col justify-center ml-8 mt-8 gap-5 text-white">
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-extrabold">Shop</h1>
                    <div className="flex flex-col ml-5 text-xl">
                      <a href="" className="hover:underline underline-offset-2">
                        By Collections
                      </a>
                      <a href="" className="hover:underline underline-offset-2">
                        Seasonal Picks
                      </a>
                      <a href="" className="hover:underline underline-offset-2">
                        Top Sellers
                      </a>
                      <a href="" className="hover:underline underline-offset-2">
                        Gift Cards
                      </a>
                    </div>
                  </div>
                  <div className="text-xl font-extrabold">
                    <a href="" className="hover:underline underline-offset-2">
                      Discover
                    </a>
                  </div>
                  <div className="text-xl font-extrabold">
                    <a href="" className="hover:underline underline-offset-2">
                      The Library
                    </a>
                  </div>
                  <div className="text-xl font-extrabold">
                    <a href="" className="hover:underline underline-offset-2">
                      The Blog
                    </a>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h1 className="text-xl font-extrabold">About</h1>
                    <div className="flex flex-col ml-5 text-xl">
                      <a href="" className="hover:underline underline-offset-2">
                        Our Story
                      </a>
                      <a href="" className="hover:underline underline-offset-2">
                        Contach Us
                      </a>
                      <a href="" className="hover:underline underline-offset-2">
                        Location and Hours
                      </a>
                      <a href="" className="hover:underline underline-offset-2">
                        Shop Wholesale
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <h1 className="text-xl font-extrabold">Custom Candles</h1>
                    <div className="flex flex-col ml-5 text-xl">
                      <a href="" className="hover:underline underline-offset-2">
                        Private Lable Services
                      </a>
                      <a href="" className="hover:underline underline-offset-2">
                        Wedding Candles
                      </a>
                    </div>
                  </div>
                  <div>
                    <div className="text-xl font-extrabold">
                      <a href="" className="hover:underline underline-offset-2">
                        Candle Making Classes
                      </a>
                    </div>
                  </div>
                </div>
                {/* login button  */}
                <div className="flex justify-center mt-8">
                  <Link href="/login">
                    <a>
                      <button className="font-extrabold bg-black text-white text-xs tracking-widest flex justify-center items-center w-56 h-8 mb8">
                        LOGIN
                      </button>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end sidebar area */}
      </div>
    </div>
  );
};

export default CandleFish;