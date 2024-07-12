import { ENGLISH, TURKISH, TOGGLE_DARK_MODE } from "../actions/action";
import { data } from "../../data";

const initialLanguage = localStorage.getItem("language") || "turkish";
const initialDarkMode = localStorage.getItem("darkMode") === "true" || false;

const initialState = {
  language: initialLanguage,
  darkMode: initialDarkMode,
  data: initialLanguage === "turkish" ? data.turkish : data.english,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TURKISH:
      return { ...state, data: data.turkish, language: "turkish" };
    case ENGLISH:
      return { ...state, data: data.english, language: "english" };
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    default:
      return state;
  }
};
