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
} from "react-icons/si";

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
        <h3 style={{fontWeight:700}}>
          Web developer who loves writing and debugging code. As an engineer, I
          am always learning and adapting to new technologies to deliver
          user-friendly,well designed, & efficient applications.
        </h3>
        <h3 style={{fontWeight:700}}>
          I am a quick learner and always curious to learn about new
          technologies. I enjoy the process of creating beautiful websites from
          designing to deploying it in the end.
        </h3>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <span className="tech">
            <span>
              <AiFillHtml5 />
            </span>
            <code className="code">HTML5</code>
          </span>
          <span className="tech">
            <span>
              <DiCss3 />
            </span>
            <code className="code">CSS3</code>
          </span>
          <span className="tech">
            <span>
              <SiMaterialUi />
            </span>
            <code className="code">MATERIAL UI</code>
          </span>
          <span className="tech">
            <span>
              <AiOutlineAntDesign />
            </span>
            <code className="code">ANT DESIGN</code>
          </span>
          <span className="tech">
            <span>
              <img
                style={{ width: "1rem" }}
                src="https://semantic-ui.com/images/logo.png"
                alt=""
              />
            </span>
            <code className="code">SEMANTIC UI</code>
          </span>
          <span className="tech">
            <span>
              <SiJavascript />
            </span>
            <code className="code">JAVASCRIPT</code>
          </span>

          <span className="tech">
            <span>
              <SiReact />
            </span>
            <code className="code">REACT JS</code>
          </span>
          <span className="tech">
            <span>
              <SiRedux />
            </span>
            <code className="code">REDUX</code>
          </span>
          <span className="tech">
            <span>
              <AiFillGithub />
            </span>
            <code className="code">GIT</code>
          </span>
          <span className="tech">
            <span>
              <SiNpm />
            </span>
            <code className="code">NPM</code>
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
