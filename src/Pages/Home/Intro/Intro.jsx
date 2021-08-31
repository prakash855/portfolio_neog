import React from "react";
import Dev from "../../../images/dev.gif";
import "./Intro.css";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const profiles = [
  <FaGithubSquare style={{ fontSize: "2.8rem", marginTop: "2px" }} />,
  <AiFillLinkedin style={{ fontSize: "3rem" }} />,
  <AiFillTwitterSquare style={{ fontSize: "3rem" }} />,
];
const Intro = () => {
  return (
    <div id="intro">
      <div id="info">
        <h3 style={{ lineHeight: "1", fontSize: "2.8rem" }}>Hello! I'm</h3>
        <h1 style={{ lineHeight: "1", fontSize: "5rem" }}>Prakash Agrahari</h1>
        <h4 style={{ lineHeight: "1", fontSize: "1.6rem" }}>
          Frontend Developer
        </h4>
        <div className="underline"></div>
        <ul id="introlist">
          <li id="lst">
            <a href="github.com/prakash855">
              <FaGithubSquare
                style={{ fontSize: "2.8rem", marginTop: "2px" }}
              />
            </a>
          </li>
          <li id="lst">
            <a href="https://www.linkedin.com/in/prakash-agrahari-a5655312b/">
              <AiFillLinkedin style={{ fontSize: "3rem" }} />
            </a>
          </li>
          <li id="lst">
            <a href="https://twitter.com/PrakashAgrahar3">
              <AiFillTwitterSquare style={{ fontSize: "3rem" }} />
            </a>
          </li>
        </ul>
      </div>
      <img src={Dev} alt="" />
    </div>
  );
};

export default Intro;
