import { useState } from "react";
// import Input from "../../component/Input";
// import { errorMessage, useAgeCalculatorLogic } from "./age-calculator.hooks";
import arrow from "../../assets/icon-arrow.svg";

function AgeCalculator() {
  {
    document.title = "Frontend Mentor | Age Calculator";
  }

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [DayNum, setDayNum] = useState(null);
  const [monthNum, setMonthNum] = useState(null);
  const [yearNum, setYearNum] = useState(null);
  const [dayErrorText, setDayErrorText] = useState("");
  const [monthErrorText, setMonthErrorText] = useState("");
  const [yearErrorText, setYearErrorText] = useState("");
  const [dayError, setDayError] = useState(false);
  const [monthError, setMonthError] = useState(false);
  const [yearError, setYearError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (day == "") {
      setDayErrorText("This field is required");
      setDayError(true);
    } else if (day < 1 || day > 31 || isNaN(parseInt(day))) {
      setDayErrorText("Must be a valid day");
      setDayError(true);
    } else {
      setDayError(false);
      setDayErrorText("");
    }
    if (month == "") {
      setMonthErrorText("This field is required");
      setMonthError(true);
    } else if (month < 1 || month > 12 || isNaN(parseInt(month))) {
      setMonthErrorText("Must be a valid month");
      setMonthError(true);
    } else {
      setMonthError(false);
      setMonthErrorText("");
    }
    if (year > new Date().getFullYear()) {
      setYearErrorText("Must be in the past");
      setYearError(true);
    } else if (year === "") {
      setYearErrorText("This field is required");
      setYearError(true);
    } else if (isNaN(parseInt(year))) {
      setYearError(true);
      setYearErrorText("Must be a valid year");
    } else if (year.length < 4) {
      setYearError(true);
      setYearErrorText("Must be at least 1970");
      return;
    } else {
      setYearError(false);
      setYearErrorText("");
    }

    let date1 = new Date(`${year}-${month}-${day}`);
    let today = new Date();
    if (date1 > today && today.getFullYear() == date1.getFullYear()) {
      setDayError(true);
      setMonthError(true);
      setDayErrorText("Must be in the past");
      setMonthErrorText("Must be in the past");
      return;
    }

    let years = today.getFullYear() - date1.getFullYear();
    let months = today.getMonth() - date1.getMonth();
    let days = today.getDate() - date1.getDate();

    // treat negative values
    if (days < 0) {
      months--;
      const tempDate = new Date(today.getFullYear(), today.getMonth(), 0);
      days += tempDate.getDate();
    }
    if (months < 0) {
      years--;
      months += 12;
    }
    setDayNum(days);
    setMonthNum(months);
    setYearNum(years);
  };

  return (
    <>
      <div className="bg-[#dbdbdb] p-4 md:p-0 flex flex-col justify-center h-screen max-w-[1440px] mx-auto">
        <div className="w-full md:w-3/5 bg-white rounded-br-[9rem] mx-auto relative">
          <form
            className="p-5 sm:p-6 md:p-12"
            action="#"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-4 border-b pb-12">
              <div className="flex flex-col gap-2 md:basis-1/4">
                <label
                  htmlFor="day"
                  className={`${
                    dayError ? "text-red-500" : ""
                  } text-left font-bold text-neutral-500 tracking-widest`}
                >
                  DAY
                </label>
                <input
                  type="text"
                  id="day"
                  autoFocus
                  placeholder="DD"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                  className={`w-full text-[1.5rem] md:text-[2rem] font-bold p-3 md:p-4 border ${
                    dayError ? "border-red-500" : ""
                  } rounded focus:border-rose-600`}
                />
                <small className="text-[8px] md:text-[10px] text-rose-400">
                  {dayErrorText}
                </small>
              </div>
              <div className="flex flex-col gap-2 md:basis-1/4">
                <label
                  htmlFor="month"
                  className={`${
                    monthError ? "text-red-500" : ""
                  } text-left font-bold text-neutral-500 tracking-widest`}
                >
                  MONTH
                </label>
                <input
                  type="text"
                  id="month"
                  placeholder="MM"
                  onChange={(e) => setMonth(e.target.value)}
                  className={`w-full text-[1.5rem] md:text-[2rem] font-bold p-3 md:p-4 border ${
                    monthError ? "border-red-500" : ""
                  } rounded invalid:border-rose-600`}
                />
                <small className="text-[8px] md:text-[10px] text-rose-400">
                  {monthErrorText}
                </small>
              </div>
              <div className="flex flex-col gap-2 md:basis-1/4">
                <label
                  htmlFor="year"
                  className={`${
                    yearError ? "text-red-500" : ""
                  } text-left font-bold text-neutral-500 tracking-widest`}
                >
                  YEAR
                </label>
                <input
                  type="text"
                  id="year"
                  placeholder="YYYY"
                  onChange={(e) => setYear(e.target.value)}
                  className={`w-full text-[1.5rem] md:text-[2rem] font-bold p-3 md:p-4 border ${
                    yearError ? "border-red-500" : ""
                  } rounded invalid:border-rose-600`}
                />
                <small className="text-[8px] md:text-[10px] text-rose-400">
                  {yearErrorText}
                </small>
              </div>
            </div>
            <button
              type="submit"
              className={`border-0 bg-purple-700 p-4 rounded-full flex mx-auto -mt-8 md:mt-2 md:absolute md:right-12 ${
                dayError || monthError || yearError
                  ? "top-40 md:mt-8"
                  : "top-44"
              } hover:bg-black`}
            >
              <img src={arrow} alt="arrow down" />
            </button>
          </form>
          <div className="text-4xl md:text-5xl font-extrabold text-left p-6 md:p-12">
            <h1 className="">
              <span className="text-purple-500">
                {yearNum && !dayError && !monthError && !yearError
                  ? yearNum
                  : "--"}
              </span>{" "}
              years
            </h1>
            <h1 className="">
              <span className="text-purple-500">
                {monthNum && !dayError && !monthError && !yearError
                  ? monthNum
                  : "--"}
              </span>{" "}
              months
            </h1>
            <h1 className="">
              <span className="text-purple-500">
                {DayNum && !dayError && !monthError && !yearError
                  ? DayNum
                  : "--"}
              </span>{" "}
              days
            </h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default AgeCalculator;
