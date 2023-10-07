import bg from "../../assets/pricingApp/bg-pattern.svg";
import rings from "../../assets/pricingApp/pattern-circles.svg";
import check from "../../assets/pricingApp/icon-check.svg";
import { useState } from "react";

export default function PricingApp() {
  {
    document.title = "Frontend Mentor | Pricing App";
  }

  const [price, setPrice] = useState(8);
  const [views, setViews] = useState("100");
  const [percent, setPercent] = useState(50);

  const changePrice = (num) => {
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
  };

  const handleChange = (e) => {
    setPercent(e.target.value);
    changePrice(percent);
    console.log("percent: ", percent);
    console.log("price: ", price);
    console.log("Views: ", views);
  };

  return (
    <div className={`h-screen bg-slate-50`}>
      <div className="bg-blue-50 h-1/2 rounded-bl-[10rem]"></div>
      <div className="flex px-6 md:justify-center md:items-center h-screen top-0 w-full absolute z-10">
        <div className="flex flex-col sm:mx-auto pt-16 w-[36rem]">
          <div className="text-center mb-20 md:mb-20">
            <img src={rings} alt="rings" className="mx-auto" />
            <div className="-mt-24 text-center">
              <h1 className="text-black text-xl md:text-3xl font-semibold">
                Simple, traffic-based pricing
              </h1>
              <p className="w-3/5 text-sm mx-auto md:text-[15px] text-gray-400">
                Sign-up for our 30-day trial. No credit card required.
              </p>
            </div>
          </div>
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
              <input
                type="range"
                className="mt-4 md:mt-0"
                defaultValue={percent}
                onChange={handleChange}
              />
              {/* Range slider */}

              <p className="text-gray-400 mx-auto md:hidden my-4">
                <span className="font-bold text-2xl text-slate-800">
                  ${price}.00
                </span>{" "}
                / month
              </p>

              <div className="flex items-center mb-6 pl-10  md:my-4 gap-1 text-gray-400 text-xs sm:text-sm md:text-base">
                <div className="hidden md:basis-1/4"></div>
                <div>
                  <span>Monthly Billing</span>
                  <input type="checkbox" className="ml-2 mr-1" />
                </div>
                <span>Yearly Billing</span>
                <span className="p-1 md:py-1 md:px-2 text-xs text-rose-500 bg-rose-100 rounded-xl">
                  <span className="md:hidden">-</span>25% <span className="hidden md:inline">discount</span>
                </span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-2 md:gap-10 p-6 md:p-10">
              <div className="flex flex-col mb-4 md:mb-0 gap-2 w-full text-center md:text-left text-sm">
                <div className="flex justify-center md:justify-start">
                  <div className="flex items-center mr-3">
                    <img src={check} alt="check" className="w-3 h-3" />
                  </div>
                  <p>Unlimited websites</p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <div className="flex items-center mr-3">
                    <img src={check} alt="check" className="w-3 h-3" />
                  </div>
                  <p>100% data ownership</p>
                </div>
                <div className="flex justify-center md:justify-start">
                  <div className="flex items-center mr-3">
                    <img src={check} alt="check" className="w-3 h-3" />
                  </div>
                  <span>Email reports</span>
                </div>
              </div>
              <div className="flex items-center justify-center w-full">
                <button className="bg-[#293356] px-8 text-xs py-3 rounded-full text-[#bdccff] hover:text-white">
                  Start my trial
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <img src={bg} alt="background pattern" /> */}
    </div>
  );
}
