import { Typography } from "antd";
import "./About.css";
import Resume from "../../resume/myresume.pdf";
import Skill from "../../components/Skills/Skill";
import Prakash from "../../images/prakash.jpg";
import { webDescription } from "../../constants";

const { Title } = Typography;

const About = () => (
  <div className="about">
    <div>
      <img className="dp" src={Prakash} alt="" />
    </div>
    <div className="desc">
      <Title level={2}>About Me</Title>
      {webDescription.map((des, id) => (
        <h3 key={id} style={{ fontWeight: 700 }}>
          {des}
        </h3>
      ))}
      <Title level={2}>My Expertise</Title>
      <h3 style={{ fontWeight: 700 }}>
        Building seamless user experiences with React and modern JavaScript
        Frontend specialist with deep expertise in React, crafting responsive,
        high-performance web applications.:{" "}
        <a href={Resume} target="#">
          View Resume
        </a>
      </h3>
      <Skill />
    </div>
  </div>
);

export default About;
