import React from "react";
import Blog from "./Blog";
import Medium from "../../images/blog.gif";
import "./Blogs.css";
import data from "./Blog.json";

const Blogs = () => {
  return (
    <div id="blogs">
      <div id="blogs_head">
        <img src={Medium} alt="" />
        <h1>Welcome to my blogs!</h1>
      </div>
      {data.map((blogData) => (
        <Blog
          picture={blogData.picture}
          name={blogData.name}
          desc={blogData.desc}
          link={blogData.link}
        />
      ))}
    </div>
  );
};

export default Blogs;
