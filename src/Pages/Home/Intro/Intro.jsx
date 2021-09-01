import React from "react";
import Dev from "../../../images/dev.gif";
import "./Intro.css";
import { AiFillLinkedin, AiFillTwitterSquare } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";

const Intro = () => {
  return (
    <div id="intro">
      <div id="info">
        <h3 id="hi">Hello! I'm</h3>
        <h1 id="name">Prakash Agrahari</h1>
        <h4 id="designation">Frontend Developer</h4>
        <div className="underline"></div>
        <ul id="introlist">
          <li id="lst">
            <a
              href="https://www.linkedin.com/in/prakash-agrahari-a5655312b/"
              target="#"
            >
              <AiFillLinkedin
                style={{ borderRadius: "2rem", fontSize: "3rem" }}
              />
            </a>
          </li>
          <li id="lst">
            <a href="https://github.com/prakash855" target="#">
              <FaGithubSquare
                style={{
                  borderRadius: "2rem",
                  fontSize: "2.8rem",
                  marginTop: "2px",
                }}
              />
            </a>
          </li>
          <li id="lst">
            <a href="https://twitter.com/PrakashAgrahar3" target="#">
              <AiFillTwitterSquare
                style={{ borderRadius: "2rem", fontSize: "3rem" }}
              />
            </a>
          </li>
        </ul>
      </div>
      <img style={{ marginBottom: "3rem" }} src={Dev} alt="" />
    </div>
  );
};

export default Intro;
