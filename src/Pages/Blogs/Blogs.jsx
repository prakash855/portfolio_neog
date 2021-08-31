import React from "react";
import Medium from "../../images/blog.gif";
import "./Blogs.css";
import data from "./Blog.json";
import MyBlogs from "./MyBlogs";

const Blogs = (props) => {
  return (
    <div id="blogs">
      <div id="blogs_head">
        <img src={Medium} alt="" />
        <h1>Welcome to my blogs!</h1>
      </div>
      {data.map((blogData) => (
        <MyBlogs
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
