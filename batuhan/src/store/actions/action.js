import axios from "axios";

export const TURKISH = "TURKISH";
export const ENGLISH = "ENGLISH";
export const TOGGLE_DARK_MODE = "TOGGLE_DARK_MODE";
export const GET_DATA = "GET_DATA";
export const SET_LOADING = "SET_LOADING";

export const getDatas = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://66911f0826c2a69f6e8e889c.mockapi.io/api/v1/data"
    );
    dispatch({ type: GET_DATA, payload: res.data });
  } catch (err) {
    console.log(err);
  }
};

export const setTurkish = () => {
  localStorage.setItem("language", "turkish");
  return { type: TURKISH };
};

export const setEnglish = () => {
  localStorage.setItem("language", "english");
  return { type: ENGLISH };
};

export const toggleDarkMode = () => (dispatch, getState) => {
  const currentState = getState();
  const newDarkMode = !currentState.darkMode;
  localStorage.setItem("darkMode", newDarkMode.toString());
  dispatch({ type: TOGGLE_DARK_MODE });
};
