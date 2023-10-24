import { useState } from "react";
import BillingInfo from "../../component/PricingApp/BillingInfo";
import InfoSection from "../../component/PricingApp/InfoSection";
import Header from "../../component/PricingApp/Header";
// import "./style.css";

export default function PricingApp() {
  {
    document.title = "Frontend Mentor | Pricing App";
  }

  const [price, setPrice] = useState(8);
  const [views, setViews] = useState("100");
  const [percent, setPercent] = useState(50);
  const [isChecked, setIsChecked] = useState(false);

  const changePrice = (num) => {
    const discount = 0.25;
    if (isChecked) {
      if (num <= 20) {
        setPrice(8 - discount * 8);
        setViews("10K");
      } else if (num <= 40) {
        setPrice(12 - discount * 12);
        setViews("50K");
      } else if (num <= 60) {
        setPrice(16 - discount * 16);
        setViews("100K");
      } else if (num <= 80) {
        setPrice(24 - discount * 24);
        setViews("500K");
      } else {
        setPrice(32 - discount * 32);
        setViews("1M");
      }
    } else {
      if (num <= 20) {
        setPrice(8);
        setViews("10K");
      } else if (num <= 40) {
        setPrice(12);
        setViews("50K");
      } else if (num <= 60) {
        setPrice(16);
        setViews("100K");
      } else if (num <= 80) {
        setPrice(24);
        setViews("500K");
      } else {
        setPrice(32);
        setViews("1M");
      }
    }
  };

  const handleChange = (e) => {
    setPercent(e.target.value);
    changePrice(percent);
  };

  function handleChecked() {
    setIsChecked(!isChecked);
  }

  return (
    <div className={`h-screen bg-slate-50 font-Manrope`}>
      <div className="bg-blue-50 h-1/2 rounded-bl-[10rem]"></div>
      <div className="flex px-6 justify-center items-center h-screen top-0 w-full absolute z-10">
        <div className="flex flex-col mx-auto w-[36rem]">
          <Header />
          <div className="bg-white shadow-2xl rounded-md pt-6 md:pt-10">
            <div className="flex flex-col border-b px-6 md:px-10">
              <div className="flex justify-between text-gray-400 md:my-4 items-center">
                <p className="font-bold mx-auto md:mx-0">{views} PAGEVIEWS</p>
                <p className="hidden md:flex">
                  <span className="font-bold text-3xl text-slate-800">
                    ${price}.00
                  </span>{" "}
                  / month
                </p>
              </div>

              {/* Range slider */}
              {/* <div className="slider_container w-full"> */}

              <input
                type="range"
                style={{ background: "white" }}
                className="slider mt-4 md:mt-0 bg-transparent"
                defaultValue={percent}
                onChange={handleChange}
                />
                {/* </div> */}
              {/* Range slider */}

              <p className="text-gray-400 mx-auto md:hidden my-4">
                <span className="font-bold text-2xl text-slate-800">
                  ${price}.00
                </span>{" "}
                / month
              </p>

              <div className="flex items-center mb-6 pl-10 md:my-4 gap-1 text-gray-400 text-xs sm:text-sm md:text-base">
                <div className="basis-1/6"></div>
                <label className="relative inline-flex cursor-pointer select-none items-center">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={handleChecked}
                    className="sr-only"
                  />
                  <span className="flex items-center text-sm font-medium text-gray-400">
                    Monthly Billing
                  </span>
                  <span
                    className={`mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                      isChecked ? "bg-[#a5f3eb]" : "bg-[#eaeefb]"
                    }`}
                  >
                    <span
                      className={`h-6 w-6 rounded-full bg-white duration-200 ${
                        isChecked ? "translate-x-[28px]" : ""
                      }`}
                    ></span>
                  </span>
                  <span className="flex items-center text-sm font-medium text-gray-400">
                    Yearly Billing
                  </span>
                </label>

                <span className="p-1 md:py-1 md:px-2 text-xs text-rose-500 bg-rose-100 rounded-xl">
                  <span className="md:hidden">-</span>25%{" "}
                  <span className="hidden md:inline">discount</span>
                </span>
              </div>
            </div>
            <InfoSection />
          </div>
        </div>
      </div>
    </div>
  );
}
