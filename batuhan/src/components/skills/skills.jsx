import React from "react";
import { useSelector } from "react-redux";

export default function Skills() {
  const allData = useSelector((state) => state.get_data);
  const skillTwo = allData.skills;
  const text = allData.text;

  return (
    <div>
      <div className="esnek items-center justify-center h-[656px] w-full  font-Inter gap-20 bg-white dark:bg-[#484148] md:gap-10 lg:gap-20">
        <div className="text-[32px] md:text-[48px] lg:text-[64px] font-medium dark:text-whitelightest">
          {text.skills}
        </div>
        <div className="flex justify-center flex-wrap gap-6 md:gap-10 lg:gap-12">
          {skillTwo.map((skill, index) => (
            <div
              className="esnek items-center gap-2 md:gap-4 lg:gap-6"
              key={index}
            >
              <img
                src={skill.img}
                className="w-[80px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[160px] lg:h-[160px] rounded-lg"
                alt={skill.skill}
              />
              <p className="font-medium text-[16px] md:text-s lg:text-[32px] text-gri dark:text-hex">
                {skill.skill}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="w-[70px] h-[40px] md:w-[100px] md:h-[50px] lg:w-[140px] lg:h-[65px] bg-grimsi rounded-r-full absolute ml-0 -mt-[60px] md:-mt-[80px] lg:-mt-[120px] hidden md:block"></div>
    </div>
  );
}
