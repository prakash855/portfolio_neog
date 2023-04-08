import React from "react";

import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiBootstrap, DiVisualstudio, DiLinux } from "react-icons/di";
import { FcLinux } from "react-icons/fc";
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
      color: "red",
    },
    {
      name: "CSS3",
      icon: <DiCss3 />,
      color: "#04A7F4",
    },
    {
      name: "ANT DESIGN",
      icon: <AiOutlineAntDesign />,
      color: "#71C1FF",
    },
    {
      name: "MATERIAL UI",
      icon: <SiMaterialUi />,
      color: "#027FFE",
    },
    {
      name: "STYLED-COMPONENT",
      icon: <SiStyledComponents />,
      color: "#FFA0E5",
    },
    {
      name: "JAVASCRIPT",
      icon: <SiJavascript />,
      color: "#E8D44D",
    },
    {
      name: "REACT JS",
      icon: <SiReact />,
      color: "#61D9FB",
    },
    {
      name: "REDUX",
      icon: <SiRedux />,
      color: "#7248B6",
    },
    {
      name: "IONIC REACT",
      icon: <SiIonic />,
      color: "#000",
    },
    {
      name: "GITHUB",
      icon: <AiFillGithub />,
      color: "#0E1117",
    },
    {
      name: "NETLIFY",
      icon: <SiNetlify />,
      color: "#31B4BA",
    },
    {
      name: "NPM",
      icon: <SiNpm />,
      color: "red",
    },
    {
      name: "BOOTSTRAP",
      icon: <DiBootstrap />,
      color: "#7010F4",
    },
    {
      name: "VISUAL STUDIO CODE",
      icon: <DiVisualstudio />,
      color: "#21A5F1",
    },
    {
      name: "LINUX",
      icon: <FcLinux />,
      color: "#21A5F1",
    },
  ];
  return (
    <div style={{ display: "flex", flexWrap: "wrap", marginTop: "1rem" }}>
      {skills.map((skill, id) => (
        <span key={id} className="tech">
          <span style={{ display: "flex", color: skill.color }}>
            {skill.icon}
          </span>
          <code className="code">{skill.name}</code>
        </span>
      ))}
    </div>
  );
};

export default Skill;
