import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./ProjectInfo.css";

const ProjectInfo = () => {
  return (
    <div id="projectinfo">
      <h1 id="projectHeader">Projects</h1>
      <h3 id="aboutProjects">
        I believe Project Based Learning is the best approach to learn anything.
        Hence, I've got projects in all the different technolgies that I've
        learnt over time . I'd love you to check my projects
      </h3>
      <Button
        style={{
          minWidth: "8rem",
          marginTop: "5px",
          boxShadow: "1px 1px 2px #1890ff",
        }}
        type="primary"
        ghost
        className="button"
      >
        <Link to="/projects">My Projects</Link>
      </Button>
    </div>
  );
};

export default ProjectInfo;
