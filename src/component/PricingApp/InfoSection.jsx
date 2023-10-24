import check from "../../assets/pricingApp/icon-check.svg";

export default function InfoSection() {
  const items = ["Unlimited websites", "100% data ownership", "Email reports"];

  return (
    <div className="flex flex-col md:flex-row gap-2 md:gap-10 p-6 md:p-10">
      <div className="flex flex-col mb-4 md:mb-0 gap-2 w-full text-center md:text-left text-sm">
        {items.map((item) => (
          <div key={item} className="flex justify-center md:justify-start">
            <div className="flex items-center mr-3">
              <img src={check} alt="check" className="w-3 h-3" />
            </div>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full">
        <button className="bg-[#293356] px-8 text-xs py-3 rounded-full text-[#bdccff] hover:text-white">
          Start my trial
        </button>
      </div>
    </div>
  );
}
