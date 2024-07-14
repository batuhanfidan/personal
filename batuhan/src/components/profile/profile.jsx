import { useSelector } from "react-redux";

export default function Profile() {
  const profile = useSelector((state) => state.data.profile);
  const basic = profile.basicInformation;
  const aboutMe = profile.aboutMe;

  const { language, darkMode } = useSelector((state) => state);

  return (
    <div className="w-[100%] h-[728px] bg-[#F4F4F4] flex flex-col justify-evenly items-center  z-[-1]">
      <div>
        <p className="font-medium text-[48px]">
          {language === "turkish" ? "Profil" : "Profile"}
        </p>
      </div>
      <div className="flex gap-20 items-center">
        <div className="shadow w-[677.23px] h-[429px] rounded-[16px] bg-[#FFFFFF] font-Inter flex flex-col gap-8  pl-[50px] pt-[40px] z-[2]">
          <div>
            <p className="text-[#EA2678] text-[32px] font-PlayfairDisplay  ">
              {language === "english" ? "Basic Information" : "Temel Bilgiler"}
            </p>
          </div>
          <div className="flex gap-8 ">
            <div className="flex flex-col font-semibold text-[24px] gap-8 w-[185px] h-[232px]">
              <p>{language === "english" ? "Birth date" : "Doğum Tarihi"}</p>
              <p> {language === "english" ? "City" : "İkamet Şehri"}</p>
              <p> {language === "english" ? "Education" : "Eğitim Durumu"}</p>
              <p className="mt-9">
                {" "}
                {language === "english" ? "Position" : "Tercih Ettiği rol"}
              </p>
            </div>
            <div className="flex flex-col text-[24px] gap-8 w-[400px] h-[232px]">
              <p>{basic.born}</p>
              <p>{basic.city}</p>
              <p>{basic.education}</p>
              <span className="mb-2">
                <p>{basic.position}</p>
              </span>
            </div>
          </div>
        </div>
        <div className="w-[635px] h-[322px]">
          <div className=" text-[24px] flex flex-col gap-10 justify-around">
            <div className="font-PlayfairDisplay text-[32px] z-[2]">
              {language === "turkish" ? "Hakkımda" : "About me"}
            </div>
            <div className="absolute w-[120px] h-[24px] rounded-[6px] bg-[#82BBFF] -mt-[230px] -ml-[15px] z-[1]"></div>
            <div>{aboutMe.aboutme}</div>
            <div>{aboutMe.aboutme2}</div>
          </div>
        </div>
        <img
          src="./src/assets/eclipse.png"
          className="absolute right-[0] mb-[800px]"
        />
      </div>

      {/* <div className="w-[677.23px] h-[429px] rounded-[16px] bg-[#52525279] absolute z-[1] left-[260px] mt-[125px]"></div> */}
    </div>
  );
}
