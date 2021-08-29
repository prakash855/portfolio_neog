import React from "react";
import "./Footer.css";
import { HeartFilled } from "@ant-design/icons";
import github from "../../images/github.gif";
import linkedin from "../../images/linkedin.gif";
import medium from "../../images/medium.png";
import twitter from "../../images/twitter.gif";
import Prakash from '../../images/prakash.gif'
const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <div id="prakash">
          <img
            style={{ width: "5rem", borderRadius: "10px" }}
            src={Prakash}
            alt=""
          />
        </div>
        <ul className="lists">
          <a
            href="https://www.linkedin.com/in/prakash-agrahari-a5655312b/"
            target="#"
          >
            <li>
              <img className="list" src={linkedin} alt="" />
            </li>
          </a>
          <a href="https://github.com/prakash855" target="#">
            <li>
              <img className="list" src={github} alt="" />
            </li>
          </a>
          <a href="https://twitter.com/PrakashAgrahar3" target="#">
            <li>
              <img className="list" src={twitter} alt="" />
            </li>
          </a>
          <a href="https://prakash855.medium.com/" target="#">
            <li>
              <img
                style={{ background: "white" }}
                className="list"
                src={medium}
                alt=""
              />
            </li>
          </a>
        </ul>
        <p className="intro">
          Coded With &nbsp;
          <HeartFilled style={{ color: "red" }} />
          &nbsp; By PRAKASH
        </p>
      </div>
    </footer>
  );
};

export default Footer;
