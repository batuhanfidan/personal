import { useDispatch, useSelector } from "react-redux";

import "./Header.css";
import {
  getDatas,
  setEnglish,
  setTurkish,
  toggleDarkMode,
} from "../../../store/actions/action";

export default function Header() {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.darkMode);

  const handleLanguageChange = (lang) => {
    if (lang === "turkish") {
      dispatch(setTurkish());
      dispatch(getDatas());
    } else {
      dispatch(setEnglish());
      dispatch(getDatas());
    }
  };

  const handleDarkModeToggle = () => {
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <div className="text-[20px] font-bold font-Inter w-[75%] flex justify-end items-center gap-9 header">
        <div
          className={`absolute w-[148px] h-[148px] bg-[#D9D9D9] dark:bg-[#525252] rounded-full left-[570px] -top-[60px] CEMBER hidden md:block`}
        ></div>
        <div className="flex justify-end items-center gap-4">
          <label className="switch">
            <input
              type="checkbox"
              checked={!darkMode}
              onChange={handleDarkModeToggle}
            />
            <span className="slider"></span>
          </label>
          <p className="text-[#777777] dark:text-[#D9D9D9]">
            {language === "english"
              ? darkMode
                ? "LIGTH  MODE "
                : "DARK MODE "
              : darkMode
              ? "AYDINLIK MOD"
              : "KARANLIK MOD"}
          </p>
        </div>
        <p className="text-[#777777]">I</p>
        <div>
          <button
            className=" border-[none] bg-transparent text-[#777777]"
            onClick={() =>
              handleLanguageChange(
                language === "turkish" ? "english" : "turkish"
              )
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
    </>
  );
}
