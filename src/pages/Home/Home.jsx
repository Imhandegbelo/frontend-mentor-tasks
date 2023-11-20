import { useState } from "react";
import { Link } from "react-router-dom";
import menu from "../../assets/ProjectTracking/icon-hamburger.svg";
import close from "../../assets/ProjectTracking/icon-close.svg";
import logo from "../../assets/fem.png";
import pages from "../../data/pages.json";
import details from "../../data/homedata";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex bg-slate-900x w-screen max-w-[1440px] mx-auto h-screen pt-10 md:pt-0">
      <div className="hidden md:flex flex-col w-1/5 pt-6 bg-slate-500 text-white">
        {pages.map((page, index) => (
          <a
            href={`#${page.path}`}
            key={index}
            className="w-full text-white py-2 px-4 cursor-pointer hover:bg-slate-600"
          >
            {page.title}
          </a>
        ))}
      </div>
      {isOpen && <div className="flex flex-col absolute w-screen h-screen pt-6 bg-white text-center ">
        {pages.map((page, index) => (
          <a
            href={`#${page.path}`}
            key={index}
            className="w-full py-2 px-4 cursor-pointer hover:bg-gray-200"
          >
            {page.title}
          </a>
        ))}
      </div>}
      <div className="flex md:hidden absolute top-0 w-full p-6 items-center justify-between">
        <img src={logo} alt="logo" className="border border-black rounded-full cursor-pointer" />
        <button onClick={() => setIsOpen(!isOpen)}>
          <img src={isOpen ? close : menu} alt="" className="cursor-pointer" />
        </button>
      </div>
      <div className="w-full md:w-4/5 bg-slate-100 mt-10 md:mt-0 overflow-y-scroll bg-blur-lg bg-opacity-10 py-6 px-6 md:px-12">
        {details.map((detail, index) => (
          <section
            key={`solution-${index}`}
            id={detail.id}
            className="flex flex-col gap-6 md:gap-10 py-6 border-b border-black"
          >
            <h1 className="text-3xl font-bold">{detail.title}</h1>
            <img src={detail.image} alt={`${detail.title}-image`} />
            <p>{detail.description}</p>
            <Link
              to={detail.url}
              className="bg-teal-800 text-white text-sm md:text-base py-2 md:py-4 px-4 md:px-8 rounded-md hover:bg-emerald-600 transition-all duration-1000 w-fit"
            >
              Visit solution
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
