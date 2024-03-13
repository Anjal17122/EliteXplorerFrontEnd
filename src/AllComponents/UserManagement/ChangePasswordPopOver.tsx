import Search from "antd/es/input/Search";
import { UserType } from "../../Service/RegisterManager/RegisterBody";
import { changeUserPasswordApi } from "../../Service/RegisterManager/RegisterApi";
import { useState } from "react";

type ChangePasswrodButtonType = {
  id: number;
};

const ChangePasswrodButton = ({ id }: ChangePasswrodButtonType) => {
  const [searchText, setSearchText] = useState("");
  const onSearch = (value: string) => {
    const userDetail: UserType = { id, password: value };
    changeUserPasswordApi(userDetail).then(() => {
      setSearchText("");
    });
  };
  return (
    <Search
      placeholder="Change Password"
      allowClear
      enterButton="Submit"
      value={searchText}
      onSearch={onSearch}
      onChange={(e) => setSearchText(e.target.value)}
    />
  );
};

export default ChangePasswrodButton;
