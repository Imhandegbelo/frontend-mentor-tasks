import React from "react";

export default function BigCard({
  photo,
  user,
  count,
  text,
  gain,
  index,
  icon,
  darkMode,
}) {
  return (
    <div className={`pt-[0.4rem] w-full rounded cursor-pointer ${
      index === 0
      ? "bg-[#198ff5]"
      : index === 1
      ? "bg-[#1ca0f2]"
      : index === 2
      ? "bg-gradient-to-r from-[#fdc468] to-[#de4a96]"
      : "bg-[#c4032a]"
    }`}>
    <div
      className={`py-6 text-center rounded-b ${
        darkMode
          ? "bg-slate-800 text-white hover:bg-slate-700"
          : "bg-gray-100 text-[#1f2029] hover:bg-gray-200"
      } ${
        ""
        // index === 0
        //   ? "border-[#198ff5]"
        //   : index === 1
        //   ? "border-[#1ca0f2]"
        //   : index === 2
        //   ? "border-[]"
        //   : "border-[#c4032a]"
      }`}
    >
      <div className="flex justify-center items-center gap-2">
        <img src={photo} alt="" className="h-5" />
        <p className="">{user}</p>
      </div>
      <div className="py-4">
        <h2 className="text-5xl font-bold">{count}</h2>
        <p className="mt-2 uppercase text-sm text-gray-400 font-bold tracking-[0.7rem]">
          {text}
        </p>
      </div>
      {gain > 0 ? (
        <div className="flex items-center justify-center gap-3">
          <img src={icon[0]} alt="" />
          <span className="text-emerald-600">{gain} Today</span>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3">
          <img src={icon[1]} alt="" />
          <span className="text-rose-800">{Math.abs(gain)} Today</span>
        </div>
      )}
    </div>
    </div>
  );
}
