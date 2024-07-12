import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTurkish, setEnglish, toggleDarkMode } from "./store/actions/action";
import OpenPage from "./components/openpage/openPage";

const App = () => {
  return (
    <>
      <OpenPage />
    </>
  );
};

export default App;
