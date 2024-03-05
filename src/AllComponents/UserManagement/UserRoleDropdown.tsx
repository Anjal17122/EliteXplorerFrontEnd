import { UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message } from "antd";
import {
  chagneUserRoleApi,
  getAllPersonRoleApi,
} from "../../Service/RegisterManager/RegisterApi";
import { useEffect, useState } from "react";
import { PersonRoleType } from "../../Service/RegisterManager/RegisterBody";

type user = { userId: number; tableRefresh: (refresh: string) => void };
const UserRoleDropdown = ({ userId, tableRefresh }: user) => {
  const [items, setItems] = useState<MenuProps["items"]>();

  useEffect(() => {
    getAllPersonRoleApi().then((res) => {
      const allUserRole: PersonRoleType[] = res.data;
      setItems(
        allUserRole.map((role) => ({
          label: role.name,
          key: role.id,
          icon: <UserOutlined />, // Assuming key is derived from name
        }))
      );
    });
  }, []);

  const changeUserStatus = (id: number, userStatus: string) => {
    chagneUserRoleApi(id, userStatus).then(() => {
      const currentDate = new Date();
      const dateString = currentDate.toISOString().split("T")[0];
      const timeString = currentDate.toLocaleTimeString();
      const dateTimeString = `${dateString} ${timeString}`;
      tableRefresh(dateTimeString);
    });
  };

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    changeUserStatus(userId, e.key);
    message.success("User Role Changed");
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps} placement="bottom">
      <Button>
        {" "}
        <UserOutlined />
      </Button>
    </Dropdown>
  );
};

export default UserRoleDropdown;
