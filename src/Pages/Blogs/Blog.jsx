import React from "react";

const Blog = () => {
  return (
    <div id="blog">
      <div id="blog_head">
        <div>
          <img
            id="blog_pic"
            src="https://miro.medium.com/max/347/1*bX8_lKS2zQWNMxei33RDXA.jpeg"
            alt=""
          />
        </div>
        <div id="blog_name">JavaScript Methods: Splice vs Slice</div>
      </div>
      <div id="blog_desc">
        Arrays have so many methods in JavaScript which makes JavaScript easy to
        understand and apply mutations and computations… here we’re going to
        talk about .splice() and .slice() today. I will also write about other
        functions like find(), sort(), indexOf. These functions are being used
        in JavaScript...{" "}
        <a href="https://prakash855.medium.com/?p=b61ffef3563e">
          continue reading?
        </a>
      </div>
    </div>
  );
};

export default Blog;
