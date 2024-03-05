import { MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, Dropdown, message } from "antd";
import { chageUserStatusApi } from "../../Service/RegisterManager/RegisterApi";

const items: MenuProps["items"] = [
  {
    label: "Approve",
    key: "approved",
  },
  {
    label: "Disable",
    key: "disabled",
  },
  {
    label: "Unapprove",
    key: "unapproved",
  },
];

type user = { userId: number; tableRefresh: (refresh: string) => void };
const UserApproveDropdown = ({ userId, tableRefresh }: user) => {
  const changeUserStatus = (id: number, userStatus: string) => {
    chageUserStatusApi(id, userStatus).then(() => {
      const currentDate = new Date();
      const dateString = currentDate.toISOString().split("T")[0];
      const timeString = currentDate.toLocaleTimeString();
      const dateTimeString = `${dateString} ${timeString}`;
      tableRefresh(dateTimeString);
    });
  };
  const handleMenuClick: MenuProps["onClick"] = (e) => {
    changeUserStatus(userId, e.key);
    message.success("User Status Changed");
  };

  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <Dropdown menu={menuProps} placement="bottom">
      <Button>
        {" "}
        <MenuOutlined />
      </Button>
    </Dropdown>
  );
};

export default UserApproveDropdown;
