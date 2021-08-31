import React from "react";
import "./About.css";
import Resume from "../../resume/myresume.pdf";
import Skill from "../../components/Skills/Skill";

const desc = [
  "Web developer who loves writing and debugging code. As an engineer, I am always learning and adapting to new technologies to deliver user-friendly,well designed, & efficient applications.",
  "I am a quick learner and always curious to learn about new technologies. I enjoy the process of creating beautiful websites from designing to deploying it in the end.",
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
        {desc.map((des,id) => (
          <h3 key={id} style={{ fontWeight: 700 }}>{des}</h3>
        ))}
        <h2 style={{ fontWeight: 600 }}>My Expertise</h2>

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
