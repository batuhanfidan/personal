import { useSelector } from "react-redux";
import Project from "./project";
import Frames from "./frame";

export default function Projects({ allData }) {
  const projects = allData.projects;
  const language = useSelector((state) => state.language);

  return (
    <div className="dark:bg-[#484148]">
      <div className="flex flex-col items-center pt-[90px] gap-[60px]  ">
        <h1 className="font-Inter font-medium text-[48px] ">
          {language === "turkish" ? "Projeler" : "Projects"}
        </h1>
        <div className="flex justify-center gap-28">
          {projects.map((item, index) => (
            <Project key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
