import React from "react";
import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";

const itemss: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
type menuItems = { items: MenuProps["items"] };
const MenuComponent = ({ items }: menuItems) => (
  <>
    <Dropdown
      menu={{ items }}
      placement="bottom"
      arrow={{ pointAtCenter: true }}
    >
      <Button>
        <MenuOutlined />
      </Button>
    </Dropdown>
  </>
);

export default MenuComponent;
