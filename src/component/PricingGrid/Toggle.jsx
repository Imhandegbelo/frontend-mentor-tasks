export default function Toggle({ ischecked, onchange }) {
  return (
    <label className="mx-auto relative inline-flex cursor-pointer select-none items-center">
      <input
        type="checkbox"
        checked={ischecked}
        onChange={onchange}
        className="sr-only"
      />
      <span className="flex items-center text-[15px] font-medium text-gray-400">
        Annually
      </span>
      <span
        className="mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200
          bg-gradient-to-br from-[#a3a8f0] to-[#696fdd]
        "
      >
        <span
          className={`h-6 w-6 rounded-full bg-white duration-200 ${
            ischecked ? "translate-x-[28px]" : ""
          }`}
        ></span>
      </span>
      <span className="flex items-center text-[15px] font-medium text-gray-400">
        Monthly
      </span>
    </label>
  );
}
