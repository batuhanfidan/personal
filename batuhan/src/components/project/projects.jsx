import { useSelector } from "react-redux";
import Project from "./project";
import Frames from "./frame";
import "./project.css";

export default function Projects({ allData }) {
  const projects = allData.projects;
  const language = useSelector((state) => state.language);

  return (
    <div className="dark:bg-[#484148]">
      <div className="flex flex-col items-center pt-[60px] md:pt-[90px] gap-[40px] md:gap-[60px] projectw -[100%]">
        <h1 className="font-Inter font-medium text-[32px] md:text-[48px] text-center">
          {language === "turkish" ? "Projeler" : "Projects"}
        </h1>
        <div className="flex flex-col items-center gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center ">
          {projects.map((item, index) => (
            <Project key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
