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
    return (
      <div className="w-full h-[1080px] flex justify-center items-center">
        <div
          class="inline-block rounded-full border-2 border-rose-500 text-rose-500 hover:border-rose-600 hover:bg-rose-400 hover:bg-opacity-10 hover:text-rose-600 focus:border-rose-700 focus:text-rose-700 active:border-rose-800 active:text-rose-800 dark:border-rose-300 dark:text-rose-300 dark:hover:hover:bg-rose-300 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out focus:outline-none focus:ring-0"
          type="button"
        >
          <div
            role="status"
            class="inline-block h-3 w-3 mr-2 animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
          Loading
        </div>
      </div>
    );
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
