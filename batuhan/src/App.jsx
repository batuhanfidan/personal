import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTurkish, setEnglish, toggleDarkMode } from "./store/actions/action";
import OpenPage from "./components/openpage/openPage";
import Skills from "./components/skills/skills";
import Profile from "./components/profile/profile";

const App = () => {
  return (
    <>
      <OpenPage />
      <Skills />
      <Profile />
    </>
  );
};

export default App;
