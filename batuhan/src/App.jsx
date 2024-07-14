import React from "react";
import OpenPage from "./components/openpage/openPage";
import Skills from "./components/skills/skills";
import Profile from "./components/profile/profile";
import Frame from "./components/project/frame";
import Projects from "./components/project/projects";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <OpenPage />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
    </>
  );
};

export default App;
