import React from "react";
import { useSelector } from "react-redux";

export default function Skills({ allData }) {
  const skillTwo = allData.skills;
  const language = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-[656px] w-full flex flex-col items-center justify-center font-Inter gap-20 bg-white dark:bg-[#484148] md:gap-10 lg:gap-20">
        <div className="text-[32px] md:text-[48px] lg:text-[64px] font-medium dark:text-[#F4F4F4]">
          {language === "turkish" ? "Yetenekler" : "Skills"}
        </div>
        <div className="flex flex-wrap gap-6 md:gap-10 lg:gap-12 justify-center">
          {skillTwo.map((skill, index) => (
            <div
              className="flex flex-col items-center gap-2 md:gap-4 lg:gap-6"
              key={index}
            >
              <img
                src={skill.img}
                className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] rounded-[8px]"
                alt={skill.skill}
              />
              <p className="font-medium text-[16px] md:text-[24px] lg:text-[32px] text-[#777777] dark:text-[#D9D9D9]">
                {skill.skill}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[70px] h-[40px] md:w-[100px] md:h-[50px] lg:w-[140px] lg:h-[65px] bg-[#525252] rounded-r-full absolute ml-0 -mt-[60px] md:-mt-[80px] lg:-mt-[120px] hidden md:block"></div>
    </div>
  );
}
