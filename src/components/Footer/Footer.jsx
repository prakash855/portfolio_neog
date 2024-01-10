import "./Footer.css";
import { HeartFilled } from "@ant-design/icons";
import Prakash from "../../images/prakash.gif";
import { links, LINK_PORTFOLIO } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot">
        <div id="prakash">
          <img className="logo" src={Prakash} alt="" />
        </div>
        <ul className="lists">
          {links.map(({ url, icon, bg }, index) => (
            <a key={index} href={url} target="_blank" rel="noopener noreferrer">
              <li>
                <img
                  className="list"
                  src={icon}
                  alt=""
                  style={{ background: bg }}
                />
              </li>
            </a>
          ))}
        </ul>
        <p className="intro">
          <a href={LINK_PORTFOLIO} target="_blank" rel="noopener noreferrer">
            Coded{"</>"}&nbsp;
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
