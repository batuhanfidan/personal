import { useSelector } from "react-redux";
import Project from "./project";
import Frames from "./frame";

export default function Projects() {
  const projects = useSelector((state) => state.data.projects);
  const { language, darkMode } = useSelector((state) => state);

  return (
    <div className="flex flex-col items-center mt-[90px] gap-[60px]">
      <h1 className="font-Inter font-medium text-[48px] ">
        {language === "turkish" ? "Projeler" : "Projects"}
      </h1>
      <div className="flex justify-center gap-28">
        {projects.map((item, index) => (
          <Project key={index} item={item} />
        ))}
      </div>
    </div>
  );
}
