import React from "react";
import Button from "./Button";
import Input from "./Input";

export default function Form() {
  return (
    <form className="mt-24 xl:mt-0 mx-auto xl:w-3/5 xl:absolute right-[8vw] grid gap-4 p-6">
      <Input
        label="cardholder name"
        placeholder="e.g Jane Appleseed"
        name="name"
        value={name}
        onchange={(e) => setName(e.target.value)}
      />
      <Input
        label="card number"
        placeholder="e.g 1234 5678 9123 0000"
        name="card_number"
        value={cardNumber}
        onchange={handleNumberChange}
      />
      <div className="flex gap-2 xl:gap-6">
        <div className="xl:w-1/2">
          <p className="uppercase font-medium">exp. date (mm/yy)</p>
          <div className="flex gap-2">
            <Input
              label=""
              placeholder="MM"
              name="month"
              value={month}
              onchange={(e) => setMonth(e.target.value)}
            />
            <Input
              label=""
              placeholder="YY"
              name="year"
              value={year}
              onchange={(e) => setYear(e.target.value)}
            />
          </div>
        </div>

        <Input
          label="cvc"
          placeholder="e.g. 123"
          name="cvc"
          value={cvc}
          onchange={(e) => setCvc(e.target.value)}
        />
      </div>
      <Button onclick={handleSubmit} text="Confirm" />
    </form>
  );
}
