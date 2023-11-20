import { useState } from "react";
import icon_next from "../../assets/CodingBootcamp/icon-next.svg";
import icon_prev from "../../assets/CodingBootcamp/icon-prev.svg";
import john from "../../assets/CodingBootcamp/image-john.jpg";
import tanya from "../../assets/CodingBootcamp/image-tanya.jpg";
import pattern_bg from "../../assets/CodingBootcamp/pattern-bg.svg";
import pattern_curve from "../../assets/CodingBootcamp/pattern-curve.svg";
import quotes from "../../assets/CodingBootcamp/pattern-quotes.svg";

export default function Bootcamp() {
  const [person, setPerson] = useState(0);

  const people = [
    {
      name: "Tanya Sinclair",
      position: "UX Engineer",
      photo: tanya,
      testimony:
        "I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future.",
    },
    {
      name: "John Tarkpor",
      position: "Junior Front-end Developer",
      photo: john,
      testimony:
        "If you want to lay the best foundation possible I'd recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer.",
    },
  ];
  return (
    <div
      id="bootcamp"
      className="flex justify-center items-center w-screen h-screen"
    >
      <div className="flex flex-col lg:flex-row gap-20 md:gap-12 lg:gap-0 lg:items-center max-w-[1440px] h-screen xl:h-[800px] p-6 md:p-16 xl:p-24 md:mbx-12 relative">
        <div className="w-full xl:w-[55%x] text-center lg:text-left text-lg lg:text-[2rem] relative">
          <div className="">
            <blockquote className="text-gray-700 relative z-20">
              "{people[person].testimony}"
            </blockquote>
            <div className="flex flex-col lg:flex-row md:justify-center lg:items-center lg:justify-between lg:mt-10 mb-6 md:mb-20 lg:mb-0">
              <p className="font-bold text-lg text-2xl mt-10 lg:mt-0">
                {people[person].name}
              </p>
              <p className="font-normal text-base lg:text-3xl text-gray-400">
                {people[person].position}
              </p>
            </div>
          </div>
          <img src={quotes} alt="" className="absolute -top-[10%] left-[15%]" />
        </div>
        <div className="bg-bootcamp bg-cover bg-center bg-no-repeat order-first lg:order-last w-full p-[8%] h-[22rem] md:h-[38rem] lg:h-[rem] absolute right-0 relative">
          <img
            src={people[person].photo}
            alt={people[person].name}
            className="h-full w-full rounded-xl xmb-[10%] shadow-2xl"
            // className="hidden order-first lg:absolute right-24 z-10"
          />
          {/* <img src={pattern_bg} alt="" className="cabsolute cright-16" /> */}
          <div className="shadow-xl absolute bottom-[2%] md:bottom-[6%] right-[35%] md:right-[40%] z-30">
            <button
              onClick={() => setPerson((person + 1) % 2)}
              className="bg-white border-y border-r rounded-l-full py-2 px-4"
            >
              <img src={icon_prev} alt="" className="hover:scale-110" />
            </button>
            <button
              onClick={() => setPerson((person + 1) % 2)}
              className="bg-white border-y border-l rounded-r-full py-2 px-4"
            >
              <img src={icon_next} alt="" className="hover:scale-110" />
            </button>
          </div>
        </div>
      </div>
      <img
        src={pattern_curve}
        alt=""
        className="absolute bottom-0 md:-bottom-16 lg:bottom-0 lg:w-2/5 left-0 w-2/3"
      />
    </div>
  );
}
