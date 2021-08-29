import { Affix } from "antd";
import React from "react";
import "./Header.css";
import Prakash from "../../images/prakash.gif";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Affix offsetTop={0}>
      <div id="header">
        <div id="prakash">
          <img
            style={{ width: "5rem", borderRadius: "10px" }}
            src={Prakash}
            alt=""
          />
        </div>
        <div id="about_prakash">
          <ul id="lists_head">
            <li className="list_head">
              <Link className="link" to="/">Home</Link>
            </li>
            <li className="list_head">
              <Link className="link" to="/about">About</Link>
            </li>
            <li className="list_head">
              <Link className="link" to="/projects">Projects</Link>
            </li>
            <li className="list_head">
              <Link className="link" to="/blogs">Blogs</Link>
            </li>
          </ul>
        </div>
      </div>
    </Affix>
  );
};

export default Header;
