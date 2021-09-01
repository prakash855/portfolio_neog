import React from "react";
import "./Footer.css";
import { HeartFilled } from "@ant-design/icons";
import github from "../../images/github.gif";
import linkedin from "../../images/linkedin.gif";
import medium from "../../images/medium.png";
import twitter from "../../images/twitter.gif";
import Prakash from "../../images/prakash.gif";
import Mail from "../../images/mail.gif";
import { AiOutlineMail } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <div id="prakash">
          <img
          className="logo"
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
          <a href="mailto:sshivamprakashh301@gmail.com" target="#">
            <li>
              <img
                style={{ background: "white" }}
                className="list"
                src={Mail}
                alt=""
              />
            </li>
          </a>
        </ul>
        {/* <p>
          <a href="mailto:sshivamprakashh301@gmail.com" target="#">
            Contact Me &nbsp;
            <AiOutlineMail />
          </a>
        </p> */}
        <p className="intro">
          <a href="https://github.com/prakash855/portfolio_neog" target="#">
            Coded&nbsp;
          </a>{" "}
          With &nbsp;
          <HeartFilled style={{ color: "red" }} />
          &nbsp; By PRAKASH
        </p>
      </div>
    </footer>
  );
};

export default Footer;
