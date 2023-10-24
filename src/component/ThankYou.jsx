import illustration from "../assets/ratingApp/illustration.svg";
export default function ThankYou({ submitted, active, onclick }) {
  return (
    <div
      onClick={onclick}
      className={`${
        submitted
          ? "flex flex-col w-full sm:w-4/5 md:w-3/5 lg:w-4/12 gap-6 px-8 py-10 bg-[#252d37] rounded-3xl text-center"
          : "hidden"
      } `}
    >
      <img
        src={illustration}
        alt="illustration"
        className="w-3/5 h-auto mx-auto"
      />
      <h1 className="text-orange-400/70 text-sm py-1 px-3 rounded-l-full rounded-r-full mx-auto bg-gray-700 w-fit">
        You selected {active} out of 5
      </h1>
      <div>
        <h2 className="text-white text-md md:text-xl lg:text-2xl">
          Thank you!
        </h2>
        <p className="text-white/50 text-xs md:text-sm leading-4 pt-2">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don't hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
