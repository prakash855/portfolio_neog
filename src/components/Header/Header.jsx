import { Affix } from "antd";
import "./Header.css";
import Prakash from "../../images/prakash.gif";
import { Link } from "react-router-dom";
import { navigationLinks } from "../../constants";

const Header = () => (
  <Affix offsetTop={0}>
    <div id="header">
      <div id="prakash">
        <img className="logo" src={Prakash} alt="" />
      </div>
      <div id="about_prakash">
        <ul id="lists_head">
          {navigationLinks.map((link, index) => (
            <li className="list_head" key={index}>
              <Link className="link" to={link.path}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Affix>
);

export default Header;
