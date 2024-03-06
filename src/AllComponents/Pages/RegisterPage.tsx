import { useNavigate } from "react-router-dom";
import { AllUrls } from "../../Utils/MyUrls/MyUrls";
import SaveRegister from "../Register/RegisterPage";
import { UserType } from "../../Service/RegisterManager/RegisterBody";
import { registerUserApi } from "../../Service/RegisterManager/RegisterApi";
import { Card, ConfigProvider, message } from "antd";

const RegisterPage = () => {
  const navigate = useNavigate();
  const onDataReceived = (data: UserType) => {
    registerUserApi(data).then((res) => {
      console.log(res.data);
      navigate(`${AllUrls.urlLoginPage}`);
      message.success("Detail Sent For Verfication");
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
            title="User Registration"
            bordered={false}
            style={{
              width: "60%",
              textAlign: "center",
              // textAlign: "center",
              // backgroundColor: "#253241",
            }}
          >
            <SaveRegister
              onRegistrationSave={onDataReceived}
              userBody={undefined}
            />
            <div style={{ textAlign: "center", color: "black" }}>
              OR
              <br></br>
              Already have an account?{" "}
              <a href={`${AllUrls.urlLoginPage}`}>Login</a>
            </div>
          </Card>
        </ConfigProvider>
      </div>
    </>
  );
};

export default RegisterPage;
