import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header/Header";
import "./openPage.css";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function OpenPage() {
  const data = useSelector((state) => state.get_data);
  const language = useSelector((state) => state.language);
  const about = data.about;

  return (
    <div className="hersey">
      <div>
        <div className="esnek openPage w-full h-screen items-center justify-center gap-20 dark:bg-[#2A262B] bg-whitelightest ">
          <Header />
          <div className="esnek font-Inter w-full max-w-[1476px] h-[658px] md:flex-row justify-between px-4 md:px-0 md:text-[20px]">
            <div className="esnek justify-between md:text-[20px]">
              <div className="esnek w-full md:w-[905px] h-[418px]  gap-7">
                <p className="text-[32px] md:text-[40px] w-full md:w-[250px] h-[48px]  dark:text-white">
                  {about.selam} 👋🏼
                </p>
                <p className="text-[20px] md:text-[56px] w-full md:w-[888px] h-[342px] md:h-[20px]  font-medium z-[2] dark:text-hex ">
                  {about.paragraph}
                </p>
              </div>
              <div className="esnek information-git w-full md:w-[720px] h-[164px] gap-5 -mt-[200px] md:-mt-0">
                <div className="flex gap-5">
                  <a
                    href="https://www.linkedin.com/in/batuhanfidan07/"
                    target=":blank"
                  >
                    <FaLinkedinIn className=" icons" />
                  </a>
                  <a href="https://github.com/batuhanfidan" target=":blank">
                    <IoLogoGithub className=" icons" />
                  </a>
                </div>

                <p
                  className="freelance"
                  style={{ display: language === "english" ? "none" : "" }}
                >
                  Şu anda <span className="uı">UX, UI ve Web Tasarım </span>
                  projesinde
                  <span className="uı"> Serbest Çalışıyorum. </span>
                  <br />
                  Beni ekibinize katılmam için davet edin. -{">"}
                  <span className="uı"> batuhanfidan07@hotmail.com</span>
                </p>

                <p
                  className="freelance"
                  style={{ display: language === "turkish" ? "none" : "" }}
                >
                  Currently <span className="uı">Freelancing </span> for
                  <span className="uı">UX, UI, & Web Design </span> Project.
                  <br />
                  Invite me to join your team -{">"}
                  <span className="uı"> batuhanfidan07@hotmail.com</span>
                </p>
              </div>
              <div className="w-full">
                <div className="w-[140px] h-[78px] bg-pembe absolute rounded-l-full top-[710px] right-0 z-[9] hidden md:block"></div>
              </div>
            </div>

            <img
              src="https://i.hizliresim.com/fhi0gp7.jpg"
              className="information-image w-[350px] md:w-[450px] h-[350px] md:h-[450px] rounded-3xl z-[2] mt-[55px] "
              alt="Profile"
            />
          </div>
          <div className="w-[150px] md:w-[200px] h-[32px] md:h-[42px] bg-pembemsi rounded-md absolute z-[1] top-[350px] left-[170px] hidden md:block"></div>
          <div className="w-[350px] md:w-[450px] h-[350px] md:h-[450px] bg-pembemsi rounded-3xl absolute ml-[970px] -mt-[40px] z-[1] hidden md:block"></div>
          <div className="w-[100px] md:w-[140px] h-[100px] md:h-[140px] rounded-full bg-[#d9d9d900] dark:border-grimsi border-[21px] absolute right-[350px] top-[915px] hidden md:block"></div>
        </div>
      </div>
    </div>
  );
}
