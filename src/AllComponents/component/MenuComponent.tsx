import type { MenuProps } from "antd";
import { Button, Dropdown } from "antd";
import { MenuOutlined } from "@ant-design/icons";

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
