import React from "react";

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

const Skill = () => {
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
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1rem" }}>
      {skills.map((skill, id) => (
        <span key={id} className="tech">
          <span style={{ display: "flex" }}>{skill.icon}</span>
          <code className="code">{skill.name}</code>
        </span>
      ))}
    </div>
  );
};

export default Skill;
