import React from "react";

export default function CardBack({ cvc, className }) {
  return (
    <div
      className={`${className} relative -top-[12rem] sm:-top-[15rem] xl:-top-10 bg-card-back bg-center bg-contain bg-no-repeat h-[10rem] w-[18rem] sm:h-[15rem] sm:w-[27rem] md:h-[15rem] xl:w-[27.93rem] xl:h-[15.31rem] mt-24 ml-[1v5%] xl:ml-24 p-6`}
    >
      <p className="text-white text-lg absolute right-[3rem] top-[40%] sm:top-[45%] top--[3.5rem] xl:right-[4rem] xl:top-[6.5rem]">
        {cvc.length > 0 ? cvc : "000"}
      </p>
    </div>
  );
}
