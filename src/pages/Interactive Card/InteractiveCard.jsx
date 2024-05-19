import React, { useState } from "react";
import Input from "../../component/InteractiveCard/Input";
import Button from "../../component/InteractiveCard/Button";
import completed from "../../assets/InteractiveCard/icon-complete.svg";
import CardFront from "../../component/InteractiveCard/CardFront";
import CardBack from "../../component/InteractiveCard/CardBack";
import Form from "../../component/InteractiveCard/Form";

export default function InteractiveCard() {
  {
    document.title = "Frontend Mentor | Card Details";
  }

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardError, setCardError] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [MMYYError, setMMYYError] = useState("");
  const [cvc, setCvc] = useState("");
  const [cvcError, setCvcError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNumberChange = (e) => {
    setCardNumber(splitCardNumber(e.target.value));
  };

  const splitCardNumber = (cardNumber) => {
    let closeSpace = cardNumber?.match?.(/\d+/gi)?.join?.("");
    let numArr = closeSpace?.match?.(/.{1,4}/g);
    return numArr?.join?.(" ") ?? "";
  };

  const reset = () => {
    setName("");
    setCardNumber("");
    setCvc("");
    setYear("");
    setMonth("");
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const card_string = cardNumber.split(" ").join("");

    // Name
    if (name.trim() == "") {
      setNameError("Can't be blank");
      return;
    } else if (!/^[A-Za-z]{2,}\s[A-Za-z]{2,}$/.test(name)) {
      setNameError("Enter first name and last name");
      return;
    } else setNameError("");
    // CardNumber
    if (card_string.length < 16) {
      setCardError("Invalid card number");
      return;
    } else if (Number("9999999999999999") < Number(card_string)) {
      setCardError("Card number greater than 16 digits");
      return;
    } else setCardError("");
    // Cvc
    if (cvc.trim() === "") {
      setCvcError("Can't be blank");
      return;
    } else if (!/^\d+$/.test(cvc)) {
      setCvcError("Only digits allowed");
      return;
    } else if (!/^\d{3}$/.test(cvc)) {
      setCvcError("Must be 3 digits");
    } else {
      setCvcError("");
    }
    // Month and Year
    if (
      !/^\d+$/.test(month) ||
      !/^\d+$/.test(year) ||
      Number(month) < 1 ||
      Number(month) > 12 ||
      Number(year) < 23 ||
      Number(year) > 35 ||
      Number(month) < new Date().getMonth() + 1
      // Number(year)
    ) {
      setMMYYError("Invalid dates");
      return;
    } else {
      setMMYYError("");
    }

    setSubmitted(true);
  };

  return (
    <div className="h-screen lg:h-full w-screen font-Space+Grotesk">
      <div className="flex flex-col xl:flex-row items-center justify-center text-md">
        <div className="relative w-full h-[18rem] sm:h-[22rem] xl:w-1/3 bg-card-mobile xl:bg-card-desktop bg-cover xl:h-[880px]">
          <div className="xl:absolute xl:top-[20%] w-[60%] mx-auto xl:w-full h-fit left-[6vw] text-white">
            <CardFront
              cardNumber={cardNumber}
              month={month}
              year={year}
              name={name}
              className=""
            />
            <CardBack cvc={cvc} className="" />
          </div>
        </div>
        <div className="relative w-full xl:basis-2/3 flex items-center xl:h-screen">
          {!submitted && (
            <form className="mt-24 sm:mt-36 xl:mt-0 mx-auto xl:w-3/5 xl:absolute right-[8vw] grid gap-4 p-6">
              <Input
                label="cardholder name"
                placeholder="e.g Jane Appleseed"
                name="name"
                error={nameError}
                value={name}
                onchange={(e) => setName(e.target.value)}
              />
              <Input
                label="card number"
                placeholder="e.g 1234 5678 9123 0000"
                name="card_number"
                error={cardError}
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
                      error={MMYYError}
                      value={month}
                      onchange={(e) => setMonth(e.target.value)}
                    />
                    <Input
                      label=""
                      placeholder="YY"
                      name="year"
                      error=""
                      value={year}
                      onchange={(e) => setYear(e.target.value)}
                    />
                  </div>
                </div>

                <Input
                  label="cvc"
                  placeholder="e.g. 123"
                  name="cvc"
                  error={cvcError}
                  value={cvc}
                  onchange={(e) => setCvc(e.target.value)}
                />
              </div>
              <Button onclick={handleSubmit} text="Confirm" />
            </form>
            // <Form/>
          )}
          {submitted && (
            <div
              className={`flex flex-col mt-36 xl:mt-0 gap-6 w-3/5 absolute right-[8vw]`}
            >
              <img
                src={completed}
                alt="check success"
                className="mx-auto w-24"
              />
              <h1 className="mx-auto font-medium text-2xl uppercase">
                Thank you!
              </h1>
              <p className="mx-auto text-gray-500">
                We've added your card detail
              </p>
              <Button onclick={reset} text="Continue" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
