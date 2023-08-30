import React, { useState } from "react";
import { FileOutlined, TeamOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

import { AllUrls } from "../../Utils/MyUrls/MyUrls";
const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Home Page", AllUrls.urlHomePage, <UserOutlined />, [
    getItem("Add PDF2", AllUrls.urlSavePdf2Page),
    getItem("Pdf2 List", AllUrls.urlHomePage),
  ]),

  getItem("TOC Page", "z", <UserOutlined />, [
    getItem("Save Toc", AllUrls.urlSaveTocPage),
    getItem("TOC List", AllUrls.urlTocListPage),
  ]),

  getItem("Main PDF Generate", "x", <UserOutlined />, [
    getItem("Save Main ", AllUrls.urlMainSaveListPage),
    getItem("Pdf List Page", AllUrls.urlMainPdfListPage),
  ]),
  getItem("Check Page", AllUrls.urlCheckPage, <UserOutlined />),
];

const Typography: React.FC = () => {
  const history = useNavigate();

  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: "100vh" }} hasSider>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={[location.pathname]}
          onClick={(e) => {
            history(e.key);
          }}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <h2>Elite Xplorer</h2>
        </Header>
        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {location.pathname}
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Anjal ©2023 Created by Anjal Sapkota
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Typography;