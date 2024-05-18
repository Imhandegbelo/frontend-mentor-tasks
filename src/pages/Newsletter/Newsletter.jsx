import { useState } from "react";
import icon_list from "../../assets/Newsletter/icon-list.svg";
import illustration_desktop from "../../assets/Newsletter/illustration-sign-up-desktop.svg";
import illustration_mobile from "../../assets/Newsletter/illustration-sign-up-mobile.svg";
import Form from "../../component/Newsletter/Form";
import ThankYou from "../../component/Newsletter/ThankYou";

export default function Newsletter() {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const list = [
    "Product discovery and building what matters",
    "Measuring to ensure updates are a success",
    "And much more!",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "") {
      setError("Please include an email");
      return;
    } else if (
      !/^([a-z0-9_\-.]+)@([a-z0-9_\-.]+)\.([a-z]{2,5})$/i.test(email)
    ) {
      setError("Not a valid email");
      return;
    }
    setSubmitted(true);
    setError("");
  };

  const dismissMessage = () => {
    setEmail("");
    setSubmitted(false);
  };
  return (
    <div className="flex items-center justify-center w-screen bg-[#242742]">
      <div className="font-roboto flex items-center justify-center h-screen w-full max-w-[1440px] bg-[#242742]">
        {!submitted ? (
          <div className="flex flex-col lg:flex-row bg-white h-screen w-screen md:h-fit/ md:h-[59%] md:w-[64%]/ md:w-[42.6%] md:rounded-3xl p-2 py-3 text-slate-900">
            <div className="flex flex-col items-cennter gap-8 px-6 w-full">
              <div className="my-10 md:my-auto md:mx-2">
                <h1 className="font-bold text-4xl md:text-3xl">
                  Stay updated!
                </h1>
                <p className="my-2 text-xs md:text-xs">
                  Join 60,000+ product managers receiving monthly updates on:
                </p>
                <div className="grid gap-2">
                  {list.map((lk, index) => (
                    <div key={index} className="flex md:items-center gap-1">
                      <img src={icon_list} alt="list icon" className="w-3" />
                      <p className="text-[10px]">{lk}</p>
                    </div>
                  ))}
                </div>
                <Form
                  email={email}
                  error={error}
                  onsubmit={handleSubmit}
                  onchange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="w-full order-first lg:order-last">
              <img
                src={illustration_desktop}
                alt="bg"
                className="hidden lg:block rounded-2xl w-full h-full"
              />
              <img
                src={illustration_mobile}
                alt="bg"
                className="lg:hidden w-full"
              />
            </div>
          </div>
        ) : (
          <ThankYou email={email} onDismiss={dismissMessage} />
        )}
      </div>
    </div>
  );
}
