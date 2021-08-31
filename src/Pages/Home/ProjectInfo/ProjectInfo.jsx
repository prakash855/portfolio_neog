import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./ProjectInfo.css";

const ProjectInfo = ({ name, desc, button, page }) => {
  return (
    <div id="projectinfo">
      <h1 id="projectHeader">{name}</h1>
      <h3 id="aboutProjects">{desc}</h3>
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
        <Link to={page}>{button}</Link>
      </Button>
    </div>
  );
};

export default ProjectInfo;
