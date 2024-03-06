import { useEffect, useState } from "react";
import { getByLoggedInUserApi } from "../../Service/RegisterManager/RegisterApi";
import {
  UserType,
  defaultUser,
} from "../../Service/RegisterManager/RegisterBody";
import UserDetailViewTable from "../UserDetailView/UserDetailViewTable";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";

const ViewUserDetailPage = () => {
  const navigate = useNavigate();

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
