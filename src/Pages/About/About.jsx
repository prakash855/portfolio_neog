import React from "react";
import "./About.css";
import Resume from "../../resume/myresume.pdf";
import Skill from "../../components/Skills/Skill";
import Prakash from "../../images/prakash.jpg";

const desc = [
  "Web developer who loves writing and debugging code. As an engineer, I am always learning and adapting to new technologies to deliver user-friendly,well designed, & efficient applications.",
  "I am a quick learner and always curious to learn about new technologies. I enjoy the process of creating beautiful websites from designing to deploying it in the end.",
];
const About = () => {
  return (
    <div className="about">
      <div>
        <img className="dp" src={Prakash} alt="" />
      </div>
      <div className="desc">
        <h1>About Me</h1>
        {desc.map((des, id) => (
          <h3 key={id} style={{ fontWeight: 700 }}>
            {des}
          </h3>
        ))}
        <h2 style={{ fontWeight: 700 }}>My Expertise</h2>

        <h3 style={{ fontWeight: 700 }}>
          Frontend Engineer with primary focus on React and JavaScript:{" "}
          <a href={Resume} target="#">
            View Resume
          </a>
        </h3>
        <Skill />
      </div>
    </div>
  );
};

export default About;
