import { useSelector } from "react-redux";
import Frames from "./frame";
import "./project.css";

export default function Project({ item }) {
  const library = Object.values(item.used);
  const link = item.link;
  const language = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div>
      <div>
        <div
          className="w-full max-w-[666px] h-[650px] md:h-[890px] rounded-2xl flex flex-col gap-8 p-[20px] md:pl-[50px] md:pt-[50px] card"
          style={
            darkMode
              ? { backgroundColor: item.darkBackground }
              : { backgroundColor: item.background }
          }
        >
          <p className="font-PlayfairDisplay font-bold text-[28px] md:text-[39px]">
            {item.name}
          </p>
          <p className="font-Inter text-[16px] md:text-[22px] w-full md:w-[520px]">
            {item.about}
          </p>
          <Frames libraries={[library]} />
          <div className="font-semibold text-[20px] md:text-[26px] flex justify-between">
            <p>View on Github</p>
            <a
              href={link}
              className="font-semibold text-[20px] md:text-[26px] pr-[10px] md:pr-[50px]"
              target=":blank"
            >
              Go to app -{">"}
            </a>
          </div>
        </div>
        <div className="mt-[-210px] md:-mt-[320px]">
          <img className="w-full md:w-auto" src={item.pc} alt="PC" />
          <img
            src={item.picture}
            className="w-[300px] md:w-[470px] h-[190px] md:h-[295px] absolute mt-[-235px] md:-mt-[362px] ml-[66px] md:ml-[98px]"
            alt="Picture"
          />
        </div>
      </div>
    </div>
  );
}
