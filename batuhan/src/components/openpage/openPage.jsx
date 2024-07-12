import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header/Header";
import "./openPage.css";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function OpenPage() {
  const data = useSelector((state) => state.data);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div
      className={`openPage w-[100%] h-[985px] flex flex-col items-center justify-center gap-20  ${
        darkMode ? "bg-[#333]" : "bg-[#F4F4F4]"
      }`}
    >
      <Header />
      <div className="font-Inter w-[1476px] h-[658px] flex justify-between">
        <div className="flex flex-col justify-between">
          <div className="w-[905px] h-[418px] flex flex-col gap-7">
            <p className="text-[40px] w-[118px] h-[48px]">Hi! 👋🏼</p>
            <p className="text-[56px] w-[888px] h-[342px] font-medium">
              {data.about.paragraph}
            </p>
          </div>
          <div className="information-git w-[720px] h-[164px] flex flex-col gap-5">
            <div className="flex gap-5">
              <a
                href="https://www.linkedin.com/in/batuhanfidan07/"
                target=":blank"
              >
                <FaLinkedinIn className="w-[42px] h-[45px]" />
              </a>
              <a href="https://github.com/batuhanfidan" target=":blank">
                <IoLogoGithub className="w-[45px] h-[48px]" />
              </a>
            </div>

            <div>
              <p className="text-[24px]">
                Currently <span className="text-[#AF0C48]">Freelancing </span>
                for <span className="text-[#AF0C48]">UX, UI, & Web Design</span>
                Project.
                <br />
                Invite me to join your team ->
                <span className="text-[#AF0C48]">
                  batuhanfidan07@hotmail.com
                </span>
              </p>
            </div>
          </div>
          <div className="w-[100%]">
            <div className="w-[140px] h-[78px] bg-[#EA2678] absolute  rounded-l-full  top-[710px] right-0 z-[9] "></div>
          </div>
        </div>

        <img
          src="./src/assets/projegorsel.jpg"
          className="information-image w-[450px] h-[450px] rounded-3xl  z-[2] mt-[55px]"
        />
      </div>
      <div className="w-[450px] h-[450px] bg-[#E92577] rounded-3xl absolute ml-[970px] -mt-[40px] z-[1]"></div>
    </div>
  );
}