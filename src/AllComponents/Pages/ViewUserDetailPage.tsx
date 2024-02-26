import { useEffect, useState } from "react";
import { getByLoggedInUserApi } from "../../Service/RegisterManager/RegisterApi";
import {
  UserStatus,
  UserType,
} from "../../Service/RegisterManager/RegisterBody";
import UserDetailViewTable from "../UserDetailView/UserDetailViewTable";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";

const ViewUserDetailPage = () => {
  const navigate = useNavigate();
  const defaultUser: UserType = {
    id: 0,
    fullName: "",
    email: "",
    phoneNo: "",
    specialization: "",
    username: "",
    password: "",
    userStatus: UserStatus.unapproved, // assuming UserStatus is an enum with default value ACTIVE
    personRoleId: 0,
    personRole: "",
    registerDate: "",
    filename: "",
  };
  const [userData, setUserData] = useState<UserType>(defaultUser);

  useEffect(() => {
    getByLoggedInUserApi().then((res) => {
      setUserData(res.data);
    });
  }, []);

  const onEditClicked = () => {
    navigate(`${AllUrls.urlEditUserDetail}`);
  };

  return (
    <>
      <Button
        size="large"
        type="primary"
        onClick={onEditClicked}
        style={{ float: "right" }}
      >
        Edit Detail
      </Button>
      <UserDetailViewTable user={userData} />
    </>
  );
};

export default ViewUserDetailPage;
