import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

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
  const darkToast = () =>
    toast.info(
      language == "turkish" ? "Tema değiştirildi!" : "Theme has changed!",
      {
        theme: darkMode ? "light" : "dark",
        autoClose: 1000,
      }
    );
  const langToast = () => {
    toast.info(
      language === "english" ? "Türkçe'ye geçildi" : "Switched to English",
      {
        theme: darkMode ? "dark" : "light",
        autoClose: 1000,
      }
    );
  };
  const handleLanguageChange = (lang) => {
    if (lang === "turkish") {
      dispatch(setTurkish());
      dispatch(getDatas());
      langToast();
    } else {
      dispatch(setEnglish());
      dispatch(getDatas());
      langToast();
    }
  };

  const handleDarkModeToggle = () => {
    darkToast();
    dispatch(toggleDarkMode());
  };

  return (
    <>
      <div className="text-[20px] font-bold font-Inter w-[75%] flex justify-end items-center gap-9 header">
        <div
          className={`absolute w-[148px] h-[148px] bg-hex dark:bg-grimsi rounded-full left-[570px] -top-[60px] CEMBER hidden md:block`}
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
          <p className="text-gri dark:text-hex">
            {language === "english"
              ? darkMode
                ? "DARK MODE "
                : "LIGTH MODE "
              : darkMode
              ? "KARANLIK MOD"
              : "AYDINLIK MOD"}
          </p>
        </div>
        <p className="text-gri">I</p>
        <div>
          <button
            className=" border-[none] bg-transparent text-gri"
            onClick={() =>
              handleLanguageChange(
                language === "turkish" ? "english" : "turkish"
              )
            }
          >
            {language === "turkish" ? (
              <>
                SWITCH TO <span className="text-purple-800">ENGLISH </span>{" "}
              </>
            ) : (
              <>
                <span className="text-purple-800">TÜRKÇE</span>'YE GEÇ{" "}
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
}
