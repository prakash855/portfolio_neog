import { Affix } from "antd";
import React from "react";
import "./Header.css";
import Prakash from '../../images/prakash.gif'

const Header = () => {
  return (
    <Affix offsetTop={0}>
      <div id="header">
        <div id="prakash">
          <img style={{width:"5rem", borderRadius:"10px"}} src={Prakash} alt="" />
        </div>
        <div id="about_prakash">
          <ul id="lists_head">
            <li className="list_head">Home</li>
            <li className="list_head">Projects</li>
            <li className="list_head">Blogs</li>
          </ul>
        </div>
      </div>
    </Affix>
  );
};

export default Header;
