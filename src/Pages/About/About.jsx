import React from "react";
import "./About.css";
import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import {
  SiMaterialUi,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNpm,
  SiNetlify,
  SiStyledComponents,
  SiIonic,
} from "react-icons/si";
import Resume from "../../resume/myresume.pdf";

const skills = [
  {
    name: "HTML5",
    icon: <AiFillHtml5 />,
  },
  {
    name: "CSS3",
    icon: <DiCss3 />,
  },
  {
    name: "ANT DESIGN",
    icon: <AiOutlineAntDesign />,
  },
  {
    name: "MATERIAL UI",
    icon: <SiMaterialUi />,
  },
  {
    name: "STYLED-COMPONENT",
    icon: <SiStyledComponents />,
  },
  {
    name: "JAVASCRIPT",
    icon: <SiJavascript />,
  },
  {
    name: "REACT JS",
    icon: <SiReact />,
  },
  {
    name: "REDUX",
    icon: <SiRedux />,
  },
  {
    name: "IONIC REACT",
    icon: <SiIonic />,
  },
  {
    name: "GITHUB",
    icon: <AiFillGithub />,
  },
  {
    name: "NETLIFY",
    icon: <SiNetlify />,
  },
  {
    name: "NPM",
    icon: <SiNpm />,
  },
];
const About = () => {
  return (
    <div id="about">
      <div>
        <img
          id="dp"
          src="https://scontent.fknu1-2.fna.fbcdn.net/v/t1.18169-9/s526x395/18058201_748836775289888_8164965364095426549_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=174925&_nc_ohc=S9bRVZxcVwIAX-xyCo5&_nc_ht=scontent.fknu1-2.fna&oh=4247d33fa08b468d3bf1d5941c7c9000&oe=61507A27"
          alt=""
        />
      </div>
      <div id="desc">
        <h1>About Me</h1>
        <h3 style={{ fontWeight: 700 }}>
          Web developer who loves writing and debugging code. As an engineer, I
          am always learning and adapting to new technologies to deliver
          user-friendly,well designed, & efficient applications.
        </h3>
        <h3 style={{ fontWeight: 700 }}>
          I am a quick learner and always curious to learn about new
          technologies. I enjoy the process of creating beautiful websites from
          designing to deploying it in the end.
        </h3>
        <h2 style={{ fontWeight: 600 }}>My Expertise</h2>

        <h3 style={{ fontWeight: 700 }}>
          Frontend Engineer with primary focus on React and JavaScript:{" "}
          <a href={Resume} target="#">
            View Resume
          </a>
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1rem" }}>
          {skills.map((skill) => (
            <span className="tech">
              <span style={{display:"flex"}}>{skill.icon}</span>
              <code className="code">{skill.name}</code>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
