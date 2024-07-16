import { useSelector } from "react-redux";
import Project from "./project";
import Frames from "./frame";
import "./project.css";

export default function Projects() {
  const allData = useSelector((state) => state.get_data);
  const projects = allData.projects;
  const text = allData.text;

  return (
    <div className="dark:bg-[#484148]">
      <div className="esnek items-center pt-[60px] md:pt-[90px] gap-[40px] md:gap-[60px] project w -[100%]">
        <h1 className="font-Inter font-medium text-[32px] md:text-[48px] text-center">
          {text.proje}
        </h1>
        <div className="esnek items-center gap-6 md:gap-10 md:flex-row md:flex-wrap md:justify-center ">
          {projects.map((item, index) => (
            <Project key={index} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
