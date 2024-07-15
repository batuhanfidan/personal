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
  const language = useSelector((state) => state.language);
  const darkMode = useSelector((state) => state.darkMode);

  const isLoading = allData.length === 0;

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="dark:text-white text-black">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <OpenPage allData={allData} />
            <Skills allData={allData} />
            <Profile allData={allData} />
            <Projects allData={allData} />
            <Footer allData={allData} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;
