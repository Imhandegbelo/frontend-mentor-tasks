export default function Toggle({ ischecked, onchange }) {
  return (
    <label className="mx-auto relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={ischecked}
        onChange={onchange}
        className="sr-only"
      />
      <span className="flex items-center text-[15px] mr-36 md:mr-0 font-bold text-gray-400">
        Dark Mode
      </span>
      <span
        className={`mx-4 flex h-8 w-[60px]  items-center rounded-full p-1 duration-200
            ${ischecked ? "bg-gradient-to-r from-[#388fe6] to-[#3dd981]" : "bg-gray-300"}
          `}
      >
        <span
          className={`h-6 w-6 rounded-full bg-white duration-200 ${
            ischecked ? "translate-x-[28px]" : ""
          }`}
        ></span>
      </span>
    </label>
  );
}
