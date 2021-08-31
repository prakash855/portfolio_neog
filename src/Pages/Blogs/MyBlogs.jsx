import React from "react";

const MyBlogs = ({ picture, name, desc, link }) => {
  return (
    <div id="blog">
      <div id="blog_head">
        <div>
          <img id="blog_pic" src={picture} alt="" />
        </div>
        <div id="blog_name">{name}</div>
      </div>
      <div id="blog_desc">
        {desc}
        <a href={link} target="#">
          continue reading?
        </a>
      </div>
    </div>
  );
};

export default MyBlogs;
