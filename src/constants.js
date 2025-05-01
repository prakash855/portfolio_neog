import { AiFillHtml5, AiOutlineAntDesign, AiFillGithub } from "react-icons/ai";
import { DiCss3, DiBootstrap, DiVisualstudio } from "react-icons/di";
import { FcLinux } from "react-icons/fc";
import {
  SiMaterialUi,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNpm,
  SiNetlify,
  SiStyledComponents,
  SiIonic,
  SiTypescript,
} from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";

import About from "./Pages/About/About";
import Projects from "./Pages/Projects/Projects";
import Blogs from "./Pages/Blogs/Blogs";
import MyBlogs from "./Pages/Blogs/MyBlogs";
import Home from "./Pages/Home/Home";
import github from "./images/github.gif";
import linkedin from "./images/linkedin.gif";
import medium from "./images/medium.png";
import twitter from "./images/twitter.gif";
import Mail from "./images/mail.gif";

export const links = [
  {
    url: "https://www.linkedin.com/in/prakash-agrahari-a5655312b/",
    icon: linkedin,
  },
  { url: "https://github.com/prakash855", icon: github },
  { url: "https://twitter.com/PrakashAgrahar3", icon: twitter },
  { url: "https://prakash855.medium.com/", icon: medium, bg: "white" },
  { url: "mailto:sshivamprakashh301@gmail.com", icon: Mail },
];

export const LINK_PORTFOLIO = "https://github.com/prakash855/portfolio_neog";

export const webDescription = [
  "Full-stack web developer specializing in the MERN stack (MongoDB, Express.js, React, Node.js) with 4+ years of experience building scalable, user-friendly, and high-performance applications.",
  "I enjoy crafting clean, responsive UIs and integrating robust backends to deliver seamless user experiences — from designing to deploying fully functional web applications. Always curious and a quick learner, I continuously explore new technologies to enhance my skills and build impactful solutions.",
];

export const blogDescription = [
  "A Food Blogger who loves to discover the best food in the town. As a blogger, I am always roaming in the search of the best budget and pocket friendly outlets for foodies like me.",
  "I am much into street foods rather than big cusines. it helps people to find the kind of the food they like who aren't from my place, they can be tourists or any outsiders...",
];

export const navigationLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Projects", path: "/projects" },
  { label: "Blogs", path: "/blogs" },
];

export const skills = [
  {
    name: "HTML5",
    icon: <AiFillHtml5 />,
    color: "red",
  },
  {
    name: "CSS3",
    icon: <DiCss3 />,
    color: "#04A7F4",
  },
  {
    name: "ANT DESIGN",
    icon: <AiOutlineAntDesign />,
    color: "#71C1FF",
  },
  {
    name: "MATERIAL UI",
    icon: <SiMaterialUi />,
    color: "#027FFE",
  },
  {
    name: "STYLED-COMPONENT",
    icon: <SiStyledComponents />,
    color: "#FFA0E5",
  },
  {
    name: "JAVASCRIPT",
    icon: <SiJavascript />,
    color: "#E8D44D",
  },
  {
    name: "TYPESCRIPT",
    icon: <SiTypescript />,
    color: "#2F73BF",
  },
  {
    name: "REACT JS",
    icon: <SiReact />,
    color: "#61D9FB",
  },
  {
    name: "REDUX",
    icon: <SiRedux />,
    color: "#7248B6",
  },
  {
    name: "NodeJs",
    icon: <FaNodeJs />,
    color: "green",
  },
  {
    name: "IONIC REACT",
    icon: <SiIonic />,
    color: "#000",
  },
  {
    name: "GITHUB",
    icon: <AiFillGithub />,
    color: "#0E1117",
  },
  {
    name: "NETLIFY",
    icon: <SiNetlify />,
    color: "#31B4BA",
  },
  {
    name: "NPM",
    icon: <SiNpm />,
    color: "red",
  },
  {
    name: "BOOTSTRAP",
    icon: <DiBootstrap />,
    color: "#7010F4",
  },
  {
    name: "VISUAL STUDIO CODE",
    icon: <DiVisualstudio />,
    color: "#21A5F1",
  },
  {
    name: "LINUX",
    icon: <FcLinux />,
    color: "#21A5F1",
  },
];

export const iconStyles = {
  borderRadius: "2rem",
  fontSize: "3rem",
};

export const routes = [
  { path: "/", component: Home, exact: true },
  { path: "/about", component: About },
  { path: "/projects", component: Projects },
  { path: "/blogs", component: Blogs },
  { path: "/test", component: MyBlogs },
];
