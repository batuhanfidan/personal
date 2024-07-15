import React from "react";
import { useSelector } from "react-redux";

export default function Skills({ allData }) {
  const skillTwo = allData.skills;
  const language = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-[656px] w-[100%] flex flex-col items-center justify-center font-Inter gap-[80px] bg-white dark:bg-[#484148]">
        <div className="text-[64px] font-medium dark:text-[#F4F4F4]">
          {language === "turkish" ? "Yetenekler" : "Skills"}
        </div>
        <div className="flex gap-[3rem] ">
          {skillTwo.map((skill, index) => (
            <div className="flex flex-col items-center gap-[10px]" key={index}>
              <img
                src={skill.img}
                className="w-[160px] h-[160px] rounded-[8px]"
              />
              <p className="font-medium text-[32px] text-[#777777] dark:text-[#D9D9D9]">
                {skill.skill}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[140px] h-[65px] bg-[#525252] rounded-r-full absolute ml-0 -mt-[120px]"></div>
    </div>
  );
}
