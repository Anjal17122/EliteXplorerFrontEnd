import { useEffect, useState } from "react";
import { Button, Popover, Space, Table } from "antd";
import type { TableProps } from "antd";
import {
  UserType,
  UserTypeWithKey,
  defaultUser,
} from "../../Service/RegisterManager/RegisterBody";
import { getAllUserApi } from "../../Service/RegisterManager/RegisterApi";
import UserViewDetailModal from "./UserViewDetailModal";
import {
  mapUserTypeToUserTypeWithKey,
  mapUserTypeWithKeyToUserType,
} from "../../Service/RegisterManager/RegisterMapper";
import UserApproveDropdown from "./UserApproveDropdown";
import UserRoleDropdown from "./UserRoleDropdown";
import ChangePasswrodButton from "./ChangePasswordPopOver";

const UserManagementTable = () => {
  const [userData, setUserData] = useState<UserTypeWithKey[]>();
  const [tableRefresh, setTableRefresh] = useState<String>();
  const [userViewDetailModal, setUserViewDetailModal] =
    useState<boolean>(false);
  const [userViewDetailSingle, setUserViewDetailSingle] =
    useState<UserType>(defaultUser);

  useEffect(() => {
    getAllUserApi().then((res) => {
      const userTypeWithData: UserType[] = res.data;
      setUserData(
        userTypeWithData.map((user) => mapUserTypeToUserTypeWithKey(user))
      );
    });
  }, [tableRefresh]);
  const columns: TableProps<UserTypeWithKey>["columns"] = [
    {
      title: "Name",
      dataIndex: "fullName",
      key: "fullName",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Phone No.",
      dataIndex: "phoneNo",
      key: "phoneNo",
    },
    {
      title: "User Status",
      dataIndex: "userStatus",
      key: "userStatus",
    },
    {
      title: "User Role",
      dataIndex: "personRole",
      key: "personRole",
    },
    {
      title: "Change Status",
      dataIndex: "changeStatus",
      key: "changeStatus",
      render: (_, record) => (
        <UserApproveDropdown
          userId={record.id}
          tableRefresh={setTableRefresh}
        />
      ),
    },
    {
      title: "Change Role",
      dataIndex: "changeRole",
      key: "changeRole",
      render: (_, record) => (
        <UserRoleDropdown userId={record.id} tableRefresh={setTableRefresh} />
      ),
    },

    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <Button
            type="link"
            onClick={() => {
              setUserViewDetailSingle(mapUserTypeWithKeyToUserType(record));
              setUserViewDetailModal(true);
            }}
          >
            View Detail
          </Button>

          <Popover
            content={<ChangePasswrodButton id={record.id} />}
            title="Change Password"
            trigger="click"
          >
            <Button type="link">Change Password</Button>
          </Popover>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table columns={columns} dataSource={userData} />
      <UserViewDetailModal
        modelOpen={userViewDetailModal}
        setModelOpen={setUserViewDetailModal}
        userData={userViewDetailSingle}
      />
    </div>
  );
};

export default UserManagementTable;
