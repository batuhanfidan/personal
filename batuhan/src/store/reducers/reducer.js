import {
  ENGLISH,
  TURKISH,
  TOGGLE_DARK_MODE,
  GET_DATA,
} from "../actions/action";
import { data } from "../../data";

const initialLanguage = localStorage.getItem("language") || "turkish";
const initialDarkMode = localStorage.getItem("darkMode") === "true" || false;

const initialState = {
  language: initialLanguage,
  darkMode: initialDarkMode,
  data: initialLanguage === "turkish" ? data.turkish : data.english,
  get_data: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TURKISH:
      return { ...state, data: data.turkish, language: "turkish" };
    case ENGLISH:
      return { ...state, data: data.english, language: "english" };
    case TOGGLE_DARK_MODE:
      return { ...state, darkMode: !state.darkMode };
    case GET_DATA:
      return {
        ...state,
        get_data:
          state.language === "english"
            ? action.payload[0].english
            : action.payload[0].turkish,
      };
    default:
      return state;
  }
};
