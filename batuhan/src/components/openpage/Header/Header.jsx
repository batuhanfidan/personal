import { useDispatch, useSelector } from "react-redux";

import "./Header.css";
import {
  setEnglish,
  setTurkish,
  toggleDarkMode,
} from "../../../store/actions/action";

export default function Header() {
  const dispatch = useDispatch();
  const { language, darkMode } = useSelector((state) => state);

  const handleLanguageChange = (lang) => {
    if (lang === "turkish") {
      dispatch(setTurkish());
    } else {
      dispatch(setEnglish());
    }
  };

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <div className="text-[20px] font-bold font-Inter w-[1476px] flex justify-end items-center gap-9">
      <div className="absolute w-[148px] h-[148px] bg-[#D9D9D9] rounded-full left-[570px] -top-[60px]"></div>
      <div className="flex justify-end items-center gap-4">
        <label className="switch">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          <span className="slider"></span>
        </label>
        <p>{darkMode ? "DARK " : "LIGHT "}MODE</p>
      </div>
      <p>I</p>
      <div>
        <button
          className=" border-[none] bg-transparent"
          onClick={() =>
            handleLanguageChange(language === "turkish" ? "english" : "turkish")
          }
        >
          {language === "turkish" ? (
            <>
              SWITCH TO <span className="text-[#E92577]">ENGLISH </span>{" "}
            </>
          ) : (
            <>
              <span className="text-[#E92577]">TÜRKÇE</span>'YE GEÇ{" "}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
