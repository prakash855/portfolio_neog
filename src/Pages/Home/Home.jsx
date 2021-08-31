import React from "react";
import About from "../About/About";
import Intro from "./Intro/Intro";
import ProjectInfo from "./ProjectInfo/ProjectInfo";


const Home = () => {
  return (
    <div id="home">
        <Intro />
        <About />
        <ProjectInfo />
    </div>
  );
};

export default Home;
