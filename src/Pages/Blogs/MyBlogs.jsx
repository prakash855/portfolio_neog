import React from "react";

const MyBlogs = ({ picture, name, desc, link }) => {
  return (
    <div className="blog">
      <div className="blog_head">
        <div>
          <img className="blog_pic" src={picture} alt="" />
        </div>
        <div className="blog_name">{name}</div>
      </div>
      <div className="blog_desc">
        {desc}
        <a href={link} target="#">
          continue reading?
        </a>
      </div>
    </div>
  );
};

export default MyBlogs;
