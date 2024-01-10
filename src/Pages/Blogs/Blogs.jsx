import { Tabs } from "antd";
import Medium from "../../images/blog.gif";
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
import { blogDescription } from "../../constants";

const { TabPane } = Tabs;

const Blogs = () => (
  <div className="blogs">
    <div className="blogs_head">
      <h1>Welcome to my blogs!</h1>
    </div>
    <Tabs
      type="card"
      tabBarStyle={{ color: "black" }}
      defaultActiveKey="1"
      onChange={() => {}}
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
          <MyBlogs key={id} {...blogData} />
        ))}
      </TabPane>
      <TabPane tab={["Non-Technical Blogs ", <SolutionOutlined />]} key="2">
        <Tabs
          type="card"
          tabBarStyle={{ color: "black" }}
          defaultActiveKey="1"
          onChange={() => {}}
          centered
          size="large"
        >
          <TabPane tab={["Quora", <img src={Quoraa} alt="" />]} key="1">
            {NonTechData.map((blogData, id) => (
              <MyBlogs key={id} {...blogData} />
            ))}
          </TabPane>
          <TabPane tab={["Food Blog", <InstagramOutlined />]} key="2">
            <div className="about">
              <div>
                <img className="dp" src={Blogger} alt="" />
              </div>
              <div className="desc">
                <h1>About Me</h1>
                {blogDescription.map((des, id) => (
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

export default Blogs;
