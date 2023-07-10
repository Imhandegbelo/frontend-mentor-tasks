// import { useState } from "react";
import Input from "../component/Input";
import { errorMessage, useAgeCalculatorLogic } from "./age-calculator.hooks";

export default function AgeCalculator() {
  const { values, touched, hasError, handleBlur, handleChange } =
    useAgeCalculatorLogic;

  return (
    <div className="bg-[#dbdbdb] w-full">
      <form className="flex">
        <Input
          id="day"
          label="DAY"
          name="day"
        //   value={values.day}
          error={errorMessage({
            name: "day",
            touched,
            values,
            message: "This field is required",
          })}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="DD"
        />
        <Input
          id="month"
          label="MONTH"
          name="month"
          value={values.month}
          error={errorMessage({
            name: "month",
            touched,
            values,
            message: "This field is required",
          })}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="MM"
        />
        <Input
          id="year"
          label="YEAR"
          name="year"
          value={values.year}
          error={errorMessage({
            name: "year",
            touched,
            values,
            message: "This field is required",
          })}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="YYYY"
        />
      </form>
      <div>
        {/* "" */}
        <h1>DAY</h1>
        <h1>MONTH</h1>
        <h1>YEAR</h1>
      </div>
    </div>
  );
}
