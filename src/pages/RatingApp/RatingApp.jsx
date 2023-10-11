import iconStar from "../../assets/ratingApp/icon-star.svg";

import { useState } from "react";
import ThankYou from "../../component/ThankYou";

export default function RatingApp() {
  const [active, setActive] = useState(-1);
  const [submitted, setSubmitted] = useState(false);
  const stars = [1, 2, 3, 4, 5];

  function handleSubmit() {
    if (active >= 1 ) {
      setSubmitted(true);
    } else {
      alert("You have not made a selection!");
      setSubmitted(false);
    }
    console.log("clicked");
  }

  return (
    <div className="bg-[#121417] h-screen p-4 flex justify-center items-center">
      <div
        className={`${
          submitted
            ? "hidden"
            : "flex flex-col w-full sm:w-4/5 md:w-3/5 lg:w-4/12 gap-6 p-8 bg-[#252d37] rounded-3xl"
        } `}
      >
        <button className="flex justify-center items-center rounded-full w-12 h-12 bg-gray-700">
          <img src={iconStar} alt="star" />
        </button>

        <div>
          <h1 className="text-white text-md md:text-xl lg:text-2xl">
            How did we do?
          </h1>
          <p className="text-white/50 text-xs md:text-sm leading-4 pt-2">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </div>
        <div className="flex justify-between">
          {stars.map((star) => (
            <button
              onClick={() => setActive(star)}
              className={`items-center w-12 h-12 rounded-full ${
                active === star
                  ? "bg-gray-400 text-white"
                  : "bg-gray-700 text-white/50"
              } hover:bg-orange-500 hover:text-white`}
            >
              {star}
            </button>
          ))}
        </div>
        <div className="text-white">
          <button
            onClick={handleSubmit}
            className="w-full rounded-l-full rounded-r-full bg-orange-500 py-2 hover:bg-white hover:text-orange-500"
          >
            SUBMIT
          </button>
        </div>
      </div>
      <ThankYou submitted={submitted} active={active} />
    </div>
  );
}
