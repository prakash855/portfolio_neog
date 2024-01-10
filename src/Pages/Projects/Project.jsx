import React from "react";
import { Card, Popover, Space, Typography, Button } from "antd";
const { Title, Text } = Typography;

const Project = ({ name, desc, live, code }) => (
  <Space direction="vertical" size={16}>
    <Card
      hoverable
      title={<Title level={5}>{name}</Title>}
      style={{
        width: 300,
        margin: "1rem",
      }}
    >
      <p>
        {<Text strong>{desc.slice(0, 100)}</Text>}...
        <Popover
          content={<Text strong>{desc}</Text>}
          title={<Title level={5}>{name}</Title>}
          trigger="click"
        >
          <Button type="link">More...</Button>
        </Popover>
      </p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button type="primary">
          <a href={code} target="_blank" rel="noreferrer">{`Code </>`}</a>
        </Button>
        <Button onClick={live}>
          <a href={live} target="_blank" rel="noreferrer">{`👁 View Project`}</a>
        </Button>
      </div>
    </Card>
  </Space>
);

export default Project;
