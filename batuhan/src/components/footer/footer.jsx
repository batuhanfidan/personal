import { useSelector } from "react-redux";

export default function Footer() {
  const { language, darkMode } = useSelector((state) => state);

  return (
    <div className="w-[100%] h-[600px] flex justify-center items-center">
      <div className="w-[1010px] h-[183px] flex justify-between items-center">
        <div className="w-[700px] font-medium font-Inter text-[56px] text-right">
          {language === "english"
            ? "Let's work together on your next product."
            : "Bir sonraki projenizde beraber çalışalım."}
        </div>
        <div className="w-[210px] font-Inter text-[32px] font-medium flex flex-col">
          <a
            href=" https://github.com/batuhanfidan"
            target=":blank"
            className="text-[#1769FF]"
          >
            Github
          </a>
          <a href="">Personal Blog</a>
          <a
            href="https://www.linkedin.com/in/batuhanfidan07/"
            target=":blank"
            className="text-[#0077B5]"
          >
            Linkedin
          </a>
          <a href="" className="text-[#AF0C48]">
            Email
          </a>
        </div>
      </div>
      <div className="absolute bg-[#82BBFF] w-[367px] h-[24px] mb-9 mr-[100px] rounded-md z-[-1]"></div>
    </div>
  );
}
