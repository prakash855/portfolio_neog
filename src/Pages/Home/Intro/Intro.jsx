import React from "react";
import "./Intro.css";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import Dev from "../../../images/dev.gif";
import { iconStyles, links } from "../../../constants";

export const introIcons = [
  <AiFillLinkedin />,
  <FaGithubSquare />,
  <AiFillTwitterSquare />,
];

const ListItem = ({ icon, url }) => (
  <li id="lst">
    <a href={url} target="#">
      {React.cloneElement(icon, { style: iconStyles })}
    </a>
  </li>
);

const Intro = () => (
  <div id="intro">
    <div id="info">
      <h3 id="hi">Hello! I'm</h3>
      <h1 id="name">Prakash Agrahari</h1>
      <h4 id="designation">Frontend Developer</h4>
      <div className="underline"></div>
      <ul id="introlist">
        {introIcons.map((icon, index) => (
          <ListItem key={index} icon={icon} url={links[index].url} />
        ))}
      </ul>
    </div>
    <img style={{ marginBottom: "3rem" }} src={Dev} alt="" />
  </div>
);

export default Intro;
