import { useSelector } from "react-redux";

export default function Profile() {
  const allData = useSelector((state) => state.get_data);
  const profile = allData.profile;
  const keys = profile.keys;
  const basic = profile.basicInformation;
  const aboutMe = profile.aboutMe;

  return (
    <div>
      <div className="esnek justify-evenly items-center w-full h-auto md:h-[728px] bg-whitelightest dark:bg-[#2A262B]   z-[-1] p-4">
        <div>
          <p className="font-medium text-[32px] md:text-[48px] dark:text-white">
            {profile.profil}
          </p>
        </div>
        <div className="esnek items-center md:flex-row gap-6 md:gap-20 ">
          <div className="esnek shadow w-full md:w-[677.23px] h-auto md:h-[429px] rounded-2xl bg-white dark:bg-grimsi font-Inter gap-4 md:gap-8 p-6 md:pl-[50px] md:pt-[40px] z-[2]">
            <div>
              <p className="text-pembe text-s md:text-[32px] font-PlayfairDisplay">
                {basic.info}
              </p>
            </div>
            <div className="esnek md:flex-row gap-4 md:gap-8 dark:text-white">
              <div className="esnek font-semibold  md:text-s gap-4 md:gap-8 w-full md:w-[185px]">
                <h4>{keys.date}</h4>
                <h4>{keys.city}</h4>
                <h4>{keys.education}</h4>
                <h4 className="mt-4 md:mt-9">{keys.position}</h4>
              </div>
              <div className="esnek  md:text-s gap-4 md:gap-8 w-full md:w-[400px]">
                <h4>{basic.born}</h4>
                <h4>{basic.city}</h4>
                <h4>{basic.education}</h4>
                <sh4an className="mb-2">
                  <h4>{basic.position}</h4>
                </sh4an>
              </div>
            </div>
          </div>
          <div className="w-full md:w-[635px] h-auto md:h-[322px] dark:text-white">
            <div className="esnek text-[16px] md:text-s  gap-4 md:gap-10 justify-around">
              <div className="font-PlayfairDisplay text-s md:text-[32px] z-[2]">
                {aboutMe.text}
              </div>
              <div className="absolute w-[120px] h-[24px] rounded-md bg-[#82BBFF] -mt-[150px] md:-mt-[230px] -ml-[15px] z-[1]"></div>
              <div>{aboutMe.aboutme}</div>
              <div>{aboutMe.aboutme2}</div>
            </div>
          </div>
          <img
            src="https://i.hizliresim.com/inugpxj.png"
            className="absolute right-0 mb-[-300px] md:mb-[-600px] w-24 md:w-auto"
            alt="Profile Decoration"
          />
        </div>
      </div>
    </div>
  );
}
