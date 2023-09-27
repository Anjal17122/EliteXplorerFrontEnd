import React, { useState } from "react";
import { UserOutlined } from "@ant-design/icons";
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
  getItem("Detail Itinerary", AllUrls.urlHomePage, <UserOutlined />, [
    getItem("Detail Itinerary Input", AllUrls.urlSavePdf2Page),
    getItem("Detail Itinerary Output", AllUrls.urlHomePage),
  ]),

  getItem("Short Itinerary", "z", <UserOutlined />, [
    getItem("Short Itinerary Input", AllUrls.urlSaveTocPage),
    getItem("Short Itinerary Output", AllUrls.urlTocListPage),
  ]),

  getItem("Itinerary Basket", "x", <UserOutlined />, [
    getItem("Itinerary Basket Input ", AllUrls.urlMainSaveListPage),
    getItem("Itinerary Basket OUtput", AllUrls.urlMainPdfListPage),
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
          <h2>Elite Explorer</h2>
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
