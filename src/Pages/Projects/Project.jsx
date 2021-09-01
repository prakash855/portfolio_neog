import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined, GithubOutlined } from "@ant-design/icons";

const Project = ({ name, desc, live, code }) => {
  return (
    <div id="main">
      <div id="pro">
        <div id="project">{name}</div>
        <div id="btn">
          <Button
            style={{
              minWidth: "6rem",
              marginTop: "5px",
              boxShadow: "1px 1px 2px #1890ff",
            }}
            type="primary"
            ghost
            className="button"
          >
            <a href={live} target="#">
              Demo
            <ArrowRightOutlined />
            </a>
          </Button>
          <Button
            style={{
              minWidth: "6rem",
              marginTop: "5px",
              boxShadow: "1px 1px 2px #1890ff",
            }}
            type="primary"
            ghost
            className="button"
          >
            <a href={code} target="#">
            <GithubOutlined />
              Code
            </a>
          </Button>
        </div>
      </div>
      <p id="about_project">{desc}</p>
    </div>
  );
};

export default Project;
