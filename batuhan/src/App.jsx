import React, { useEffect } from "react";
import OpenPage from "./components/openpage/openPage";
import Skills from "./components/skills/skills";
import Profile from "./components/profile/profile";
import Projects from "./components/project/projects";
import Footer from "./components/footer/footer";
import { getDatas } from "./store/actions/action";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDatas());
  }, [dispatch]);

  const allData = useSelector((state) => state.get_data);
  const darkMode = useSelector((state) => state.darkMode);

  if (allData === null) {
    return <p>Loading...</p>;
  }

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:text-white text-black">
        <>
          <OpenPage />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
          <ToastContainer />
        </>
      </div>
    </div>
  );
};

export default App;
