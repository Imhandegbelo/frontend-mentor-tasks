// import Toggle from "./Toggle";

export default function BillingInfo(isChecked, onChange) {

   
  return (
    <div>
      <div className="flex items-center mb-6 pl-10 md:my-4 gap-1 text-gray-400 text-xs sm:text-sm md:text-base">
        <div className="basis-1/6"></div>
        <label className="relative inline-flex cursor-pointer select-none items-center">
          {/* <input
            type="checkbox"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
            className="sr-only"
          /> */}
          <Toggle />
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
  );
}
