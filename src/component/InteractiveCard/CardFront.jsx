import React from "react";
import cardlogo from "../../assets/InteractiveCard/card-logo.svg";

export default function CardFront({ name, cardNumber, month, year, className }) {
  return (
    <div className={`${className} relative z-10 -ml-[15%] sm:ml-[20%] xl:ml-0 xl:z-0 top-[10rem] sm:top-[15rem] xl:top-0 bg-card-front bg-contain bg-no-repeat h-[10rem] sm:h-[15rem] sm:w-[27rem] w-[18rem] xl:w-[27.93rem] xl:h-[15.31rem] p-2 sm:p-5 xl:p-6`}>
      <img src={cardlogo} alt="logo" className="w-[20%] xl:" />
      <p className="text-[1.5rem] sm:text-[2.4rem] xl:text-4xl absolute bottom-[18%]">
        {cardNumber.length > 0 ? cardNumber : "0000 0000 0000 0000"}
      </p>
      <div className="flex w-[90%] xl:w-[82%] items-center justify-between absolute bottom-[5%] xl:bottom-6">
        <p className="text-md md:text-lg font-medium opacity-[85%]">
          {name.length > 0 ? name : "Jane Appleseed"}
        </p>
        <p className="text-md md:text-lg opacity-[85%]">
          {month.length > 0 ? month : "00"}/{year.length > 0 ? year : "00"}
        </p>
      </div>
    </div>
  );
}
