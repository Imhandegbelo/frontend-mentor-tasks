import React from "react";
import cardlogo from "../../assets/InteractiveCard/card-logo.svg";

export default function CardFront({ name, cardNumber, month, year }) {
  return (
    <div className="relative bg-card-front bg-contain bg-no-repeat xl:w-[27.93rem] h-full xl:h-[15.31rem] p-6">
      <img src={cardlogo} alt="logo" />
      <p className="text-4xl absolute bottom-16">
        {cardNumber.length > 0 ? cardNumber : "0000 0000 0000 0000"}
      </p>
      <div className="flex w-[82%] items-center justify-between absolute bottom-6">
        <p className="text-lg font-medium opacity-[85%]">
          {name.length > 0 ? name : "Jane Appleseed"}
        </p>
        <p className="opacity-[85%]">
          {month.length > 0 ? month : "00"}/{year.length > 0 ? year : "00"}
        </p>
      </div>
    </div>
  );
}
