import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTurkish, setEnglish, toggleDarkMode } from "./store/actions/action";
import OpenPage from "./components/openpage/openPage";
import Skills from "./components/skills/skills";

const App = () => {
  return (
    <>
      <OpenPage />
      <Skills />
    </>
  );
};

export default App;
