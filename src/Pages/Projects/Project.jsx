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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem modi
        nisi eaque molestiae unde deleniti beatae hic accusamus. Autem facilis
        illo incidunt neque iste voluptate, dolore beatae cum saepe expedita?
      </p>
    </div>
  );
};

export default Project;
