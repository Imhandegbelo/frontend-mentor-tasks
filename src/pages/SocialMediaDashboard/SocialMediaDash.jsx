import { useState } from "react";
import icon_down from "../../assets/SocialMediaDashboard/icon-down.svg";
import icon_up from "../../assets/SocialMediaDashboard/icon-up.svg";
import Toggle from "../../component/SocialMediaDashboard/Toggle";
import BigCard from "../../component/SocialMediaDashboard/BigCard";
import SmallCard from "../../component/SocialMediaDashboard/SmallCard";
import bigData from "../../data/bigSocialCard";
import smallData from "../../data/smallSocialCard";

export default function SocialMediaDash() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="flex justify-center w-screen xl:h-screen bg-white">
      <div
        className={`w-full max-w-[1440px] ${
          darkMode ? "bg-[#1f2029]" : ""
        } px-6 sm:px-8 md:px-10 lg:px-24 xl:px-36 py-10`}
      >
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="font-bold">
            <h1 className={`text-3xl ${darkMode ? "text-white" : "text-[#1f2029]"}`}>
              Social Media Dashboard
            </h1>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Total Followers: {"23,004"}
            </p>
          </div>
          <div>
            <Toggle
              ischecked={darkMode}
              onchange={() => setDarkMode(!darkMode)}
            />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10">
          {bigData.map((detail, index) => (
            <BigCard
              key={index}
              index={index}
              photo={detail.photo}
              user={detail.username}
              count={detail.count}
              text={detail.text}
              gain={detail.gain}
              darkMode={darkMode}
              icon={[icon_up, icon_down]}
            />
          ))}
        </div>
        <div>
          <h2
            className={`mb-4 text-3xl font-bold ${
              darkMode ? "text-white" : "text-[#1f2029]"
            }`}
          >
            Overview - Today
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {smallData.map((detail, index) => (
              <SmallCard
                key={index}
                title={detail.title}
                count={detail.number}
                photo={detail.photo}
                gain={detail.gain}
                darkMode={darkMode}
                icon={[icon_up, icon_down]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
