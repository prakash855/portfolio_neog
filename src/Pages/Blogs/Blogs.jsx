import React from "react";
import { Tabs } from "antd";
import Medium from "../../images/blog.gif";
import Quora from "../../images/quora.png";
import Quoraa from '../../images/quoraa.png'
import "./Blogs.css";
import TechData from "./TechBlog.json";
import NonTechData from "./NonTechData.json";
import MyBlogs from "./MyBlogs";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

const Blogs = () => {
  return (
    <div id="blogs">
      <div id="blogs_head">
        <img style={{width:"2rem"}} src={Medium} alt="" />
        <h1>Welcome to my blogs!</h1>
        <img src={Quoraa} alt="" />
      </div>
      <Tabs type="card" tabBarStyle={{color:"black"}} defaultActiveKey="1" onChange={callback} centered size="large">
        <TabPane
          tab={["Technical Blogs ", <img style={{width:"1.5rem"}} src={Medium} alt="" />]}
          key="1"
        >
          {TechData.map((blogData, id) => (
            <MyBlogs
              key={id}
              picture={blogData.picture}
              name={blogData.name}
              desc={blogData.desc}
              link={blogData.link}
            />
          ))}
        </TabPane>
        <TabPane
          tab={["Non-Technical Blogs ", <img src={Quora} alt="" />]}
          key="2"
        >
          {NonTechData.map((blogData, id) => (
            <MyBlogs
              key={id}
              picture={blogData.picture}
              name={blogData.name}
              desc={blogData.desc}
              link={blogData.link}
            />
          ))}
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Blogs;
