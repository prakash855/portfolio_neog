import { Typography, Card } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import "./ProjectInfo.css";

const { Title } = Typography;
const ProjectInfo = ({ name, desc, button, page }) => {
  return (
    <Card
      hoverable
      style={{ textAlign: "left", margin: "1rem" }}
      type="inner"
      title={<Title level={1}>{name}</Title>}
      extra={<Link to={page}>{button}</Link>}
    >
      <Title level={3}>{desc}</Title>
    </Card>
  );
};

export default ProjectInfo;
