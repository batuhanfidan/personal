import { useSelector } from "react-redux";
import Frames from "./frame";

export default function Project({ item }) {
  const library = Object.values(item.used);
  const link = item.link;
  const language = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.darkMode);

  return (
    <div>
      <div>
        <div
          className="w-[666px] h-[890px] rounded-2xl flex flex-col gap-8 pl-[50px] pt-[50px] "
          style={
            darkMode
              ? { backgroundColor: item.darkBackground }
              : { backgroundColor: item.background }
          }
        >
          <p className="font-PlayfairDisplay font-bold text-[39px]">
            {item.name}
          </p>
          <p className="font-Inter text-[22px] w-[520px]">{item.about}</p>
          <Frames libraries={[library]} />
          <div className="font-semibold text-[26px] flex justify-between ">
            <p>View on Github</p>
            <a
              href={link}
              className="font-semibold text-[26px] pr-[50px]"
              target=":blank"
            >
              Go to app ->
            </a>
          </div>
        </div>
        <div className="-mt-[320px]">
          <img className="" src={item.pc}></img>
          <img
            src={item.picture}
            className="w-[470px] h-[295px] absolute -mt-[362px] ml-[98px] "
          />
        </div>
      </div>
    </div>
  );
}
