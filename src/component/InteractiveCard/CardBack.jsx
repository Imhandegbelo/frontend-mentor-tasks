import React from "react";

export default function CardBack(cvc) {
  return (
    <div className="relative -top-10 bg-card-back bg-contain bg-no-repeat h-[9rem] sm:h-[10rem] md:h-[12rem] xl:w-[27.93rem] xl:h-[15.31rem] mt-10 ml-10 xl:ml-24 p-6">
      <p className="text-white text-lg absolute right-[6.5rem] top-[3.5rem] xl:right-[4rem] xl:top-[6.5rem]">
        {cvc.length > 0 ? cvc : "000"}
      </p>
    </div>
  );
}
