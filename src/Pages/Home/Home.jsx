import React from "react";
import { Card } from "antd";
import About from "../About/About";
import Intro from "./Intro/Intro";
import ProjectInfo from "./ProjectInfo/ProjectInfo";
import Data from "./project&blog.json";

const Home = () => (
  <div id="home">
    <Intro />
    <About />
    <Card>
      {Data.map((data, key) => (
        <ProjectInfo key={key} {...data} />
      ))}
    </Card>
  </div>
);

export default Home;
