import React from "react";

export default function SmallCard({
  title,
  count,
  gain,
  photo,
  icon,
  darkMode,
}) {
  return (
    <div
      className={`p-6 rounded cursor-pointer
         ${
           darkMode
             ? "bg-slate-800 text-white hover:bg-slate-700"
             : "bg-gray-100 hover:bg-gray-200"
         }`}
    >
      <div className="flex justify-between mb-6 items-center">
        <p className={`${darkMode?"text-gray-400":"text-"}`}>{title}</p>
        <img src={photo} alt="" className="h-5" />
      </div>
      <div className="flex justify-between">
        <p className="text-5xl font-bold">{count}</p>
        <div className="flex items-center pt-3 justify-center gap-2">
          {gain > 0 ? (
            <>
              <img src={icon[0]} alt="" />
              <span className="text-emerald-600">{gain}%</span>
            </>
          ) : (
            <>
              <img src={icon[1]} alt="" />
              <span className="text-rose-800">{Math.abs(gain)}%</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
