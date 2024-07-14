import React from "react";
import { useSelector } from "react-redux";

export default function Skills() {
  const allData = useSelector((state) => state.get_data);
  console.log(allData);
  const data = useSelector((state) => state.data);
  console.log(data);
  const skills = useSelector((state) => state.data.skills);
  const { language, darkMode } = useSelector((state) => state);

  return (
    <div className="h-[656px] w-[100%] flex flex-col items-center justify-center font-Inter gap-[80px]">
      <div className="text-[64px] font-medium">
        {language === "turkish" ? "Yetenekler" : "Skills"}
      </div>
      <div className="flex gap-[3rem] ">
        {skills.map((skill, index) => (
          <>
            <div className="flex flex-col items-center gap-[10px] " key={index}>
              <img
                src={skill.img}
                key={index}
                className="w-[160px] h-[160px] rounded-[8px]"
              />
              <p className="font-medium text-[32px] text-[#777777]" key={index}>
                {skill.skill}{" "}
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
