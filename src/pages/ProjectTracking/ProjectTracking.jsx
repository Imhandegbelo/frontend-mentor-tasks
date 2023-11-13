import React, { useState } from "react";
import logo from "../../assets/ProjectTracking/logo.svg";
import close from "../../assets/ProjectTracking/icon-close.svg";
import menu from "../../assets/ProjectTracking/icon-hamburger.svg";
import illustration from "../../assets/ProjectTracking/illustration-devices.svg";

export default function ProjectTracking() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["product", "features", "pricing", "•", "login"];
  return (
    <div
      id="project_tracking"
      className="flex justify-center w-screen relative"
    >
      {isMenuOpen && (
        <div className="absolute flex flex-col md:hidden w-[80vw] top-20 p-6 text-center rounded shadow-2xl z-50 bg-white">
          {links.map((link, index) => (
            <p
              className={`font-bold py-2 uppercase ${
                index === 3
                  ? "text-white w-full py-0 border-b border-gray-400"
                  : ""
              } cursor-pointer hover:underline`}
            >
              {link}
            </p>
          ))}
        </div>
      )}
      <div className="bg-blue-50 w-1/2 absolute top-0 right-0 h-[400px] rounded-bl-[5rem]"></div>
      <div className="flex justify-between w-full max-w-[1440px] z-10 overflow-x-clip">
        <div>
          <nav className="flex items-center justify-between mt-6 md:mt-8 lg:mt-10 xl:mt-14 w-full px-6 md:px-10 lg:px-24 xl:px-32">
            <img src={logo} alt="site logo" />
            <div className="hidden md:flex md:gap-8 lg:gap-12">
              {links.map((link, index) => (
                <p
                  className={`font-bold py-5 uppercase ${
                    index > 2 ? "text-gray-400" : ""
                  } cursor-pointer hover:underline`}
                >
                  {link}
                </p>
              ))}
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden"
            >
              <img
                src={isMenuOpen ? close : menu}
                alt={isMenuOpen ? "close" : "menu"}
              />
            </button>
          </nav>
          <div className="flex flex-col md:flex-row mt-16 md:mt-24 gap-16 md:gap-0 md:justify-between px-6 md:px-10 lg:px-24 xl:px-32 relative overflow-x-clip">
            <div className="flex flex-col md:justify-between md:w-1/2">
              <div>
                <h1 className="text- lg:text-xl xl:text-2xl uppercase">
                  <span className="text-white bg-slate-800 px-2 sm:px-3 sm:py-1 rounded-l-full rounded-r-full mr-4">
                    New
                  </span>
                  <span className="text-gray-400 md:tracking-widest">
                    Monograph Dashboard
                  </span>
                </h1>
                <h2 className="uppercase font-bold mt-6 xl:mt-8 text-3xl lg:text-4xl xl:text-6xl">
                  Powerful insights into your team
                </h2>
                <p className="mt-5 md:mt-8 xl:mt-10 text-gray-400 text-lg lg:w-2/3 xl:w-1/2">
                  Project planning and time tracking for agile teams
                </p>
              </div>
              <div className="flex items-center mt-7 gap-6 text-sm lg:text-md xl:text-lg">
                <button className="uppercase py-2 px-6 md:px-4 xl:px-7 bg-[#ff5c5c] hover:bg-[#ff5c5c]/70 text-white rounded-md">
                  Schedule a Demo
                </button>
                <span className="uppercase lg:tracking-[0.2rem] xl:tracking-[0.3rem] text-gray-400">
                  To see a preview
                </span>
              </div>
            </div>

            {/* <div className="border order-first md:order-last"> */}
            <img
              src={illustration}
              alt="laptop and mobile phone photo"
              className="h-[10rem] sm:h-[15rem] w-[110vw] md:h-[18rem] md:w-auto lg:h-[20rem] xl:h-[30rem] md:-mr-[15rem] lg:-mr-[40%] order-first md:order-last"
            />
            {/* h-[10rem] w-[110vw] md:h-[18rem] md:w-auto lg:h-[20rem] xl:h-[30rem] md:-mr-[15rem] lg:-mr-[40%] order-first md:order-last */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
