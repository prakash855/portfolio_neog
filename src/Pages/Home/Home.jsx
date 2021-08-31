import React from "react";
import About from "../About/About";
import Intro from "./Intro/Intro";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import Data from "./project&blog.json";

const Home = () => {
  return (
    <div id="home">
      <Intro />
      <About />
      {Data.map((data) => (
        <ProjectInfo
          name={data.name}
          desc={data.desc}
          button={data.button}
          page={data.page}
        />
      ))}
    </div>
  );
};

export default Home;
