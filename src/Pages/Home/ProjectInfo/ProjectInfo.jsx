import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import './ProjectInfo.css'

const ProjectInfo = () => {
  return (
    <div id="projectinfo">
      <h1 style={{fontSize:"4rem"}}>Projects</h1>
      <h3 style={{margin:"0 4rem", textAlign:"left", fontWeight:"700", fontSize:"1rem"}}>
        I believe Project Based Learning is the best approach to learn anything.
        Hence, I've got projects in all the different technolgies that I've
        learnt over time . I'd love you to check my projects
      </h3>
      <Button style={{fontSize:"1rem", fontWeight:"600"}} type="primary">
          <Link to="/projects">My Projects</Link>
      </Button>
    </div>
  );
};

export default ProjectInfo;
