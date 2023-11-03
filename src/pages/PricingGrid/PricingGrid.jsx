import React, { useState } from "react";
import Toggle from "../../component/PricingGrid/Toggle";
import bg_top from "../../assets/pricingGrid/bg-top.svg";
import bg_bottom from "../../assets/pricingGrid/bg-bottom.svg";

export default function PricingGrid() {
  const [isChecked, setIsChecked] = useState(false);

  // const data = [{title:"",price:"",description:[""],}]
  return (
    <div className="flex bg-gray-50 justify-center h-screen w-screen">
      {/* Bg graphics starts */}
      <img src={bg_top} alt="" className="absolute top-0 right-0" />
      <img src={bg_bottom} alt="" className="absolute bottom-0 left-0" />
      {/* Bg graphics Ends */}

      <div className="flex w-full max-w-[1440px] justify-center items-center border">
        <div className="flex flex-col">
          <div className="text-center">
            <h1 className="text-gray-500 font-bold">Our Pricing</h1>
            <Toggle
              onchange={() => setIsChecked(!isChecked)}
              ischecked={isChecked}
            />
          </div>

          <div className="flex h-[400px] border ">
            <Card />
            <Card />
            <Card />
            {/* <div className=""></div>
            <div className=""></div>
            <div className=""></div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
 
function Card() {
  return (
    <div className="grid w-[30vh] text-center shadow-lg p-6 bg-white rounded-lg">
      <h2 className="">Basic</h2>
      <p className="">$666.34</p>
      <div className="grid border-t p-2">
        <p className="border-b">500 GB Storage</p>
        <p className="border-b">2 Users Allowed</p>
        <p className="border-b">Send up to 3 GB</p>
      </div>
      <Button isWhite={false} />
    </div>
  );
}

function Button(isWhite) {
  return (
    <button
      className={`rounded-lg uppercase font-bold border border-white text-sm ${
        isWhite == true
          ? "bg-white text-[#696fdd] hover:border-[#696fdd]"
          : "text-white bordcer-[#696fdd] bg-gradient-to-r from-[#a3a8f0] to-[#696fdd] hover:bg-none hover:border-[#696fdd] hover:transition-all hover:duration-800 hover:text-[#696fdd]"
      } py-`}
    >
      Learn More
    </button>
  );
}
