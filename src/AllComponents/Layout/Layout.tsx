import React, { useEffect, useState } from "react";
import { SettingOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Avatar, Breadcrumb, Dropdown, Layout, Menu, theme } from "antd";
import { useNavigate, useLocation, Outlet } from "react-router-dom";

import { AllUrls } from "../../Utils/MyUrls/MyUrls";
import { localStorageLoginSuccess } from "../../Utils/Request/LocalStorageConstant";
import { LoginTypeSuccess } from "../../Service/LoginManager/LoginBody";
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

  getItem("Setting", "w", <SettingOutlined />, [
    getItem("Inclusion Setting", AllUrls.urlPdfSettingInclusion),
  ]),
];

const Typography = () => {
  const history = useNavigate();

  const location = useLocation();

  const [collapsed, setCollapsed] = useState(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>(items);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const userDropDownItems: MenuProps["items"] = [
    {
      key: "1",
      label: "View Detail",
      onClick: () => {
        history(`${AllUrls.urlViewUserDetail}`);
      },
    },

    {
      key: "2",
      label: "Logout",
      onClick: () => {
        localStorage.removeItem(localStorageLoginSuccess);
        history(`${AllUrls.urlLoginPage}`);
      },
    },
  ];

  useEffect(() => {
    const storedUserData = localStorage.getItem(localStorageLoginSuccess);
    if (storedUserData) {
      const userData: LoginTypeSuccess = JSON.parse(storedUserData);
      if (userData.roles === "ROLE_Admin") {
        const adminPanelItems: MenuItem[] = [
          getItem("Admin Panel", "yz", <UserOutlined />, [
            getItem("User Management", AllUrls.urlUserManagement),
          ]),
        ];
        const newAdminPanelItems: MenuItem[] = [...items, ...adminPanelItems];
        setMenuItems(newAdminPanelItems);
      }
    }
  }, []);
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
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Dropdown
            trigger={["click"]}
            menu={{ items: userDropDownItems }}
            placement="bottom"
            arrow={{ pointAtCenter: true }}
          >
            <Avatar
              style={{
                verticalAlign: "middel",
                float: "right",
                marginTop: "13px",
                marginRight: "40px",
              }}
              size="large"
              gap={1}
              icon={<UserOutlined />}
            />
          </Dropdown>

          <h2 style={{ textAlign: "center" }}>Elite Explorer</h2>
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
