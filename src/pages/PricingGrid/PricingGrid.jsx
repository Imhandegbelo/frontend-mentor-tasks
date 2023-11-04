import React, { useState } from "react";
import Toggle from "../../component/PricingGrid/Toggle";
import bg_top from "../../assets/pricingGrid/bg-top.svg";
import bg_bottom from "../../assets/pricingGrid/bg-bottom.svg";
import Card from "../../component/PricingGrid/Card";
import data from "../../data/pricingGridData.json";

export default function PricingGrid() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="relative flex justify-center bg-[#f5f5ff] justify-center font-Montserrat font-bold lg:h-screen w-screen overflow-clip">
      {/* Bg graphics starts */}
      <img
        src={bg_top}
        alt=""
        className="absolute -top-10 -right-[10rem] lg:top-0 lg:-right-10"
      />
      <img
        src={bg_bottom}
        alt=""
        className="absolute -bottom-10 -left-10 lg:bottom-0 lg:left-0"
      />
      {/* Bg graphics Ends */}

      <div className="flex w-full max-w-[1440px] justify-center z-50">
        <div className="flex flex-col gap-10 lg:gap-16 w-full px-6 py-10 sm:px-10 sm:py-16 max-h-[60vh]">
          <div className="text-center">
            <h1 className="text-gray-500 pb-6 font-bold text-3xl">
              Our Pricing
            </h1>
            <Toggle
              onchange={() => setIsChecked(!isChecked)}
              ischecked={isChecked}
            />
          </div>

          <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row justify-center items-center w-full mx-auto h-[400pxc] h-fit shadow-2xlx z-50">
            {data.map((single_data, index) => (
              <Card
                key={single_data.title}
                data={single_data}
                ischecked={isChecked}
                className={`shadow-lg
                  ${
                    index === 0
                      ? "rounded-xl lg:rounded-none lg:rounded-l-xl"
                      : index === 2
                      ? "rounded-xl lg:rounded-none lg:rounded-r-xl"
                      : "rounded-xl lg:rounded-lg"
                  }
                `}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
