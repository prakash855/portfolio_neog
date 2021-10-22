import React from "react";
import { Tabs } from "antd";
import Medium from "../../images/blog.gif";
import Quora from "../../images/quora.png";
import Quoraa from "../../images/quoraa.png";
import "./Blogs.css";
import TechData from "./TechBlog.json";
import NonTechData from "./NonTechData.json";
import MyBlogs from "./MyBlogs";
import Blogger from "../../images/blogger.jpg";
import {
  InstagramFilled,
  InstagramOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

const desc = [
  "A Food Blogger who loves to discover the best food in the town. As a blogger, I am always roaming in the search of the best budget and pocket friendly outlets for foodies like me.",
  "I am much into street foods rather than big cusines. it helps people to find the kind of the food they like who aren't from my place, they can be tourists or any outsiders...",
];

const Blogs = () => {
  return (
    <div id="blogs">
      <div id="blogs_head">
        <h1>Welcome to my blogs!</h1>
      </div>
      <Tabs
        type="card"
        tabBarStyle={{ color: "black" }}
        defaultActiveKey="1"
        onChange={callback}
        centered
        size="large"
      >
        <TabPane
          tab={[
            "Technical Blogs ",
            <img style={{ width: "1.5rem" }} src={Medium} alt="" />,
          ]}
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
        <TabPane tab={["Non-Technical Blogs ", <SolutionOutlined />]} key="2">
          <Tabs
            type="card"
            tabBarStyle={{ color: "black" }}
            defaultActiveKey="1"
            onChange={callback}
            centered
            size="large"
          >
            <TabPane tab={["Quora", <img src={Quoraa} alt="" />]} key="1">
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
            <TabPane tab={["Food Blog", <InstagramOutlined />]} key="2">
              <div id="about">
                <div>
                  <img id="dp" src={Blogger} alt="" />
                </div>
                <div id="desc">
                  <h1>About Me</h1>
                  {desc.map((des, id) => (
                    <h3 key={id} style={{ fontWeight: 700 }}>
                      {des}
                    </h3>
                  ))}
                  <h2 style={{ fontWeight: 700 }}>Blog Name: FOOISTAN</h2>

                  <h3 style={{ fontWeight: 700 }}>
                    <a href="https://www.instagram.com/thezayaka/" target="#">
                      View My Blog{" "}
                      <InstagramFilled style={{ fontSize: "1rem" }} />
                    </a>
                  </h3>
                </div>
              </div>
            </TabPane>
          </Tabs>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Blogs;
