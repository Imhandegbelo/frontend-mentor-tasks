import logo from "../../assets/Shortly/logo.svg";
import menu from "../../assets/icon-hamburger.svg";
import close from "../../assets/icon-close.svg";
import { useState } from "react";
// import NavbarMobile from "./NavbarMobile";

export default function Navbar() {
  const [isNavActive, setIsNavActive] = useState(false);
  const toplinks = ["features", "pricing", "resources"];

  return (
    <nav className="flex justify-between font-poppins py-6 text-gray-400">
      <div className="flex items-center gap-4">
        <a href="#">
          <img src={logo} alt="shortly logo" />
        </a>
        <ul className="hidden md:flex items-center gap-8 font-bold ml-10">
          {toplinks.map((li) => (
            <li
              key={li}
              className="uppercase hover:text-[#3b3054] cursor-pointer"
            >
              <a href="#">{li}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="hidden md:block">
        <ul className="flex gap-8 items-center font-bold">
          <a href="#" className="hover:text-[#3b3054] cursor-pointer">
            Login
          </a>
          <a
            href="#"
            className="text-white cursor-pointer py-2 px-5 rounded-3xl bg-[#2acfcf] hover:bg-[#2acfcf]/50 active:bg-[#2acfcf]/50"
          >
            Sign Up
          </a>
        </ul>
      </div>
      <NavbarMobile isActive={isNavActive} links={toplinks} />

      <button onClick={(isNavActive) => setIsNavActive(!isNavActive)} className="p-1">
        <img
          src={menu}
          alt="menu"
          className={`${isNavActive ? "hidden" : ""}`}
        />
        <img
          src={close}
          alt="close"
          className={`${isNavActive ? "" : "hidden"}`}
        />
      </button>
    </nav>
  );
}

function NavbarMobile({ links, isActive }) {
    console.log({isActive})
  return (
    <div className="absolute left-0 top-16 bg-[#3b3054/] w-screen z-30">
      {isActive && (
        <div className="w-11/12 p-8 flex flex-col gap-4 bg-[#3b3054] text-white text-center font-bold rounded-2xl mx-auto w-10">
          {links.map((li) => (
            <a href="#" className="w-full text-center uppercase">
              {li}
            </a>
          ))}
          <hr />
          <div className="flex flex-col gap-4">
            <a href="#">Login</a>
            <a
              href="#"
              className="w-full text-white cursor-pointer py-3 px-5 rounded-3xl bg-[#2acfcf] hover:bg-[#2acfcf]/50 active:bg-[#2acfcf]/50"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
