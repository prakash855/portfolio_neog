import "antd/dist/antd.css";
import React from "react";
import Project from "./Project";
import "./Projects.css";
import data from "./Data.json";

const Projects = () => (
  <div className="projects">
    <h1 style={{ fontSize: "3rem" }}>All Projects</h1>
    {data.map((project, id) => (
      <Project key={id} {...project} />
    ))}
  </div>
);

export default Projects;
