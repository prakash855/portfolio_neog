import { Affix } from "antd";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <Affix offsetTop={0}>
      <div id="header">
        <div id="prakash">Prakash</div>
        <div id="about_prakash">
          <ul id="lists">
            <li className="list">Home</li>
            <li className="list">Projects</li>
            <li className="list">Blogs</li>
          </ul>
        </div>
      </div>
    </Affix>
  );
};

export default Header;
