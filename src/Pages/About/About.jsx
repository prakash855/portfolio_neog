import React from "react";
import "./About.css";
import Resume from "../../resume/resume.pdf";
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
          src="https://instagram.fknu1-2.fna.fbcdn.net/v/t51.2885-15/e35/44241483_1928992097189265_4922795172249349755_n.jpg?_nc_ht=instagram.fknu1-2.fna.fbcdn.net&_nc_cat=109&_nc_ohc=yuUf3Lkwu98AX-Kh_3-&tn=704mWOPtQAXQ77vl&edm=AP_V10EBAAAA&ccb=7-4&oh=3ff3a7d2a65e4002c4b7f708749bed1b&oe=6177D772&_nc_sid=4f375e"
          alt=""
        />
      </div>
      <div id="desc">
        <h1>About Me</h1>
        {desc.map((des,id) => (
          <h3 key={id} style={{ fontWeight: 700 }}>{des}</h3>
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
