import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined, GithubOutlined } from "@ant-design/icons";

const Project = () => {
  return (
    <div id="main">
      <div id="pro">
        <div id="project">Is Your Birthday Lucky?</div>
        <div id="btn">
          <Button type="primary" ghost className="button">
            Demo <ArrowRightOutlined />
          </Button>
          <Button type="primary" ghost className="button">
            <GithubOutlined /> Code
          </Button>
        </div>
      </div>
      <p id="about_project">
        A website which checks whether your birthday is lucky or not by
        calculating if sum of digits in your birthdate is divisible by your
        lukcy number
      </p>
    </div>
  );
};

export default Project;
