import React, { useEffect } from "react";
import OpenPage from "./components/openpage/openPage";
import Skills from "./components/skills/skills";
import Profile from "./components/profile/profile";
import Projects from "./components/project/projects";
import Footer from "./components/footer/footer";
import { getDatas } from "./store/actions/action";
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  const allData = useSelector((state) => state.get_data);
  console.log(allData);

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
