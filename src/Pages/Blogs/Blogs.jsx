import React from "react";
import Blog from './Blog'
import Medium from "../../images/blog.gif";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div id="blogs">
      <div id="blogs_head">
        <img src={Medium} alt="" />
        <h1>Welcome to my blogs!</h1>
      </div>
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
      <Blog />
    </div>
  );
};

export default Blogs;
