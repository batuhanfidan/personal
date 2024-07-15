import { useSelector } from "react-redux";

export default function Footer() {
  const language = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="w-full h-[600px] flex justify-center items-center dark:bg-[#484148] z-[-1]">
        <div className="w-full max-w-[1010px] h-auto lg:h-[183px] flex flex-col lg:flex-row justify-between items-center px-4 lg:px-0">
          <div className="w-full lg:w-[700px] font-medium font-Inter text-[32px] lg:text-[56px] text-center lg:text-right z-[2] mb-6 lg:mb-0">
            {language === "english"
              ? "Let's work together on your next product."
              : "Bir sonraki projenizde beraber çalışalım."}
          </div>
          <div className="w-full lg:w-[210px] font-Inter text-[24px] lg:text-[32px] font-medium flex flex-col items-center lg:items-start space-y-2 lg:space-y-0 gap-0  z-[2]">
            <a
              href="https://github.com/batuhanfidan"
              target=":blank"
              className="text-[#1769FF] dark:text-[#82BBFF]"
            >
              Github
            </a>
            <a href="#">Personal Blog</a>
            <a
              href="https://www.linkedin.com/in/batuhanfidan07/"
              target=":blank"
              className="text-[#0077B5] dark:text-[#419CCB]"
            >
              Linkedin
            </a>
            <section>
              <div className="relative inline-block group transition-all">
                <a href="#" className="text-[#AF0C48] dark:text-[#EA2678]">
                  Email
                </a>
                <span className="absolute left-full top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-x-2 duration-700 text-sm">
                  batuhanfidan07@hotmail.com
                </span>
              </div>
            </section>
          </div>
        </div>
        <div className="absolute bg-[#82BBFF] w-[250px] lg:w-[367px] h-[24px] mb-9 mr-[50px] lg:mr-[100px] rounded-md z-[1] hidden md:block"></div>
      </div>
    </div>
  );
}
