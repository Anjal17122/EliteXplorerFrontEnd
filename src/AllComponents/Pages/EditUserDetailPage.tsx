import SaveRegister from "../Register/RegisterPage";
import { UserType } from "../../Service/RegisterManager/RegisterBody";
import {
  editUserApi,
  getByLoggedInUserApi,
} from "../../Service/RegisterManager/RegisterApi";
import { Card, ConfigProvider } from "antd";
import { useEffect, useState } from "react";

const EditUserDetailPage = () => {
  const [userDetail, setUserDetail] = useState<UserType>();

  useEffect(() => {
    getByLoggedInUserApi().then((res) => {
      console.log(res.data);
      setUserDetail(res.data);
    });
  }, []);
  const onDataReceived = (data: UserType) => {
    const fullData = {
      ...data,
      id: userDetail != undefined ? userDetail.id : 0,
    };
    editUserApi(fullData).then((res) => {
      setUserDetail(res.data);
    });
  };
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
          backgroundColor: "#F3F8FD",
        }}
      >
        <ConfigProvider
          theme={{
            components: {
              Card: {
                headerBg: "#DFDFDF",
                headerFontSize: 20,
                headerFontSizeSM: 20,
                headerHeight: 60,
                headerHeightSM: 60,
              },
            },
          }}
        >
          <Card
            title="Edit User Detail"
            bordered={false}
            style={{
              width: "90%",
              textAlign: "center",
            }}
          >
            <SaveRegister
              onRegistrationSave={onDataReceived}
              userBody={userDetail}
            />
          </Card>
        </ConfigProvider>
      </div>
    </>
  );
};

export default EditUserDetailPage;
